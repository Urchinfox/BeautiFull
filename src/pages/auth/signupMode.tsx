import { z } from "zod";
import { useState, useEffect } from "react";
import SectionTitle from "@/components/shared/SectionTitle";
import InputField from "@/components/shared/InputField";
import Button from "@/components/shared/Button";
import supabase from "@/lib/supabaseClient";
import { Session } from "@supabase/supabase-js";
import { toast } from "react-hot-toast";

type RegisterForm = {
  email: string;
  password: string;
  confirm_password: string;
  name: string;
  phone: string;
}

type UserProfile = {
  id: string;        // sync with AuthUser.id
  name: string;
  email: string;
  phone: string;
}

// for onChanage validate (validate single field)
const registerSchema = z.object({
  email: z
    .string()
    .email('請輸入有效電子信箱')
    .min(1, "電子信箱為必填欄位"),
  password: z
    .string()
    .min(1, "密碼為必填欄位")
    .min(6, "密碼至少需要六個字元"),
  confirm_password: z
    .string()
    .min(1, "確認密碼為必填欄位")
    .min(6, "確認密碼至少需要六個字元"),
  name: z.string().min(1, "名稱為必填欄位"),
  phone: z.string().min(1, "聯絡電話為必填欄位"),
});

// for onSubmit validate (validate all fields)
const registerProfileSchema = registerSchema.refine((data) =>
  data.password === data.confirm_password, {
  message: "密碼與確認密碼不ㄧ致，請重新輸入", path: ["confirm_password"]
});

interface Errors {
  email?: string;
  password?: string;
  confirm_password?: string;
  name?: string;
  phone?: string;
}

interface SignUpModeProps {
  onChangeMode: () => void;
}

const SignUpMode = ({
  onChangeMode
}: SignUpModeProps) => {
  const handleChangeMode = onChangeMode;
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<RegisterForm>({
    email: "",
    password: "",
    confirm_password: "",
    name: "",
    phone: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedUser = { ...user, [name]: value };
    setUser(updatedUser);

    const fieldSchema = registerSchema.shape[name as keyof typeof registerSchema.shape];
    const result = fieldSchema.safeParse(value);
    if (!result.success) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: result.error.issues[0]?.message
      }));
    } else {
      setErrors((prevErrors) => {
        const { [name as keyof Errors]: removedError, ...restErrors } = prevErrors;
        return restErrors;
      });
    }
  };

  const validate = (userData: typeof user) => {
    const result = registerProfileSchema
      .refine((data) =>
        data.password === data.confirm_password, {
          message: "密碼與確認密碼不ㄧ致，請重新輸入", path: ["confirm_password"]
        })
      .safeParse(userData);

    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        newErrors[issue.path[0]] = issue?.message;
      });
      setErrors(newErrors);
      return false;
    }
    return true;
  };

  const handleOnSubmit = async () => {
    setIsLoading(true);

    if (!validate(user)) {
      setIsLoading(false);
      return;

    } else {
      setErrors({});
    }

    const { email, password } = user;

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            display_name: user.name,
            name: user.name,
            phone: user.phone,
            email: user.email,
          },
        },
      });

      if (error) {
        throw new Error(error.message);
      }

      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
      if (sessionError) {
        throw new Error(sessionError.message);
      }

      if (!sessionData?.session?.user) {
        throw new Error('找不到註冊資料');
      }

      const isNewUser = await checkIsNewUser(sessionData.session);
      if (!isNewUser) return;
      
      createUserProfile(sessionData.session);
      toast.success('註冊成功');

    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('系統錯誤，請稍後再試');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const checkIsNewUser = async (session: Session) => {
    const { user: sessionUser } = session;
    if (sessionUser) {
      const { id } = sessionUser;

      try {
        const { data: existingUser, error: checkError } = await supabase
          .from('users')
          .select('id')
          .eq('id', id)
          .maybeSingle();
          
        if (checkError) {
          throw new Error(`檢查使用者是否存在時發生錯誤：${checkError.message}`);
        }

        return !existingUser;

      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
          console.error(error.message);
        } else {
          toast.error('系統錯誤，請稍後再試');
        }
        return false;
      }
    }
  };

  const createUserProfile = async (session: Session) => {
    const { user: sessionUser } = session;
    if (sessionUser) {
      try {
        const newUserProfile: UserProfile = {
          id:    sessionUser.id,
          name:  sessionUser.user_metadata.name,
          email: sessionUser.user_metadata.email,
          phone: sessionUser.user_metadata.phone,
        } 
        const { error: createUserError } = await supabase
          .from('users')
          .insert([newUserProfile]);

        if (createUserError) {
          throw new Error(`創建使用者時發生錯誤：${createUserError.message}`);
        }

        toast.success('創建使用者成功');
        return true;

      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
          console.error(error.message);
        } else {
          toast.error('系統錯誤，請稍後再試');
        }
        return false;
      }
    }
    return false;
  };

  return (
    <>
      <SectionTitle textEn="Signup" textZh="註冊" />
      <div className="form">
        <h3>註冊新帳戶</h3>
        <InputField>
          <InputField.Label
            htmlFor="account"
            isRequired>
            電子信箱
          </InputField.Label>
          <InputField.Input
            id="email"
            name="email"
            errorMessage={errors.email || "請輸入電子信箱"}
            isError={!!errors.email}
            onChange={handleOnChange}
            value={user.email}
          />
        </InputField>

        <InputField>
          <InputField.Label
            htmlFor="password"
            isRequired
          >
            密碼
          </InputField.Label>
          <InputField.Input
            id="password"
            name="password"
            isError={!!errors.password}
            errorMessage={errors.password}
            value={user.password}
            type="password"
            autoComplete="new-password"
            onChange={handleOnChange}
          />
        </InputField>

        <InputField>
          <InputField.Label
            htmlFor="confirm_password"
            isRequired
          >
            確認密碼
          </InputField.Label>
          <InputField.Input
            id="confirm_password"
            name="confirm_password"
            value={user.confirm_password}
            onChange={handleOnChange}
            isError={!!errors.confirm_password}
            type="password"
            errorMessage={errors.confirm_password}
          />
        </InputField>

        <InputField>
          <InputField.Label
            htmlFor="nickname"
            isRequired
          >
            名稱
          </InputField.Label>
          <InputField.Input
            id="name"
            name="name"
            value={user.name}
            onChange={handleOnChange}
            isError={!!errors.name}
            errorMessage={errors.name || "請輸入名稱"}
          />
        </InputField>

        <InputField>
          <InputField.Label htmlFor="phone" isRequired>
            聯絡電話
          </InputField.Label>
          <InputField.Input
            id="phone"
            name="phone"
            value={user.phone}
            onChange={handleOnChange}
            isError={!!errors.phone}
            errorMessage={errors.phone || "請輸入聯絡電話"}
          />
        </InputField>

        <div className="button-group">
          {
            isLoading ? (
              <div>註冊中</div>
            ) : (
              <>
                <Button
                  onClick={handleChangeMode}
                  variant="secondary"
                  icon={<i className="bi bi-arrow-right-short"></i>}
                >已經有帳號？立即登入</Button>
                <Button
                  onClick={handleOnSubmit}
                  variant="primary"
                  icon={<i className="bi bi-arrow-right-short"></i>}
                >立即註冊</Button>
              </>
            )
          }
        </div>
      </div>
    </>
  )
}
export default SignUpMode;