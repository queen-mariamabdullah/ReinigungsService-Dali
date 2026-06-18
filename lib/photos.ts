/**
 * Licensed stock photos from Unsplash (free commercial use).
 * Local SVG assets in /public are used as reliable fallbacks.
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

export const LOCAL_ASSETS = {
  hero: "/reinigungsservice-goettingen-hero-main.svg",
  contact: "/reinigungsservice-goettingen-contact-main.svg",
  services: {
    home: "/reinigungsservice-goettingen-service-home-cleaning.svg",
    office: "/reinigungsservice-goettingen-service-office-cleaning.svg",
    deep: "/reinigungsservice-goettingen-service-deep-cleaning.svg",
  },
} as const;

export const PHOTOS = {
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

export const PHOTO_FALLBACKS: Record<string, string> = {
  [PHOTOS.hero]: LOCAL_ASSETS.hero,
  [PHOTOS.about]: LOCAL_ASSETS.hero,
  [PHOTOS.contact]: LOCAL_ASSETS.contact,
  [PHOTOS.contactIntro]: LOCAL_ASSETS.contact,
  [PHOTOS.services.home]: LOCAL_ASSETS.services.home,
  [PHOTOS.services.office]: LOCAL_ASSETS.services.office,
  [PHOTOS.services.deep]: LOCAL_ASSETS.services.deep,
  [PHOTOS.blog.freshHome]: LOCAL_ASSETS.services.home,
  [PHOTOS.blog.officeHygiene]: LOCAL_ASSETS.services.office,
  [PHOTOS.blog.deepWhen]: LOCAL_ASSETS.services.deep,
};
