
import SectionTitle from "@/components/shared/SectionTitle";
import InputField from "@/components/shared/InputField";
import Button from "@/components/shared/Button";

interface LoginModeProps {
  onSubmit: () => void;
  onChangeMode: () => void;
}
const LoginMode = ({ 
  onSubmit,
  onChangeMode
}: LoginModeProps) => {
  const handleOnClick = onChangeMode;
  const handleOnSubmit = onSubmit;
  
  return (
    <>
      <SectionTitle textEn="Login" textZh="登入" />
      <div className="form">
        <h3>登入帳戶</h3>
        <InputField>
          <InputField.Label htmlFor="account" isRequired>帳號</InputField.Label>
          <InputField.Input
            id="account"
            name="account"
            errorMessage="請輸入帳號"
            isError={false}
          />
        </InputField>

        <InputField>
          <InputField.Label htmlFor="password" isRequired>密碼</InputField.Label>
          <InputField.Input id="password" name="password"
            isError={false} errorMessage="請輸入密碼"
          />
        </InputField>

        <div className="button-group">
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
        </div>
      </div>
    </>
  )
}
export default LoginMode;