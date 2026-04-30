import { Typography } from "../atoms/Typography";

type FeatureItemProps = {
  title: string;
  description: string;
};

export function FeatureItem({ title, description }: FeatureItemProps) {
  return (
    <article className="rounded-2xl border border-[#CFF5D2] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md md:p-7">
      <Typography as="h3" variant="h3" className="mb-3">
        {title}
      </Typography>
      <Typography variant="bodyMuted">{description}</Typography>
    </article>
  );
}
