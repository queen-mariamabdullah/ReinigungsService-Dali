import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({
  children,
  className = "",
  containerClassName = "",
}: SectionProps) {
  return (
    <section className={`py-16 md:py-24 ${className}`.trim()}>
      <div className={`mx-auto w-full max-w-7xl px-4 md:px-6 ${containerClassName}`.trim()}>
        {children}
      </div>
    </section>
  );
}
