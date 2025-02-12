
import SectionTitle from "@/components/shared/SectionTitle";
import InputField from "@/components/shared/InputField";
import Button from "@/components/shared/Button";

interface SignUpModeProps {
  onSubmit: () => void;
  onChangeMode: () => void;
}

const SignUpMode = ({ 
  onSubmit,
  onChangeMode
}: SignUpModeProps) => {
  const handleOnSubmit = onSubmit;
  const handleChangeMode = onChangeMode;

  return (
    <>
      <SectionTitle textEn="Signup" textZh="註冊" />
      <div className="form">
        <h3>註冊新帳戶</h3>
        <InputField>
          <InputField.Label htmlFor="account" isRequired>電子信箱</InputField.Label>
          <InputField.Input
            id="email"
            name="email"
            errorMessage="請輸入電子信箱"
            isError={false}
          />
        </InputField>

        <InputField>
          <InputField.Label htmlFor="password" isRequired>密碼</InputField.Label>
          <InputField.Input id="password" name="password"
            isError={false} errorMessage="請輸入密碼"
          />
        </InputField>

        <InputField>
          <InputField.Label htmlFor="confirm_password" isRequired>確認密碼</InputField.Label>
          <InputField.Input id="confirm_password" name="confirm_password"
            isError={false} errorMessage="請再次輸入密碼"
          />
        </InputField>

        <InputField>
          <InputField.Label htmlFor="nickname" isRequired>名稱</InputField.Label>
          <InputField.Input id="nickname" name="nickname"
            isError={false} errorMessage="請輸入名稱"
          />
        </InputField>

        <InputField>
          <InputField.Label htmlFor="phone">聯絡電話</InputField.Label>
          <InputField.Input id="phone" name="phone"
            isError={false} errorMessage="請輸入聯絡名稱"
          />
        </InputField>
        
        <div className="button-group">
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
        </div>
      </div>
    </>
  )
}
export default SignUpMode;