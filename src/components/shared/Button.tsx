import '../shared/Button.scss';
interface ButtonProps {
  children: string;
  onClick: () => void;
  className?: string;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
}

const Button = ({
  children,
  onClick,
  className = "",
  icon,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button 
      type="button"
      onClick={onClick}
      className={`
        bf-button
        ${variant}
        ${className || ""}
        `.trim()}
      {...props}
    >
      <span><i className="bi bi-circle-fill"></i></span>
      {children}
      {icon && <span className="icon">{icon}</span>}
    </button>
  )
};
export default Button;