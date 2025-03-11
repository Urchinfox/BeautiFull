import { useState, useEffect } from "react";
import SectionTitle from "@/components/shared/SectionTitle";
import InputField from "@/components/shared/InputField";
import Button from "@/components/shared/Button";
import { useAuth } from "@/context/auth";
import { z } from "zod";
import { toast } from "react-hot-toast";

interface LoginModeProps {
  onChangeMode: () => void;
}
type LoginProfile = {
  email: string,
  password: string
}
// for onChanage validate (validate single field)
const loginProfileSchema = z.object({
  email: z
    .string()
    .email('請輸入有效電子信箱')
    .min(1, "電子信箱為必填欄位"),
  password: z
    .string()
    .min(1, "密碼為必填欄位")
    .min(6, "密碼至少需要六個字元"),
});

const LoginMode = ({ 
  onChangeMode
}: LoginModeProps) => {

  const [loginProfile, setLoginProfile] = useState<LoginProfile>({
    email: "",
    password: "",
  });

  const { 
    isLoading, 
    login 
  } = useAuth();
  
  const handleOnClick = onChangeMode;
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginProfile({
      ...loginProfile,
      [name]: value
    });
  };
  const handleOnSubmit = async () => {
    const result = loginProfileSchema.safeParse(loginProfile);
    if (!loginProfile) {
      return;
    }
    if (!result) {
      toast.error('請修正錯誤');
      return;
    }
    await login({
      email: loginProfile.email,
      password: loginProfile.password
    })
  };
  
  return (
    <>
      <SectionTitle textEn="Login" textZh="登入" />
      <div className="form">
        <h3>登入帳戶</h3>
        <InputField>
          <InputField.Label htmlFor="account" isRequired>帳號（信箱）</InputField.Label>
          <InputField.Input
            id="email"
            name="email"
            errorMessage="請輸入帳號"
            isError={false}
            onChange={handleOnChange}
          />
        </InputField>

        <InputField>
          <InputField.Label htmlFor="password" isRequired>密碼</InputField.Label>
          <InputField.Input 
            id="password" 
            name="password"
            isError={false} 
            errorMessage="請輸入密碼"
            onChange={handleOnChange}
          />
        </InputField>

        <div className="button-group">
          {
            isLoading ? (
              <div>登入中</div>
            ) : (
              <>
                <Button
                  variant="secondary"
                  onClick={handleOnClick}
                  icon={<i className="bi bi-arrow-right-short"></i>}
                  >沒有帳號？立即註冊</Button>
                <Button
                  variant="primary"
                  onClick={handleOnSubmit}
                  icon={<i className="bi bi-arrow-right-short"></i>}
                  >立即登入</Button>
              </>
            )
          }
        </div>
      </div>
    </>
  )
}
export default LoginMode;