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
    <article className="rounded-2xl border border-[#DCEFE0] bg-white p-6 shadow-card transition duration-300 hover:-translate-y-0.5 hover:shadow-cardHover md:p-8">
      {imageSrc ? (
        <div className="pro-image-frame mb-5">
          <BrandedImage
            src={imageSrc}
            alt={imageAlt ?? `${title} service photo`}
            width={800}
            height={500}
            className="h-44 w-full object-cover transition duration-500 hover:scale-[1.03]"
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
