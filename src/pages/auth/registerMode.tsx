import { z } from "zod";
import { useState } from "react";
import SectionTitle from "@/components/shared/SectionTitle";
import InputField from "@/components/shared/InputField";
import Button from "@/components/shared/Button";
import { useAuth } from "@/context/auth";

type RegisterForm = {
  email: string;
  password: string;
  confirm_password: string;
  name: string;
  phone: string;
}

interface Errors {
  email?: string;
  password?: string;
  confirm_password?: string;
  name?: string;
  phone?: string;
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

interface RegisterModeProps {
  onChangeMode: () => void;
}

const RegisterMode = ({
  onChangeMode
}: RegisterModeProps) => {
  const { 
    register,
    isLoading,
  } = useAuth();
  const handleChangeMode = onChangeMode;
  const [user, setUser] = useState<RegisterForm>({
    email: "",
    password: "",
    confirm_password: "",
    name: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Errors>({});

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


  const handleOnSubmit = async () => {
    
    if (validate(user)) {
      setErrors({});
    } else {
      return;
    }

    await register({
      email: user.email,
      password: user.password,
      name: user.name,
      phone: user.phone,
    });
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
export default RegisterMode;