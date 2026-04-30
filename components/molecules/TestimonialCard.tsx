import Image from "next/image";
import { Typography } from "../atoms/Typography";

type TestimonialCardProps = {
  quote: string;
  author: string;
  role: string;
  avatarSrc?: string;
  avatarAlt?: string;
};

export function TestimonialCard({
  quote,
  author,
  role,
  avatarSrc,
  avatarAlt,
}: TestimonialCardProps) {
  return (
    <article className="rounded-2xl border border-[#DCEFE0] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md md:p-8">
      <Typography variant="body" className="mb-6">
        &ldquo;{quote}&rdquo;
      </Typography>
      <div className="flex items-center gap-4">
        {avatarSrc ? (
          <Image
            src={avatarSrc}
            alt={avatarAlt ?? author}
            width={56}
            height={56}
            className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-[#CFF5D2]"
          />
        ) : null}
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
