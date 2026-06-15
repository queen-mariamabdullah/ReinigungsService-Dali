import Image from "next/image";

type BrandedImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  showBadge?: boolean;
  brandName?: string;
};

export function BrandedImage({
  src,
  alt,
  width,
  height,
  className = "",
  sizes,
  priority = false,
  showBadge = false,
  brandName = "ReinigungsService-Göttingen",
}: BrandedImageProps) {
  const isSvg = src.endsWith(".svg");
  const svgClassName = className
    .replace(/\bobject-cover\b/g, "object-contain")
    .replace(/\bh-\d+\b/g, "h-auto min-h-[11rem]");

  return (
    <div className="relative overflow-hidden bg-brand-surface">
      {isSvg ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`block w-full ${svgClassName}`}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          sizes={sizes}
          priority={priority}
        />
      )}
      {showBadge ? (
        <div className="pointer-events-none absolute right-3 top-3 rounded-lg bg-[#1A1A1A]/75 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white backdrop-blur-sm md:text-xs">
          {brandName}
        </div>
      ) : null}
    </div>
  );
}
