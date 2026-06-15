import { Typography } from "../atoms/Typography";

type TestimonialCardProps = {
  quote: string;
  author: string;
  role: string;
};

function initialsFromName(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <article className="rounded-2xl border border-[#DCEFE0] bg-white p-6 shadow-card transition duration-300 hover:-translate-y-0.5 hover:shadow-cardHover md:p-8">
      <Typography variant="body" className="mb-6 text-[#374151]">
        &ldquo;{quote}&rdquo;
      </Typography>
      <div className="flex items-center gap-4">
        <div
          aria-hidden
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-mintLight text-sm font-bold text-brand-forest ring-2 ring-brand-mint"
        >
          {initialsFromName(author)}
        </div>
        <div>
          <Typography as="p" variant="h3" className="text-xl">
            {author}
          </Typography>
          <Typography variant="bodyMuted" className="mt-1">
            {role}
          </Typography>
        </div>
      </div>
    </article>
  );
}
