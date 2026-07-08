"use client";

import { ReactNode, useEffect, useRef } from "react";
import { ensureGsapPlugins, gsap } from "@/lib/gsap";
import { useMotionSafe } from "@/lib/motion";

type ScrollTiltProps = {
  children: ReactNode;
  className?: string;
};

export function ScrollTilt({ children, className = "" }: ScrollTiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { prefersReducedMotion } = useMotionSafe();

  useEffect(() => {
    if (prefersReducedMotion || !ref.current) return;

    ensureGsapPlugins();

    const el = ref.current;

    const onMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      gsap.to(el, {
        rotateY: x * 10,
        rotateX: -y * 10,
        transformPerspective: 900,
        duration: 0.45,
        ease: "power2.out",
      });
    };

    const onLeave = () => {
      gsap.to(el, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [prefersReducedMotion]);

  return (
    <div ref={ref} className={`[transform-style:preserve-3d] ${className}`.trim()}>
      {children}
    </div>
  );
}
