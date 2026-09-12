import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
};

export function Button({
  variant = "primary",
  icon,
  iconPosition = "right",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-40";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover",
    secondary:
      "bg-transparent text-text border border-border hover:border-text/40",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </button>
  );
}
