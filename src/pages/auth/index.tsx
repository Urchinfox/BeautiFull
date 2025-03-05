import { useState, useEffect } from 'react';
import "../auth/index.scss";
import SignUpMode from './signupMode';
import LoginMode from './loginMode';

const PageAuthIndex = () => {
  const [mode, setMode] = useState("login");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [mode]);

  return (
    <>
      <div className="auth-container">
        {
          mode === "login" && (
            <LoginMode
              onChangeMode={() => setMode("signup")} 
              onSubmit={() => console.log('submit data') } 
            />
          )
        }
        {
          mode === "signup" && (
            <SignUpMode 
              onChangeMode={() => setMode("login")}
            />
          )
        }
      </div>
    </>
  );
};

export default PageAuthIndex;
