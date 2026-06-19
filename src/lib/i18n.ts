export type Locale = "en" | "ru";

export const translations = {
  en: {
    header: {
      projects: "Projects",
      about: "About",
      services: "Services",
      contact: "Contact",
      getInTouch: "Get in Touch",
    },
    hero: {
      label: "Interior Design · Dubai & Abu Dhabi",
      eyebrow: "Julia Busigina",
      line1: "The Art of",
      line2a: "Strategic",
      line2b: "Space",
      line3: "",
      description:
        "Quiet luxury interiors for residential and commercial spaces. Full-cycle delivery in 7 to 14 days.",
      cta1: "View Projects",
      cta2: "Get in Touch",
      scroll: "Scroll",
    },
    about: {
      label: "About",
      line1: "Engineering precision",
      line2: "meets interior craft",
      bio1: "With an engineering background and a deep love for quiet luxury aesthetics, I bring structured project management to every interior. From concept development and budget alignment to procurement and final styling — the entire process is handled with precision and care.",
      bio2: "Based between Dubai and Abu Dhabi, I specialise in fast-track residential and commercial projects — delivering fully furnished, move-in-ready spaces in as little as 7 to 14 days.",
      strengths: [
        { label: "Aesthetic Intelligence", desc: "Every detail serves the whole" },
        { label: "Functional Planning", desc: "Beauty that works in daily life" },
        { label: "Budget Control", desc: "Premium results within agreed scope" },
        { label: "Structured PM", desc: "On time, every time" },
      ],
    },
    services: {
      label: "Services",
      line1: "Three areas,",
      line2: "one standard of excellence",
      cta: "Request a Proposal →",
      items: [
        {
          category: "Residential",
          tagline: "Homes that feel like you",
          items: [
            "Full furnishing & styling",
            "Move-in ready in 7–14 days",
            "Bespoke textile elements",
            "Spatial zoning & layout",
          ],
        },
        {
          category: "Investment Properties",
          tagline: "Maximise value, minimise vacancy",
          items: [
            "ROI-focused design decisions",
            "Premium finishes on budget",
            "Rapid turnaround",
            "Rental-ready presentation",
          ],
        },
        {
          category: "Commercial",
          tagline: "Spaces that represent your brand",
          items: [
            "Office & hospitality interiors",
            "Bespoke furniture production",
            "Full project management",
            "Concept to installation",
          ],
        },
      ],
    },
    projects: {
      label: "Selected Projects",
      line1: "Recent work",
      line2: "in Dubai & Abu Dhabi",
      description:
        "Six projects spanning residential and commercial interiors — all delivered on time and within scope.",
    },
    process: {
      label: "Process",
      line1: "Six steps to a",
      line2: "finished home",
      steps: [
        { title: "Discovery & Brief", desc: "Understanding your lifestyle, aesthetic preferences, budget and timeline." },
        { title: "Concept Development", desc: "Moodboard, spatial plan and material palette tailored to your space." },
        { title: "Budget Alignment", desc: "Transparent cost breakdown before any procurement begins." },
        { title: "Procurement", desc: "Sourcing and ordering all furniture, textiles and accessories." },
        { title: "Installation", desc: "Coordinating delivery and placement with precision." },
        { title: "Final Styling & Handover", desc: "The finishing layer — art, plants, accessories — and the keys are yours." },
      ],
    },
    contact: {
      label: "Get in Touch",
      line1: "Ready to transform",
      line2: "your space?",
      description: "Share your project details and I'll send you a tailored proposal within 24 hours.",
      formTitle: "Request a Proposal",
      namePlaceholder: "Julia Smith",
      emailPlaceholder: "you@example.com",
      messagePlaceholder: "Tell me about your space — location, size, timeline and any inspiration you have.",
      nameLabel: "Your Name",
      emailLabel: "Email",
      messageLabel: "Project Details",
      submit: "Send Message",
      sending: "Sending…",
      successTitle: "Message sent",
      successDesc: "I'll get back to you within 24 hours.",
      sendAnother: "Send another →",
      errorMsg: "Something went wrong. Please try again or email directly.",
    },
    footer: {
      tagline: "Interior Design & Property Enhancement",
      location: "Dubai & Abu Dhabi",
      contactLabel: "Contact",
      navLabel: "Navigation",
      rights: "All rights reserved.",
      process: "Process",
    },
    projectPage: {
      conceptLabel: "Concept",
      outcomeLabel: "Outcome",
      otherProjects: "Other Projects",
      back: "← All Projects",
      cta: "Start Your Project",
    },
  },

  ru: {
    header: {
      projects: "Проекты",
      about: "О нас",
      services: "Услуги",
      contact: "Контакт",
      getInTouch: "Связаться",
    },
    hero: {
      label: "Дизайн интерьера · Дубай и Абу-Даби",
      eyebrow: "Юлия Бусигина",
      line1: "Искусство",
      line2a: "Стратегического",
      line2b: "",
      line3: "Пространства",
      description:
        "Интерьеры тихой роскоши для жилых и коммерческих объектов. Полный цикл реализации за 7–14 дней.",
      cta1: "Смотреть проекты",
      cta2: "Связаться",
      scroll: "Прокрутить",
    },
    about: {
      label: "О нас",
      line1: "Инженерная точность",
      line2: "встречает дизайн интерьера",
      bio1: "Имея инженерное образование и глубокую любовь к эстетике тихой роскоши, я привношу структурированное управление проектами в каждый интерьер. От разработки концепции и согласования бюджета до закупки и финального стайлинга — весь процесс реализуется с точностью и заботой.",
      bio2: "Работая между Дубаем и Абу-Даби, я специализируюсь на ускоренных жилых и коммерческих проектах — сдавая полностью меблированные, готовые к заезду пространства всего за 7–14 дней.",
      strengths: [
        { label: "Эстетический интеллект", desc: "Каждая деталь служит целому" },
        { label: "Функциональное планирование", desc: "Красота, которая работает в жизни" },
        { label: "Контроль бюджета", desc: "Премиальный результат в рамках бюджета" },
        { label: "Управление проектом", desc: "Всегда в срок" },
      ],
    },
    services: {
      label: "Услуги",
      line1: "Три направления,",
      line2: "один стандарт качества",
      cta: "Запросить предложение →",
      items: [
        {
          category: "Жилая недвижимость",
          tagline: "Дом, который отражает вас",
          items: [
            "Полная меблировка и стайлинг",
            "Готово к заезду за 7–14 дней",
            "Индивидуальные текстильные элементы",
            "Зонирование и планировка",
          ],
        },
        {
          category: "Инвестиционная недвижимость",
          tagline: "Максимальная ценность, минимальный простой",
          items: [
            "Дизайн-решения с фокусом на доходность",
            "Премиальная отделка в рамках бюджета",
            "Быстрые сроки реализации",
            "Презентация для сдачи в аренду",
          ],
        },
        {
          category: "Коммерческая недвижимость",
          tagline: "Пространства, представляющие ваш бренд",
          items: [
            "Офисные и гостиничные интерьеры",
            "Производство мебели на заказ",
            "Полное управление проектом",
            "От концепции до монтажа",
          ],
        },
      ],
    },
    projects: {
      label: "Избранные проекты",
      line1: "Последние работы",
      line2: "в Дубае и Абу-Даби",
      description:
        "Шесть проектов жилых и коммерческих интерьеров — все сданы в срок и в рамках бюджета.",
    },
    process: {
      label: "Процесс",
      line1: "Шесть шагов к",
      line2: "готовому дому",
      steps: [
        { title: "Знакомство и бриф", desc: "Изучаем ваш образ жизни, эстетические предпочтения, бюджет и сроки." },
        { title: "Разработка концепции", desc: "Мудборд, план пространства и материальная палитра под ваш объект." },
        { title: "Согласование бюджета", desc: "Прозрачная смета до начала закупок." },
        { title: "Закупка", desc: "Подбор и заказ всей мебели, текстиля и аксессуаров." },
        { title: "Монтаж", desc: "Координация доставки и расстановки с точностью до детали." },
        { title: "Финальный стайлинг и сдача", desc: "Завершающий слой — арт, растения, аксессуары — и ключи ваши." },
      ],
    },
    contact: {
      label: "Связаться",
      line1: "Готовы преобразить",
      line2: "ваше пространство?",
      description: "Расскажите о вашем проекте, и я пришлю индивидуальное предложение в течение 24 часов.",
      formTitle: "Запросить предложение",
      namePlaceholder: "Юлия Смит",
      emailPlaceholder: "вы@example.com",
      messagePlaceholder: "Расскажите о вашем пространстве — локация, площадь, сроки и любые идеи.",
      nameLabel: "Ваше имя",
      emailLabel: "Email",
      messageLabel: "Детали проекта",
      submit: "Отправить",
      sending: "Отправляем…",
      successTitle: "Сообщение отправлено",
      successDesc: "Я отвечу вам в течение 24 часов.",
      sendAnother: "Отправить ещё →",
      errorMsg: "Что-то пошло не так. Попробуйте ещё раз или напишите напрямую.",
    },
    footer: {
      tagline: "Дизайн интерьера и развитие недвижимости",
      location: "Дубай и Абу-Даби",
      contactLabel: "Контакты",
      navLabel: "Навигация",
      rights: "Все права защищены.",
      process: "Процесс",
    },
    projectPage: {
      conceptLabel: "Концепция",
      outcomeLabel: "Результат",
      otherProjects: "Другие проекты",
      back: "← Все проекты",
      cta: "Начать проект",
    },
  },
} as const;

export type Translations = {
  header: { projects: string; about: string; services: string; contact: string; getInTouch: string };
  hero: { label: string; eyebrow: string; line1: string; line2a: string; line2b: string; line3: string; description: string; cta1: string; cta2: string; scroll: string };
  about: { label: string; line1: string; line2: string; bio1: string; bio2: string; strengths: readonly { label: string; desc: string }[] };
  services: { label: string; line1: string; line2: string; cta: string; items: readonly { category: string; tagline: string; items: readonly string[] }[] };
  projects: { label: string; line1: string; line2: string; description: string };
  process: { label: string; line1: string; line2: string; steps: readonly { title: string; desc: string }[] };
  contact: { label: string; line1: string; line2: string; description: string; formTitle: string; namePlaceholder: string; emailPlaceholder: string; messagePlaceholder: string; nameLabel: string; emailLabel: string; messageLabel: string; submit: string; sending: string; successTitle: string; successDesc: string; sendAnother: string; errorMsg: string };
  footer: { tagline: string; location: string; contactLabel: string; navLabel: string; rights: string; process: string };
  projectPage: { conceptLabel: string; outcomeLabel: string; otherProjects: string; back: string; cta: string };
};
