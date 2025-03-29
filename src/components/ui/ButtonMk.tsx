
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonMkProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const ButtonMk = ({
  variant = "primary",
  size = "md",
  children,
  className,
  icon,
  iconPosition = "left",
  ...props
}: ButtonMkProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-mk-accent/50 disabled:opacity-50";

  const variantStyles = {
    primary: "bg-mk-accent hover:bg-mk-hover text-black font-semibold shadow-lg shadow-mk-accent/20 hover:shadow-mk-hover/40",
    secondary: "bg-mk-border hover:bg-mk-border/80 text-black font-semibold",
    outline: "bg-transparent border border-mk-border hover:border-mk-accent text-black hover:text-black font-semibold",
  };

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="mr-2 text-black">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="ml-2 text-black">{icon}</span>
      )}
    </button>
  );
};

export default ButtonMk;
