/**
 * Branded local illustrations in /public — reliable in dev and production.
 * Optional Unsplash URLs via NEXT_PUBLIC_USE_REMOTE_PHOTOS=true.
 * @see https://unsplash.com/license
 */
const unsplash = (id: string, width: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const useRemotePhotos = process.env.NEXT_PUBLIC_USE_REMOTE_PHOTOS === "true";

export const PHOTO_LICENSE = {
  provider: useRemotePhotos ? "Unsplash" : "Eigene Markenillustrationen",
  licenseUrl: "https://unsplash.com/license",
  notice: useRemotePhotos
    ? "Website-Bilder stammen von Unsplash und dürfen gemäß Unsplash License kostenlos genutzt werden."
    : "Website-Bilder sind markenspezifische Illustrationen aus diesem Projekt.",
} as const;

export const LOCAL_ASSETS = {
  hero: "/reinigungsservice-goettingen-hero-main.svg",
  contact: "/reinigungsservice-goettingen-contact-main.svg",
  services: {
    home: "/reinigungsservice-goettingen-service-home-cleaning.svg",
    office: "/reinigungsservice-goettingen-service-office-cleaning.svg",
    deep: "/reinigungsservice-goettingen-service-deep-cleaning.svg",
  },
} as const;

const REMOTE_PHOTOS = {
  hero: unsplash("photo-1581578731548-c64695cc6952", 1600),
  about: unsplash("photo-1600880292203-757bb62b4baf", 1400),
  contact: unsplash("photo-1556761175-b413da4baf72", 1200),
  contactIntro: unsplash("photo-1556761175-5973dc0f32e7", 1200),
  services: {
    home: unsplash("photo-1600585154340-be6161a56a0c", 1000),
    office: unsplash("photo-1497366216548-37526070297c", 1000),
    deep: unsplash("photo-1571019613454-1cb2f99b2d8b", 1000),
  },
  blog: {
    freshHome: unsplash("photo-1583847268964-b28dc8f51f92", 900),
    officeHygiene: unsplash("photo-1497366754035-f200968a6e72", 900),
    deepWhen: unsplash("photo-1558618666-fcd25c85cd64", 900),
  },
} as const;

const LOCAL_PHOTOS = {
  hero: LOCAL_ASSETS.hero,
  about: LOCAL_ASSETS.hero,
  contact: LOCAL_ASSETS.contact,
  contactIntro: LOCAL_ASSETS.contact,
  services: LOCAL_ASSETS.services,
  blog: {
    freshHome: LOCAL_ASSETS.services.home,
    officeHygiene: LOCAL_ASSETS.services.office,
    deepWhen: LOCAL_ASSETS.services.deep,
  },
} as const;

export const PHOTOS = useRemotePhotos ? REMOTE_PHOTOS : LOCAL_PHOTOS;

export const PHOTO_FALLBACKS: Record<string, string> = {
  [REMOTE_PHOTOS.hero]: LOCAL_ASSETS.hero,
  [REMOTE_PHOTOS.about]: LOCAL_ASSETS.hero,
  [REMOTE_PHOTOS.contact]: LOCAL_ASSETS.contact,
  [REMOTE_PHOTOS.contactIntro]: LOCAL_ASSETS.contact,
  [REMOTE_PHOTOS.services.home]: LOCAL_ASSETS.services.home,
  [REMOTE_PHOTOS.services.office]: LOCAL_ASSETS.services.office,
  [REMOTE_PHOTOS.services.deep]: LOCAL_ASSETS.services.deep,
  [REMOTE_PHOTOS.blog.freshHome]: LOCAL_ASSETS.services.home,
  [REMOTE_PHOTOS.blog.officeHygiene]: LOCAL_ASSETS.services.office,
  [REMOTE_PHOTOS.blog.deepWhen]: LOCAL_ASSETS.services.deep,
};

export function isRemotePhoto(src: string) {
  return src.startsWith("http://") || src.startsWith("https://");
}
