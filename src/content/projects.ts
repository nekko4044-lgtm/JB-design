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
  coverDesktop?: string;
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
    cover: "/images/palm-hills/main.jpg",
    coverDesktop: "/images/palm-hills/section-main.jpg",
    gallery: [
      "/images/palm-hills/01.jpg",
      "/images/palm-hills/02.jpg",
      "/images/palm-hills/03.webp",
      "/images/palm-hills/04.webp",
      "/images/palm-hills/05.webp",
      "/images/palm-hills/06.webp",
      "/images/palm-hills/07.webp",
      "/images/palm-hills/08.webp",
      "/images/palm-hills/09.webp",
      "/images/palm-hills/10.webp",
      "/images/palm-hills/11.webp",
      "/images/palm-hills/12.webp",
      "/images/palm-hills/13.webp",
      "/images/palm-hills/14.jpg",
      "/images/palm-hills/15.webp",
      "/images/palm-hills/16.webp",
      "/images/palm-hills/17.webp",
      "/images/palm-hills/18.webp",
      "/images/palm-hills/19.webp",
      "/images/palm-hills/20.webp",
      "/images/palm-hills/21.webp",
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
    cover: "/images/mamsha/main.webp",
    coverDesktop: "/images/mamsha/section-main.webp",
    gallery: [
      "/images/mamsha/01.webp",
      "/images/mamsha/02.webp",
      "/images/mamsha/03.webp",
      "/images/mamsha/04.webp",
      "/images/mamsha/05.webp",
      "/images/mamsha/06.webp",
      "/images/mamsha/07.webp",
      "/images/mamsha/08.webp",
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
    cover: "/images/stella-maris/main.jpg",
    coverDesktop: "/images/stella-maris/section-main.jpg",
    gallery: [
      "/images/stella-maris/01.jpg",
      "/images/stella-maris/02.jpg",
      "/images/stella-maris/03.jpg",
      "/images/stella-maris/04.jpg",
      "/images/stella-maris/05.jpg",
      "/images/stella-maris/06.jpg",
      "/images/stella-maris/07.jpg",
      "/images/stella-maris/08.jpg",
      "/images/stella-maris/09.jpg",
      "/images/stella-maris/10.jpg",
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
    cover: "/images/sobha-hartland/main.webp",
    coverDesktop: "/images/sobha-hartland/section-main.webp",
    gallery: [
      "/images/sobha-hartland/01.webp",
      "/images/sobha-hartland/02.webp",
      "/images/sobha-hartland/03.webp",
      "/images/sobha-hartland/04.webp",
      "/images/sobha-hartland/05.webp",
      "/images/sobha-hartland/06.webp",
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
    cover: "/images/one-district/main.webp",
    coverDesktop: "/images/one-district/section-main.webp",
    gallery: [
      "/images/one-district/01.jpg",
      "/images/one-district/02.webp",
      "/images/one-district/03.webp",
      "/images/one-district/04.webp",
      "/images/one-district/05.webp",
      "/images/one-district/06.webp",
      "/images/one-district/07.webp",
      "/images/one-district/08.webp",
      "/images/one-district/09.webp",
      "/images/one-district/10.webp",
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
    cover: "/images/heton-office/main.jpg",
    coverDesktop: "/images/heton-office/section-main.jpg",
    gallery: [
      "/images/heton-office/main.jpg",
      "/images/heton-office/01.jpg",
      "/images/heton-office/02.jpg",
      "/images/heton-office/03.jpg",
      "/images/heton-office/04.jpg",
      "/images/heton-office/05.jpg",
      "/images/heton-office/06.jpg",
      "/images/heton-office/07.jpg",
      "/images/heton-office/08.jpg",
      "/images/heton-office/09.jpg",
      "/images/heton-office/10.jpg",
    ],
  },
];
