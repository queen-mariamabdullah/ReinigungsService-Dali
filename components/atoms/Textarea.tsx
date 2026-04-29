import { TextareaHTMLAttributes } from "react";

type TextareaProps = {
  name: string;
  placeholder: string;
  rows?: number;
  className?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({
  name,
  placeholder,
  rows = 5,
  className = "",
  ...props
}: TextareaProps) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      rows={rows}
      id={props.id ?? name}
      className={`w-full rounded-xl border border-[#CFF5D2] bg-white px-4 py-3 text-base text-[#1A1A1A] outline-none transition placeholder:text-[#6B7280] focus:border-[#1F5F4A] focus:ring-2 focus:ring-[#CFF5D2] ${className}`.trim()}
      {...props}
    />
  );
}
