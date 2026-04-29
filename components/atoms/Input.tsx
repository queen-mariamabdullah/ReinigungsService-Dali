import { InputHTMLAttributes } from "react";

type InputProps = {
  type?: "text" | "email";
  name: string;
  placeholder: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({
  type = "text",
  name,
  placeholder,
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      id={props.id ?? name}
      className={`w-full rounded-xl border border-[#CFF5D2] bg-white px-4 py-3 text-base text-[#1A1A1A] outline-none transition placeholder:text-[#6B7280] focus:border-[#1F5F4A] focus:ring-2 focus:ring-[#CFF5D2] ${className}`.trim()}
      {...props}
    />
  );
}
