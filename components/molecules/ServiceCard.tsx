import { Typography } from "../atoms/Typography";
import { BrandedImage } from "./BrandedImage";

type ServiceCardProps = {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function ServiceCard({
  title,
  description,
  imageSrc,
  imageAlt,
}: ServiceCardProps) {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md md:p-8">
      {imageSrc ? (
        <div className="mb-5 overflow-hidden rounded-xl border border-[#CFF5D2]">
          <BrandedImage
            src={imageSrc}
            alt={imageAlt ?? `${title} service photo`}
            width={800}
            height={500}
            className="h-44 w-full object-cover"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </div>
      ) : null}
      <Typography as="h3" variant="h3" className="mb-4">
        {title}
      </Typography>
      <Typography variant="bodyMuted">{description}</Typography>
    </article>
  );
}
