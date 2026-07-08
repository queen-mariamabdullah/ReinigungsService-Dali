"use client";

import { useEffect, useRef } from "react";
import { ensureGsapPlugins, gsap } from "@/lib/gsap";
import { useMotionSafe } from "@/lib/motion";
import { Icon, IconProps } from "../atoms/Icon";

type ScrollStatProps = {
  value: string;
  label: string;
  icon: IconProps["name"];
  numericTarget?: number;
  suffix?: string;
};

export function ScrollStat({ value, label, icon, numericTarget, suffix = "" }: ScrollStatProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLParagraphElement>(null);
  const { prefersReducedMotion } = useMotionSafe();

  useEffect(() => {
    if (prefersReducedMotion || !rootRef.current) return;

    ensureGsapPlugins();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        rootRef.current,
        { opacity: 0, y: 28, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        },
      );

      if (numericTarget !== undefined && valueRef.current) {
        const counter = { val: 0 };
        gsap.to(counter, {
          val: numericTarget,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          onUpdate: () => {
            if (valueRef.current) {
              const display =
                numericTarget % 1 !== 0
                  ? counter.val.toFixed(1)
                  : Math.round(counter.val).toString();
              valueRef.current.textContent = `${display}${suffix}`;
            }
          },
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, [numericTarget, prefersReducedMotion, suffix]);

  return (
    <div
      ref={rootRef}
      className="flex items-center gap-4 rounded-2xl border border-brand-mint/80 bg-brand-surface px-4 py-4 md:px-5 md:py-5"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-mintLight text-brand-forest ring-1 ring-brand-mint">
        <Icon name={icon} className="h-5 w-5" strokeWidth={2} />
      </div>
      <div>
        <p
          ref={valueRef}
          className="font-display text-2xl font-bold leading-none text-brand-forest md:text-3xl"
        >
          {value}
        </p>
        <p className="mt-1.5 font-body text-xs font-semibold text-[#6B7280] md:text-sm">{label}</p>
      </div>
    </div>
  );
}
