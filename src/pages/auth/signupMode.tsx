
import { useState } from "react";
import SectionTitle from "@/components/shared/SectionTitle";
import InputField from "@/components/shared/InputField";
import Button from "@/components/shared/Button";
import supabase from "@/lib/supabaseClient";
import { toast } from "react-hot-toast";

interface SignUpModeProps {
  onSubmit: () => void;
  onChangeMode: () => void;
}

const SignUpMode = ({
  onSubmit,
  onChangeMode
}: SignUpModeProps) => {
  const handleChangeMode = onChangeMode;
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    id: "",
    email: "",
    password: "",
    confirm_password: "",
    name: "",
    phone: "",
    updated_at: new Date(),
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleOnSubmit = async () => {
    setIsLoading(true);

    const { email, password, confirm_password, name, phone } = user;
    if (password !== confirm_password) {
      toast.error('密碼與確認密碼不一致，請重新輸入');
      setIsLoading(false);
      return;
    };

    const { data, error } = await supabase.auth.signUp({
      email,
      password
    });

    if (error) {
      toast.error(error.message);
      setIsLoading(false);
      return;
    }

    const userId = data.user?.id;

    if (userId) {
      const { error: userError } = await supabase.from("users").insert([
        {
          id: userId,
          email: user.email,
          name,
          phone,
          updated_at: new Date(),
        },
      ]);

      if (userError) {
        console.error("儲存 users 資料失敗:", userError.message);
        toast.error('糟糕！系統出錯，請稍後再試');
        setIsLoading(false);
        return;
      }
      toast.success('註冊成功');
    }

    setIsLoading(false);
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
            errorMessage="請輸入電子信箱"
            isError={false}
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
            isError={false} errorMessage="請輸入密碼"
            value={user.password}
            type="password"
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
            isError={false}
            type="password"
            errorMessage="請再次輸入密碼"
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
            isError={false}
            errorMessage="請輸入名稱"
          />
        </InputField>

        <InputField>
          <InputField.Label htmlFor="phone">
            聯絡電話
          </InputField.Label>
          <InputField.Input
            id="phone"
            name="phone"
            value={user.phone}
            onChange={handleOnChange}
            isError={false}
            errorMessage="請輸入聯絡名稱"
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