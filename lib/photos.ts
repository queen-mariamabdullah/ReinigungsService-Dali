/**
 * Licensed stock photos from Unsplash (free commercial use).
 * @see https://unsplash.com/license
 */
const unsplash = (id: string, width: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export const PHOTO_LICENSE = {
  provider: "Unsplash",
  licenseUrl: "https://unsplash.com/license",
  notice:
    "Website-Bilder stammen von Unsplash und dürfen gemäß Unsplash License kostenlos genutzt werden.",
} as const;

export const PHOTOS = {
  hero: unsplash("photo-1581578731548-c64695cc6952", 1600),
  about: unsplash("photo-1527515637462-cff94ee43b66", 1400),
  contact: unsplash("photo-1423666639045-f560000c27a9", 1200),
  contactIntro: unsplash("photo-1556761175-5973dc0f32e7", 1200),
  services: {
    home: unsplash("photo-1600585154340-be6161a56a0c", 1000),
    office: unsplash("photo-1497366811353-6edc156132f9", 1000),
    deep: unsplash("photo-1628177143675-92f29f45f1b8", 1000),
  },
  blog: {
    freshHome: unsplash("photo-1583847268964-b28dc8f51f92", 900),
    officeHygiene: unsplash("photo-1497366754035-f200968a6e72", 900),
    deepWhen: unsplash("photo-1558618666-fcd25c85cd64", 900),
  },
} as const;
