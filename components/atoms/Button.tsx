import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#1F5F4A] text-white shadow-sm hover:-translate-y-0.5 hover:bg-[#1A523F] hover:shadow-md focus-visible:ring-[#1F5F4A]",
  secondary:
    "border border-[#1F5F4A] bg-transparent text-[#1F5F4A] hover:-translate-y-0.5 hover:bg-[#CFF5D2] focus-visible:ring-[#1F5F4A]",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
  type = "button",
  ...props
}: ButtonProps) {
  const classes =
    `inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 ${variantClasses[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
