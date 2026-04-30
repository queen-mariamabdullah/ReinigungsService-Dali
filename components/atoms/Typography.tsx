import { ReactNode } from "react";

type TypographyVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "body"
  | "bodyMuted"
  | "eyebrow";

type TypographyProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  variant?: TypographyVariant;
  className?: string;
  children: ReactNode;
};

const variantClasses: Record<TypographyVariant, string> = {
  display:
    "font-[var(--font-display)] text-4xl font-bold leading-[1.1] tracking-tight text-[#1A1A1A] md:text-6xl",
  h1: "font-[var(--font-display)] text-3xl font-bold leading-tight tracking-tight text-[#1A1A1A] md:text-5xl",
  h2: "font-[var(--font-display)] text-2xl font-semibold leading-tight text-[#1A1A1A] md:text-4xl",
  h3: "font-[var(--font-display)] text-xl font-semibold leading-tight text-[#1A1A1A] md:text-2xl",
  body: "text-base leading-7 text-[#1A1A1A] md:text-[1.05rem]",
  bodyMuted: "text-base leading-7 text-[#4B5563] md:text-[1.05rem]",
  eyebrow:
    "text-sm font-semibold uppercase tracking-[0.08em] text-[#1F5F4A] md:text-base",
};

export function Typography({
  as = "p",
  variant = "body",
  className = "",
  children,
}: TypographyProps) {
  const Component = as;
  return (
    <Component className={`${variantClasses[variant]} ${className}`.trim()}>
      {children}
    </Component>
  );
}
