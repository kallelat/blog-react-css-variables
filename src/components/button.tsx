import { FunctionComponent } from "react";
import "./button.css";

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({
  onClick,
  disabled = false,
  children,
}) => {
  return (
    <button onClick={() => onClick()} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
