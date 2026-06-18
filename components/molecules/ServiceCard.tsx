import Link from "next/link";
import { Icon } from "../atoms/Icon";
import { Typography } from "../atoms/Typography";
import { BrandedImage } from "./BrandedImage";

type ServiceCardProps = {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
};

export function ServiceCard({
  title,
  description,
  imageSrc,
  imageAlt,
  href,
}: ServiceCardProps) {
  const content = (
    <>
      {imageSrc ? (
        <div className="overflow-hidden border-b border-brand-mint/80">
          <BrandedImage
            src={imageSrc}
            alt={imageAlt ?? `${title} – ReinigungsService Göttingen`}
            width={800}
            height={500}
            className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <Typography as="h3" variant="h3" className="mb-3">
          {title}
        </Typography>
        <Typography variant="bodyMuted" className="mb-5 flex-1">
          {description}
        </Typography>
        <span className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-brand-forest">
          Mehr erfahren
          <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
        </span>
      </div>
    </>
  );

  const className =
    "group flex h-full flex-col overflow-hidden rounded-2xl border border-[#DCEFE0] bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-forest/20 hover:shadow-cardHover";

  if (href) {
    return (
      <Link href={href} className={`${className} cursor-pointer`}>
        {content}
      </Link>
    );
  }

  return <article className={className}>{content}</article>;
}
