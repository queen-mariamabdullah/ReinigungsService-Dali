import type { IconProps } from "../atoms/Icon";
import { Icon } from "../atoms/Icon";
import { Typography } from "../atoms/Typography";

type FeatureItemProps = {
  title: string;
  description: string;
  icon?: IconProps["name"];
};

export function FeatureItem({ title, description, icon = "sparkle" }: FeatureItemProps) {
  return (
    <article className="group h-full rounded-2xl border border-brand-mint bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-forest/25 hover:shadow-cardHover md:p-7">
      <div className="mb-5 inline-flex rounded-xl bg-brand-mintLight p-3.5 text-brand-forest ring-1 ring-brand-mint transition duration-300 group-hover:bg-brand-mint">
        <Icon name={icon} className="h-6 w-6" strokeWidth={1.75} />
      </div>
      <Typography as="h3" variant="h3" className="mb-3">
        {title}
      </Typography>
      <Typography variant="bodyMuted">{description}</Typography>
    </article>
  );
}
