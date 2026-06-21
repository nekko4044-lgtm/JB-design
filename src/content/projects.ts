export type Project = {
  slug: string;
  title: string;
  location: string;
  timeline: string;
  timeline_ru?: string;
  category: "residential" | "investment" | "commercial";
  summary: string;
  concept: string;
  concept_ru?: string;
  outcome?: string;
  outcome_ru?: string;
  cover: string;
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "palm-hills-villa",
    title: "Palm Hills Villa",
    location: "Dubai",
    timeline: "14 days",
    timeline_ru: "14 дней",
    category: "residential",
    summary: "Villa furnishing project for a family relocating to Dubai. Completed in 14 days.",
    concept:
      "Complete furnishing using carefully selected in-stock furniture combined with bespoke textile elements and spatial zoning strategies. The design balances calm elegance with everyday functionality for a young family.",
    concept_ru:
      "Полноценная меблировка с использованием тщательно отобранной мебели из наличия в сочетании с элементами текстиля на заказ и стратегиями пространственного зонирования. Дизайн сочетает спокойную элегантность с повседневной функциональностью для молодой семьи.",
    outcome:
      "A fully functional family home delivered within two weeks, allowing the clients to relocate immediately without temporary accommodation. The project significantly improved both comfort and rental value of the property.",
    outcome_ru:
      "Полностью готовый к жизни семейный дом, переданный клиентам в течение двух недель, что позволило им сразу переехать без необходимости во временном жилье. Проект значительно повысил как комфорт, так и инвестиционную привлекательность объекта.",
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
    timeline_ru: "2 недели",
    category: "residential",
    summary:
      "Minimalist residence on Saadiyat Island designed with a focus on natural materials and architectural simplicity.",
    concept:
      "The design balances warm wood textures with a soft neutral palette, creating a calm environment that enhances the indoor-outdoor lifestyle typical for Saadiyat Island. The result is a refined and timeless interior that emphasizes space, light and natural materials.",
    concept_ru:
      "Дизайн гармонично сочетает тёплые деревянные текстуры с мягкой нейтральной палитрой, создавая спокойную среду, которая подчёркивает характерный для острова Саадийат стиль жизни — на стыке внутреннего и внешнего пространства. Результат — рафинированный и вневременной интерьер, акцентирующий пространство, свет и природные материалы.",
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
    timeline_ru: "2 недели",
    category: "residential",
    summary:
      "Family apartment in Dubai Marina combining calm refined aesthetics with everyday functionality.",
    concept:
      "The design focuses on quiet luxury through warm textures, balanced proportions and natural materials. Custom furnishings and subtle architectural elements were introduced to create a cohesive and elegant living environment.",
    concept_ru:
      "Дизайн строится на концепции тихой роскоши через тёплые текстуры, сбалансированные пропорции и натуральные материалы. Мебель на заказ и тонкие архитектурные акценты создают цельную и элегантную жилую среду.",
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
    timeline_ru: "5 недель",
    category: "residential",
    summary:
      "Compact family apartment with integrated storage and workspace solutions — maximum functionality within a limited layout.",
    concept:
      "The project focused on maximizing functionality within a limited layout through thoughtful spatial planning and custom furniture production. The result is a clean and highly efficient interior suited for modern urban living.",
    concept_ru:
      "Проект был сосредоточен на максимизации функциональности в рамках ограниченной планировки с помощью продуманного пространственного решения и мебели на заказ. Результат — чистый и высокоэффективный интерьер, созданный для современной городской жизни.",
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
    timeline_ru: "5 недель",
    category: "residential",
    summary:
      "Weekend residence for a couple living abroad — a calm retreat designed around quiet luxury and comfort.",
    concept:
      "The interior was conceived as a calm retreat combining soft neutral tones, bespoke furniture and minimal decorative elements. The design emphasizes comfort, simplicity and a sense of quiet luxury.",
    concept_ru:
      "Интерьер задуман как спокойное убежище: мягкие нейтральные тона, мебель на заказ и минималистичный декор. Дизайн делает акцент на комфорте, простоте и ощущении тихой роскоши.",
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
    timeline_ru: "3 месяца",
    category: "commercial",
    summary:
      "Full-cycle commercial interior project including design development, bespoke furniture production and installation.",
    concept:
      "The design integrates natural stone, warm wood finishes and layered lighting scenarios to create a professional yet welcoming workspace. The project balances executive presence with everyday functionality.",
    concept_ru:
      "Дизайн интегрирует природный камень, тёплые деревянные поверхности и многослойные сценарии освещения, создавая профессиональное и при этом гостеприимное рабочее пространство. Проект сочетает представительский характер с повседневной функциональностью.",
    cover: "/images/heton-office/cover.jpeg",
    gallery: [
      "/images/heton-office/01.jpeg",
      "/images/heton-office/02.jpeg",
      "/images/heton-office/03.jpeg",
      "/images/heton-office/04.jpeg",
    ],
  },
];
