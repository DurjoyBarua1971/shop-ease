import clsx from "clsx";
import { ButtonProps } from "../types";

export default function Button({
  children,
  onClick,
  disabled = false,
  fullWidth = false,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const baseClass = "rounded transition-colors font-medium";
  const widthClass = fullWidth ? "w-full" : "";
  const variantClass = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400",
    secondary: "bg-blue-500 text-white hover:bg-blue-700 disabled:bg-gray-600",
    optional:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-gray-400",
    outline:
      "border border-blue-500 text-blue-500 hover:bg-blue-50 disabled:opacity-50",
  }[variant];

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(baseClass, widthClass, variantClass, className)}
    >
      {children}
    </button>
  );
}
