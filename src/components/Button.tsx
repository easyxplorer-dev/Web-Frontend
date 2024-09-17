import { ButtonHTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
  color: string;
  outline: boolean;
  size?: "lg" | "sm" | "xs" | undefined;
  variant?: "button" | "submit" | "reset";
  extraClassName?: string;
  extraProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  disabled?: boolean;
  handleClick?: () => void;
};

function Button({
  children,
  variant = "button",
  size,
  color = "white",
  outline = false,
  extraClassName = "",
  extraProps,
  disabled = false,
  handleClick,
}: Props) {
  return (
    <button
      type={variant}
      className={`btn ${size ? `btn-${size}` : ""} text-${color} ${
        outline ? "btn-outline" : ""
      } ${extraClassName}`}
      {...extraProps}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
