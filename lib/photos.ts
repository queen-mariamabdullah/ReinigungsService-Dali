/**
 * Local marketing images in /public use ASCII filenames (goereinigungsservice-*)
 * for reliable hosting. Unsplash URLs remain for blog/people.
 */
export const PHOTOS = {
  hero: "/goereinigungsservice-hero-main.svg",
  aboutTeam:
    "https://images.unsplash.com/photo-1600880292203-757bb62b4b99?auto=format&fit=crop&w=1400&q=80",
  contact: "/goereinigungsservice-contact-main.svg",
  contactIntro: "/goereinigungsservice-contact-main.svg",
  services: {
    home: "/goereinigungsservice-service-home-cleaning.svg",
    office: "/goereinigungsservice-service-office-cleaning.svg",
    deep: "/goereinigungsservice-service-deep-cleaning.svg",
  },
  blog: {
    freshHome:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    officeHygiene:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
    deepWhen:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
  },
  people: {
    anna: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    markus:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
} as const;
