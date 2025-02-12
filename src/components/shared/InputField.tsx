import '../shared/InputField.scss';

interface InputFieldProps {
  children: React.ReactNode;
  className?: string;
};

const InputField = ({ children, className = "" }: InputFieldProps) => {
  return (
    <div className={`
      bf-control-group 
      ${className}
    `}>
      {children}
    </div>
  )
};

interface LabelProps {
  htmlFor: string;
  children: string;
  isRequired?: boolean;
  className?: string;
}
const Label = ({
  htmlFor,
  isRequired = false,
  className,
  children = ""
}: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`
        bf-control-label 
        ${className || ""}
      `}
    >
      {isRequired ? `${children} *` : children}
    </label>
  );
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  className?: string;
  isError?: boolean;
  errorMessage?: string;
  helpLink?: string;
  helpLinkText?: string;
}

const Input = ({
  id,
  name,
  className = "",
  isError = false,
  helpLink = "",
  helpLinkText = "",
  errorMessage = "",
  ...props
}: InputProps) => {
  const isErrorMode = isError && errorMessage.length > 0;
  const hasHelpLink = helpLink.length > 0 && helpLinkText.length > 0;

  return (
    <>
      <input
        id={id}
        name={name}
        {...props}
        className={`
          bf-control-input
          ${className || ""}
          ${isError ? 'error' : ""}
        `}
      />
      <div className="bf-help-block">
        {
          isErrorMode && (
            <span className="error bf-control-help-text">{errorMessage}</span>
          )
        }
        {
          hasHelpLink && (
            <a className="bf-control-help-link" href={helpLink}>{helpLinkText}</a>
          )
        }
      </div>
    </>
  );
};

InputField.Label = Label;
InputField.Input = Input;
export default InputField;