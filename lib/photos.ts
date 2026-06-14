/**
 * Provisional photos from Unsplash (free to use: https://unsplash.com/license).
 * Replace with your own branded images when ready.
 */
const unsplash = (id: string, width: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

export const PHOTOS = {
  hero: unsplash("photo-1581578731548-c64695cc6952", 1400),
  aboutTeam: unsplash("photo-1600880292203-757bb62b4b99", 1400),
  contact: unsplash("photo-1423666639045-f560000c27a9", 1200),
  contactIntro: unsplash("photo-1556761175-5973dc0f32e7", 1200),
  services: {
    home: unsplash("photo-1583847268964-b28dc8f51f92", 900),
    office: unsplash("photo-1497366754035-f200968a6e72", 900),
    deep: unsplash("photo-1628177143675-92f29f45f1b8", 900),
  },
  blog: {
    freshHome: unsplash("photo-1600585154340-be6161a56a0c", 800),
    officeHygiene: unsplash("photo-1497366811353-6edc156132f9", 800),
    deepWhen: unsplash("photo-1558618666-fcd25c85cd64", 800),
  },
  people: {
    anna: unsplash("photo-1438761681033-6461ffad8d80", 200),
    markus: unsplash("photo-1500648767791-00dcc994a43e", 200),
  },
} as const;
