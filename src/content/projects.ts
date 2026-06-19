export type Project = {
  slug: string;
  title: string;
  location: string;
  timeline: string;
  category: "residential" | "investment" | "commercial";
  summary: string;
  concept: string;
  outcome?: string;
  cover: string;
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "palm-hills-villa",
    title: "Palm Hills Villa",
    location: "Dubai",
    timeline: "14 days",
    category: "residential",
    summary: "Villa furnishing project for a family relocating to Dubai. Completed in 14 days.",
    concept:
      "Complete furnishing using carefully selected in-stock furniture combined with bespoke textile elements and spatial zoning strategies. The design balances calm elegance with everyday functionality for a young family.",
    outcome:
      "A fully functional family home delivered within two weeks, allowing the clients to relocate immediately without temporary accommodation. The project significantly improved both comfort and rental value of the property.",
    cover: "/images/palm-hills/cover.jpeg",
    gallery: [
      "/images/palm-hills/01.jpeg",
      "/images/palm-hills/02.jpeg",
      "/images/palm-hills/03.jpeg",
      "/images/palm-hills/04.jpeg",
      "/images/palm-hills/05.jpeg",
      "/images/palm-hills/06.jpeg",
      "/images/palm-hills/07.jpeg",
      "/images/palm-hills/08.jpeg",
    ],
  },
  {
    slug: "mamsha-al-saadiyat",
    title: "Mamsha Al Saadiyat",
    location: "Abu Dhabi",
    timeline: "2 weeks",
    category: "residential",
    summary:
      "Minimalist residence on Saadiyat Island designed with a focus on natural materials and architectural simplicity.",
    concept:
      "The design balances warm wood textures with a soft neutral palette, creating a calm environment that enhances the indoor-outdoor lifestyle typical for Saadiyat Island. The result is a refined and timeless interior that emphasizes space, light and natural materials.",
    cover: "/images/mamsha/cover.jpeg",
    gallery: [
      "/images/mamsha/01.jpeg",
      "/images/mamsha/02.jpeg",
      "/images/mamsha/03.jpeg",
      "/images/mamsha/04.jpeg",
    ],
  },
  {
    slug: "stella-maris",
    title: "Stella Maris",
    location: "Dubai Marina",
    timeline: "2 weeks",
    category: "residential",
    summary:
      "Family apartment in Dubai Marina combining calm refined aesthetics with everyday functionality.",
    concept:
      "The design focuses on quiet luxury through warm textures, balanced proportions and natural materials. Custom furnishings and subtle architectural elements were introduced to create a cohesive and elegant living environment.",
    cover: "/images/stella-maris/cover.jpeg",
    gallery: [
      "/images/stella-maris/01.jpeg",
      "/images/stella-maris/02.jpeg",
      "/images/stella-maris/03.jpeg",
    ],
  },
  {
    slug: "sobha-hartland",
    title: "Sobha Hartland",
    location: "Dubai",
    timeline: "5 weeks",
    category: "residential",
    summary:
      "Compact family apartment with integrated storage and workspace solutions — maximum functionality within a limited layout.",
    concept:
      "The project focused on maximizing functionality within a limited layout through thoughtful spatial planning and custom furniture production. The result is a clean and highly efficient interior suited for modern urban living.",
    cover: "/images/sobha-hartland/cover.jpeg",
    gallery: [
      "/images/sobha-hartland/01.jpeg",
      "/images/sobha-hartland/02.jpeg",
      "/images/sobha-hartland/03.jpeg",
    ],
  },
  {
    slug: "one-district",
    title: "One District",
    location: "Dubai",
    timeline: "5 weeks",
    category: "residential",
    summary:
      "Weekend residence for a couple living abroad — a calm retreat designed around quiet luxury and comfort.",
    concept:
      "The interior was conceived as a calm retreat combining soft neutral tones, bespoke furniture and minimal decorative elements. The design emphasizes comfort, simplicity and a sense of quiet luxury.",
    cover: "/images/one-district/cover.jpeg",
    gallery: [
      "/images/one-district/01.jpeg",
      "/images/one-district/02.jpeg",
      "/images/one-district/03.jpeg",
    ],
  },
  {
    slug: "heton-oil-company-office",
    title: "Heton Oil Company Office",
    location: "Dubai",
    timeline: "3 months",
    category: "commercial",
    summary:
      "Full-cycle commercial interior project including design development, bespoke furniture production and installation.",
    concept:
      "The design integrates natural stone, warm wood finishes and layered lighting scenarios to create a professional yet welcoming workspace. The project balances executive presence with everyday functionality.",
    cover: "/images/heton-office/cover.jpeg",
    gallery: [
      "/images/heton-office/01.jpeg",
      "/images/heton-office/02.jpeg",
      "/images/heton-office/03.jpeg",
      "/images/heton-office/04.jpeg",
    ],
  },
];
