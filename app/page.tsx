"use client";

import { useEffect, useRef, useState } from "react";
import GoldenSculpture from "./GoldenSculpture";

type Lang = "ar" | "en";
type Theme = "light" | "dark";
type Dual = { ar: string; en: string };

const navigation: Array<{ id: string; label: Dual }> = [
  { id: "home", label: { ar: "الرئيسية", en: "Home" } },
  { id: "about", label: { ar: "نبذة عني", en: "About" } },
  { id: "education", label: { ar: "التعليم", en: "Education" } },
  { id: "experience", label: { ar: "الخبرة", en: "Experience" } },
  { id: "projects", label: { ar: "المشاريع", en: "Projects" } },
  { id: "skills", label: { ar: "المهارات", en: "Skills" } },
  { id: "contact", label: { ar: "تواصل", en: "Contact" } },
];

const projects = [
  {
    number: "01",
    title: { ar: "نظام أتمتة مكتبة الجامعة", en: "University Library Automation" },
    type: { ar: "مشروع Full-Stack مميز", en: "Featured Full-Stack Project" },
    date: "2024 — 2025",
    description: {
      ar: "نظام متكامل مبني باستخدام Django لإدارة المستخدمين والمشاريع والكتب والمفضلة والتقييمات والإشعارات والبحث المتقدم، مع واجهات RESTful API.",
      en: "A complete Django-based library system with user management, project and book management, favorites, ratings, notifications, advanced search, and RESTful APIs.",
    },
    challenge: {
      ar: "تحويل عمليات المكتبة المتفرقة والبحث اليدوي إلى تجربة رقمية مركزية وسهلة الإدارة.",
      en: "Replace fragmented library workflows and manual discovery with one manageable digital experience.",
    },
    solution: {
      ar: "بناء منصة Django متكاملة مع صلاحيات وواجهات API وبحث متقدم وإشعارات وتقييمات.",
      en: "Built a complete Django platform with permissions, APIs, advanced search, notifications, and ratings.",
    },
    outcome: {
      ar: "نظام أسرع في البحث والإدارة وقابل للتوسع إلى تطبيقات وواجهات جديدة.",
      en: "Faster discovery and administration, with an architecture ready for new apps and interfaces.",
    },
    stack: ["Django", "DRF", "Python", "MySQL", "JavaScript", "Bootstrap"],
    href: "https://github.com/Anas-bagdady/library",
    link: { ar: "عرض على GitHub", en: "View on GitHub" },
    kind: "library",
  },
  {
    number: "02",
    title: { ar: "Prime Transporter", en: "Prime Transporter" },
    type: { ar: "موقع أعمال · النقل والخدمات", en: "Business Website · Logistics" },
    date: "2026",
    status: { ar: "مشروع عميل فعلي · هامبورغ", en: "Live Client Project · Hamburg" },
    description: {
      ar: "موقع تجاري فعلي لشركة نقل في هامبورغ، يعرض خدمات الانتقال ونقل الأثاث والإخلاء ضمن تجربة متجاوبة تقود العميل مباشرة إلى طلب الخدمة.",
      en: "A live business website for a Hamburg transport company, presenting moving, furniture transport, and clearance services through a responsive, conversion-focused experience.",
    },
    challenge: {
      ar: "تحويل مجموعة خدمات نقل متنوعة إلى رحلة واضحة تمنح العميل الثقة وتسهّل عليه الوصول للخدمة المناسبة بسرعة.",
      en: "Turn a broad range of transport services into a clear journey that builds trust and helps customers find the right service quickly.",
    },
    solution: {
      ar: "تصميم وتطوير واجهة ألمانية متجاوبة بهرم بصري قوي، عرض منظم للخدمات، ومسارات تواصل وطلب واضحة على الكمبيوتر والجوال.",
      en: "Designed and developed a responsive German interface with strong hierarchy, structured service presentation, and clear inquiry paths across desktop and mobile.",
    },
    outcome: {
      ar: "حضور رقمي احترافي يعمل فعليًا، يوضّح قيمة الشركة ويختصر المسافة بين اكتشاف الخدمة وإرسال الطلب.",
      en: "A polished live presence that communicates the company’s value and shortens the path from service discovery to inquiry.",
    },
    stack: ["Web Design", "Responsive UI", "UX", "SEO", "Netlify"],
    href: "https://primetransporter.de/",
    link: { ar: "زيارة الموقع", en: "Visit Website" },
    kind: "transport",
  },
  {
    number: "03",
    title: { ar: "Max4Media", en: "Max4Media" },
    type: { ar: "التصميم والإعلام الرقمي", en: "Digital Media Design" },
    description: {
      ar: "علامة إعلامية رقمية متخصصة في صناعة المحتوى والتصميم البصري وإدارة منصات التواصل الاجتماعي.",
      en: "A digital media brand focused on content creation, visual design, and social media management.",
    },
    challenge: {
      ar: "توحيد المحتوى والتصميم وإدارة الحضور الرقمي ضمن هوية واحدة قابلة للنمو.",
      en: "Unify content, design, and channel management into one scalable digital identity.",
    },
    solution: {
      ar: "نظام بصري ومحتوى مرن يدعم الحملات ومنصات التواصل وسرعة الإنتاج.",
      en: "Created a flexible visual and content system for campaigns, social channels, and fast production.",
    },
    outcome: {
      ar: "حضور أكثر اتساقًا وسهولة أكبر في إدارة المحتوى وتطوير العلامة.",
      en: "A more consistent presence and an easier foundation for content and brand growth.",
    },
    stack: ["Content Creation", "Design", "Social Media"],
    href: "https://www.instagram.com/max_4_media/",
    link: { ar: "عرض على Instagram", en: "View on Instagram" },
    kind: "media",
  },
];

const skillGroups = [
  {
    number: "01",
    title: { ar: "تطوير Backend", en: "Backend Development" },
    icon: "{ }",
    description: {
      ar: "بناء أنظمة Backend منظمة وقابلة للتوسع مع واجهات API موثوقة.",
      en: "Scalable backend systems with clean architecture and reliable APIs.",
    },
    skills: ["Python", "Django", "Django REST Framework", "REST APIs", "MySQL", "PostgreSQL"],
  },
  {
    number: "02",
    title: { ar: "تطوير Frontend", en: "Frontend Development" },
    icon: "</>",
    description: {
      ar: "واجهات متجاوبة وسريعة تركز على الوضوح وتجربة المستخدم.",
      en: "Fast responsive interfaces focused on clarity and user experience.",
    },
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    number: "03",
    title: { ar: "الأدوات", en: "Tools" },
    icon: "⌘",
    description: {
      ar: "سير عمل منظم للاختبار والتعاون وإدارة الإصدارات.",
      en: "A disciplined workflow for testing, collaboration, and version control.",
    },
    skills: ["Git", "GitHub", "Postman", "Cursor", "Claude"],
  },
  {
    number: "04",
    title: { ar: "المهارات الأساسية", en: "Core Skills" },
    icon: "◇",
    description: {
      ar: "تفكير هندسي يحوّل المشكلة إلى منتج رقمي متكامل.",
      en: "Engineering thinking that turns problems into complete digital products.",
    },
    skills: [
      "Full-Stack Development",
      "Backend Development",
      "API Design",
      "Database Design",
      "Problem Solving",
    ],
  },
  {
    number: "05",
    title: { ar: "تطوير مدعوم بالذكاء الاصطناعي", en: "AI-Assisted Development" },
    icon: "AI",
    description: {
      ar: "استخدام Cursor وClaude لتسريع التحليل والبرمجة وتحسين جودة الحلول.",
      en: "Using Cursor and Claude to accelerate analysis, implementation, and solution quality.",
    },
    skills: ["Cursor", "Claude", "AI Pair Programming", "Prompt Engineering"],
  },
];

const coreLinks: Array<{ id: string; code: string; label: Dual }> = [
  { id: "about", code: "01", label: { ar: "نبذة", en: "About" } },
  { id: "projects", code: "02", label: { ar: "المشاريع", en: "Projects" } },
  { id: "skills", code: "03", label: { ar: "المهارات", en: "Skills" } },
  { id: "contact", code: "04", label: { ar: "تواصل", en: "Contact" } },
];

const mobileLinks: Array<{ id: string; icon: string; label: Dual }> = [
  { id: "home", icon: "⌂", label: { ar: "الرئيسية", en: "Home" } },
  { id: "projects", icon: "▦", label: { ar: "المشاريع", en: "Projects" } },
  { id: "skills", icon: "◇", label: { ar: "المهارات", en: "Skills" } },
  { id: "contact", icon: "↗", label: { ar: "تواصل", en: "Contact" } },
];

const copy = {
  ar: {
    introBoot: "جاري تشغيل التجربة",
    introSub: "أنس البغدادي · هندسة برمجيات",
    brandSub: "مهندس برمجيات",
    menu: "فتح القائمة",
    heroKicker: "مطوّر Full-Stack · متخصص Backend",
    heroTitleStart: "أبني تجارب رقمية",
    heroTitleAccent: "متكاملة وقابلة للتوسع.",
    heroDescription:
      "أنا أنس البغدادي، أطوّر تطبيقات ويب متكاملة من الواجهات الأمامية إلى أنظمة Backend، مع تخصص قوي في Django وREST APIs وقواعد البيانات وهندسة الأنظمة.",
    projectsButton: "استكشف مشاريعي",
    contactButton: "تواصل معي",
    sculptureLabel: "نواة معلوماتية ثلاثية الأبعاد تفاعلية",
    interact: "حرّك نواة البيانات بلمسك",
    coreAction: "حرّك المؤشر فوق النواة لاستكشاف الموقع",
    coreNav: "تنقّل عبر النواة المعلوماتية",
    enableDark: "تفعيل الوضع الداكن",
    enableLight: "تفعيل الوضع الفاتح",
    available: "متاح لمشاريع جديدة",
    based: "عن بُعد",
    worldwide: "متاح للعمل عالميًا",
    years: "سنوات دراسة هندسية",
    fullStack: "واجهة أمامية وBackend",
    aboutKicker: "01 / نبذة عني",
    aboutTitle: "من الفكرة إلى التنفيذ",
    aboutAccent: "أبني النظام كاملًا.",
    aboutLead:
      "مهندس معلوماتية ومطوّر Full-Stack متخصص في هندسة Backend وتطوير واجهات API وأنظمة الويب القابلة للتوسع.",
    aboutText:
      "أعمل على تطوير الواجهات الأمامية والخلفية معًا، وأبني واجهات متجاوبة والأنظمة التي تشغّلها. تركيزي الأساسي على Django وDjango REST Framework وواجهات API وقواعد البيانات وهندسة Backend القابلة للصيانة.",
    approach: "منهجية التطوير",
    responsive: "واجهة متجاوبة",
    scalable: "Backend قابل للتوسع",
    reliable: "طبقة بيانات موثوقة",
    educationKicker: "02 / التعليم",
    educationTitle: "أساس أكاديمي",
    educationAccent: "وتطور مستمر.",
    degree: "بكالوريوس في هندسة المعلوماتية",
    university: "جامعة إيبلا · سوريا",
    degreeText:
      "أساس قوي في هندسة البرمجيات والبرمجة وقواعد البيانات والشبكات وتصميم الأنظمة.",
    achievement: "إنجاز",
    competition: "المشاركة في مسابقة برمجية دولية · 2025",
    certifications: "مسارات تدريبية وتعلّم تطبيقي",
    pythonCert: "Python عملي",
    pythonTraining: "تطبيقات برمجية وحل المشكلات",
    djangoCert: "Django وBackend",
    djangoTraining: "تطوير أنظمة ويب وواجهات REST API",
    aiCert: "أدوات تطوير حديثة",
    aiTraining: "Cursor + Claude · تطوير مدعوم بالذكاء الاصطناعي",
    experienceKicker: "03 / الخبرة",
    experienceTitle: "خبرة تقنية",
    experienceAccent: "ضمن بيئة عمل حقيقية.",
    job: "متدرب في قسم تقنية المعلومات",
    jobText:
      "دعمت البيئة التقنية للجامعة من خلال العمل المباشر على البنية التحتية والبرمجيات ودعم المستخدمين.",
    tasks: [
      "صيانة الشبكات والخوادم",
      "الدعم التقني وحل المشكلات",
      "المساهمة في التحول الرقمي",
      "تطوير حلول برمجية صغيرة",
      "إدارة الأنظمة وعمليات تقنية المعلومات",
    ],
    projectsKicker: "04 / المشاريع",
    projectsTitle: "أعمال مختارة",
    projectsAccent: "صُمّمت لتعمل بكفاءة.",
    projectsIntro:
      "أنظمة Full-Stack ومواقع احترافية ومنتجات رقمية مبنية حول الوضوح والاستخدام الحقيقي.",
    swipeHint: "اسحب لاستكشاف المزيد",
    caseStudy: "استكشف دراسة الحالة",
    challenge: "التحدي",
    solution: "الحل",
    outcome: "النتيجة",
    close: "إغلاق",
    skillsKicker: "05 / المهارات",
    skillsTitle: "تقنيات أستخدمها",
    skillsAccent: "لبناء حلول حقيقية.",
    skillsHint: "اختر مجالًا لاستكشاف تفاصيله",
    skillFocus: "مجال التركيز",
    contactKicker: "06 / تواصل",
    contactTitle: "لديك مشروع؟",
    contactAccent: "دعنا نبنيه معًا.",
    contactText:
      "متاح لمشاريع Full-Stack وأنظمة Backend وتطوير واجهات API والتعاون في المنتجات الرقمية.",
    start: "ابدأ محادثة",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    whatsapp: "واتساب",
    instagram: "إنستغرام",
    github: "GitHub",
    message: "راسل أنس",
    floatingContact: "ابدأ مشروعًا",
    rights: "© 2026 أنس البغدادي. جميع الحقوق محفوظة.",
    top: "العودة للأعلى",
  },
  en: {
    introBoot: "Starting the experience",
    introSub: "Anas Bagdady · Software Engineering",
    brandSub: "Software Engineer",
    menu: "Open menu",
    heroKicker: "Full-Stack Developer · Backend Specialist",
    heroTitleStart: "I build complete",
    heroTitleAccent: "digital systems that scale.",
    heroDescription:
      "I'm Anas Bagdady. I develop complete web applications from frontend interfaces to backend systems, with a strong specialization in Django, REST APIs, databases, and scalable architecture.",
    projectsButton: "Explore my work",
    contactButton: "Contact me",
    sculptureLabel: "Interactive three-dimensional informatics core",
    interact: "Touch and move the data core",
    coreAction: "Move over the core to explore the site",
    coreNav: "Navigate through the informatics core",
    enableDark: "Enable dark theme",
    enableLight: "Enable light theme",
    available: "Available for new projects",
    based: "Remote",
    worldwide: "Available worldwide",
    years: "Years of engineering study",
    fullStack: "Frontend + Backend",
    aboutKicker: "01 / About",
    aboutTitle: "From concept to delivery,",
    aboutAccent: "I build the complete system.",
    aboutLead:
      "An Informatics Engineer and Full-Stack Developer specializing in backend engineering, API development, and scalable web systems.",
    aboutText:
      "I work across frontend and backend development, building responsive interfaces and the systems that power them. My core focus is Django, Django REST Framework, APIs, databases, and maintainable backend architecture.",
    approach: "Development approach",
    responsive: "Responsive frontend",
    scalable: "Scalable backend",
    reliable: "Reliable data layer",
    educationKicker: "02 / Education",
    educationTitle: "Academic foundation",
    educationAccent: "and continuous growth.",
    degree: "Bachelor's in Informatics Engineering",
    university: "Ebla University · Syria",
    degreeText:
      "A strong foundation in software engineering, programming, databases, networking, and system design.",
    achievement: "Achievement",
    competition: "International programming competition · 2025",
    certifications: "Applied learning tracks",
    pythonCert: "Applied Python",
    pythonTraining: "Software applications and problem solving",
    djangoCert: "Django & Backend",
    djangoTraining: "Web systems and REST API development",
    aiCert: "Modern development tools",
    aiTraining: "Cursor + Claude · AI-assisted development",
    experienceKicker: "03 / Experience",
    experienceTitle: "Technical experience",
    experienceAccent: "in the real world.",
    job: "IT Department Intern",
    jobText:
      "Supported the university's technical environment through hands-on infrastructure, software, and user support work.",
    tasks: [
      "Network and server maintenance",
      "Technical support and troubleshooting",
      "Digital transformation initiatives",
      "Small software solutions",
      "System administration and IT operations",
    ],
    projectsKicker: "04 / Projects",
    projectsTitle: "Selected work,",
    projectsAccent: "built to perform.",
    projectsIntro:
      "Full-stack systems, professional websites, and digital products shaped around clarity and real-world use.",
    swipeHint: "Swipe to explore more",
    caseStudy: "Explore case study",
    challenge: "Challenge",
    solution: "Solution",
    outcome: "Outcome",
    close: "Close",
    skillsKicker: "05 / Skills",
    skillsTitle: "Technology with purpose,",
    skillsAccent: "built for real solutions.",
    skillsHint: "Select a field to explore its focus",
    skillFocus: "Current focus",
    contactKicker: "06 / Contact",
    contactTitle: "Have a project in mind?",
    contactAccent: "Let's build it.",
    contactText:
      "I'm open to full-stack projects, backend systems, API development, and thoughtful digital collaborations.",
    start: "Start a conversation",
    email: "Email",
    phone: "Phone",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    github: "GitHub",
    message: "Message Anas",
    floatingContact: "Start a project",
    rights: "© 2026 Anas Bagdady. All rights reserved.",
    top: "Back to top",
  },
};

const getText = (value: Dual, lang: Lang) => value[lang];

export default function Home() {
  const [lang, setLang] = useState<Lang>("ar");
  const [theme, setTheme] = useState<Theme>("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [introVisible, setIntroVisible] = useState(true);
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);
  const [activeSkill, setActiveSkill] = useState(0);
  const cursorAuraRef = useRef<HTMLSpanElement>(null);
  const cursorDotRef = useRef<HTMLSpanElement>(null);
  const t = copy[lang];

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const saved = window.localStorage.getItem("portfolio-language");
      if (saved === "ar" || saved === "en") setLang(saved);
      const savedTheme = window.localStorage.getItem("portfolio-theme");
      if (savedTheme === "light" || savedTheme === "dark") {
        setTheme(savedTheme);
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const seen = window.sessionStorage.getItem("portfolio-intro-seen");
    if (seen) {
      const frame = window.requestAnimationFrame(() => setIntroVisible(false));
      return () => window.cancelAnimationFrame(frame);
    }
    window.sessionStorage.setItem("portfolio-intro-seen", "true");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => setIntroVisible(false), reducedMotion ? 100 : 700);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    window.localStorage.setItem("portfolio-language", lang);

    const title =
      lang === "ar"
        ? "أنس البغدادي | انس بغدادي | مطوّر Full-Stack ومتخصص Backend"
        : "Anas Bagdady | Full-Stack Developer & Backend Specialist";
    const description =
      lang === "ar"
        ? "بورتفوليو أنس البغدادي (انس بغدادي) — مطوّر Full-Stack متخصص في Django وREST APIs وقواعد البيانات وهندسة Backend. متاح للعمل عن بُعد عالميًا."
        : "Portfolio of Anas Bagdady — Full-Stack Developer specializing in Django, REST APIs, databases, and scalable backend systems. Available for remote projects worldwide.";

    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute("content", description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", description);
  }, [lang]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu);

    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    let frame = 0;
    const updateActiveSection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const current =
          [...sections]
            .reverse()
            .find((section) => section.getBoundingClientRect().top <= 145) ??
          sections[0];
        if (current?.id) setActiveSection(current.id);
      });
    };
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    updateActiveSection();

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.02, rootMargin: "0px 0px 18% 0px" },
    );
    document
      .querySelectorAll(".reveal")
      .forEach((element) => revealObserver.observe(element));

    return () => {
      window.removeEventListener("resize", closeMenu);
      window.removeEventListener("scroll", updateActiveSection);
      cancelAnimationFrame(frame);
      revealObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const moveCursor = (event: PointerEvent) => {
      cursorAuraRef.current?.style.setProperty("transform", `translate3d(${event.clientX}px, ${event.clientY}px, 0)`);
      cursorDotRef.current?.style.setProperty("transform", `translate3d(${event.clientX}px, ${event.clientY}px, 0)`);
    };
    window.addEventListener("pointermove", moveCursor, { passive: true });
    return () => window.removeEventListener("pointermove", moveCursor);
  }, []);

  useEffect(() => {
    if (!activeProject) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveProject(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeProject]);

  const switchLanguage = () => {
    setLang((current) => (current === "ar" ? "en" : "ar"));
    setMenuOpen(false);
  };

  const navigateTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <main
      className="portfolio"
      dir={lang === "ar" ? "rtl" : "ltr"}
      data-theme={theme}
    >
      {introVisible && (
        <div className="cinematic-intro" role="status" aria-live="polite">
          <div className="intro-core" aria-hidden="true"><span>AB</span><i /></div>
          <p>{t.introBoot}</p>
          <strong>{t.introSub}</strong>
          <div className="intro-progress" aria-hidden="true"><i /></div>
        </div>
      )}
      <span className="cursor-aura" ref={cursorAuraRef} aria-hidden="true" />
      <span className="cursor-dot" ref={cursorDotRef} aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Anas Bagdady">
          <span className="brand-monogram" aria-hidden="true">AB</span>
          <span className="brand-copy">
            <strong lang="en">Anas Bagdady</strong>
            <small>{t.brandSub}</small>
          </span>
        </a>

        <nav
          id="site-navigation"
          className={menuOpen ? "site-navigation is-open" : "site-navigation"}
          aria-label={lang === "ar" ? "التنقل الرئيسي" : "Primary navigation"}
        >
          {navigation.map(({ id, label }) => (
            <a
              className={activeSection === id ? "active" : ""}
              href={`#${id}`}
              key={id}
              onClick={() => setMenuOpen(false)}
            >
              {getText(label, lang)}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="theme-switch"
            type="button"
            onClick={() =>
              setTheme((current) => (current === "light" ? "dark" : "light"))
            }
            aria-label={theme === "light" ? t.enableDark : t.enableLight}
            title={theme === "light" ? t.enableDark : t.enableLight}
          >
            <span className="theme-orbit" aria-hidden="true">
              <i />
            </span>
          </button>
          <button
            className="language-switch"
            type="button"
            onClick={switchLanguage}
            aria-label={
              lang === "ar" ? "Switch to English" : "التبديل إلى العربية"
            }
          >
            <span className={lang === "ar" ? "active" : ""}>ع</span>
            <i />
            <span className={lang === "en" ? "active" : ""}>EN</span>
          </button>
          <button
            className={menuOpen ? "menu-button is-open" : "menu-button"}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            aria-label={t.menu}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <nav className="mobile-dock" aria-label={lang === "ar" ? "تنقل الجوال" : "Mobile navigation"}>
        {mobileLinks.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? "is-active" : ""}
            aria-current={activeSection === item.id ? "page" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            <span aria-hidden="true">{item.icon}</span>
            <strong>{getText(item.label, lang)}</strong>
          </a>
        ))}
      </nav>

      <section id="home" className="hero">
        <div
          className="hero-photo"
          aria-hidden="true"
          style={{ backgroundImage: "url(/anas/anas-portrait.jpg)" }}
        />
        <div className="hero-photo-veil" aria-hidden="true" />
        <div className="hero-lines" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">
            <span aria-hidden="true">◆</span>
            {t.heroKicker}
          </p>
          <h1>
            {t.heroTitleStart} <em>{t.heroTitleAccent}</em>
          </h1>
          <p className="hero-description">{t.heroDescription}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              {t.projectsButton}
              <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-secondary" href="#contact">
              {t.contactButton}
            </a>
          </div>
          <div className="availability">
            <span aria-hidden="true" />
            {t.available}
          </div>
        </div>

        <div className="hero-stage">
          <GoldenSculpture
            label={`${t.sculptureLabel}. ${t.coreAction}`}
            theme={theme}
            activeSection={activeSection}
            onActivate={() => navigateTo("projects")}
          />
          <div className="core-navigation" aria-label={t.coreNav}>
            {coreLinks.map((item) => (
              <button
                type="button"
                key={item.id}
                className={activeSection === item.id ? "is-active" : ""}
                onClick={() => navigateTo(item.id)}
              >
                <span>{item.code}</span>
                <strong>{getText(item.label, lang)}</strong>
              </button>
            ))}
          </div>
          <div className="future-mark" aria-hidden="true">
            <span>2030</span>
            <small>INFORMATICS CORE</small>
          </div>
          <div className="interaction-hint">
            <span aria-hidden="true">◎</span>
            {t.coreAction}
          </div>
          <div className="floating-card card-code" aria-hidden="true">
            <small>API / 200 OK</small>
            <code>Django · REST</code>
          </div>
          <div className="floating-card card-data" aria-hidden="true">
            <small>DATA LAYER</small>
            <strong>PostgreSQL</strong>
          </div>
        </div>

        <div className="hero-facts reveal">
          <div>
            <strong>05</strong>
            <span>{t.years}</span>
          </div>
          <div>
            <strong>Full-Stack</strong>
            <span>{t.fullStack}</span>
          </div>
          <div>
            <strong>{t.based}</strong>
            <span>{t.worldwide}</span>
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="section-heading reveal">
          <p>{t.aboutKicker}</p>
          <h2>
            {t.aboutTitle} <em>{t.aboutAccent}</em>
          </h2>
        </div>
        <div className="about-layout">
          <div className="about-copy reveal">
            <p className="lead">{t.aboutLead}</p>
            <p>{t.aboutText}</p>
          </div>
          <div className="architecture-card reveal">
            <div className="architecture-top">
              <span>{t.approach}</span>
              <i>AB / SYSTEM</i>
            </div>
            <div className="architecture-orbit" aria-hidden="true">
              <strong>AB</strong>
              <span className="satellite sat-one">UI</span>
              <span className="satellite sat-two">API</span>
              <span className="satellite sat-three">DB</span>
            </div>
            <ol>
              <li><span>01</span>{t.responsive}</li>
              <li><span>02</span>{t.scalable}</li>
              <li><span>03</span>{t.reliable}</li>
            </ol>
          </div>
        </div>
      </section>

      <section id="education" className="section toned-section">
        <div className="section-heading reveal">
          <p>{t.educationKicker}</p>
          <h2>
            {t.educationTitle} <em>{t.educationAccent}</em>
          </h2>
        </div>
        <div className="education-grid">
          <article className="degree-card reveal">
            <div className="card-meta">
              <span>2020 — 2025</span>
              <span>{t.university}</span>
            </div>
            <h3>{t.degree}</h3>
            <p>{t.degreeText}</p>
            <div className="achievement">
              <span className="achievement-mark">◎</span>
              <div>
                <small>{t.achievement}</small>
                <strong>{t.competition}</strong>
              </div>
            </div>
          </article>
          <div className="certifications reveal">
            <p className="mini-title">{t.certifications}</p>
            <article>
              <span className="cert-icon">Py</span>
              <div><h3>{t.pythonCert}</h3><p>{t.pythonTraining}</p></div>
              <i>✓</i>
            </article>
            <article>
              <span className="cert-icon">dj</span>
              <div><h3>{t.djangoCert}</h3><p>{t.djangoTraining}</p></div>
              <i>✓</i>
            </article>
            <article>
              <span className="cert-icon">AI</span>
              <div><h3>{t.aiCert}</h3><p>{t.aiTraining}</p></div>
              <i>✓</i>
            </article>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="section-heading reveal">
          <p>{t.experienceKicker}</p>
          <h2>
            {t.experienceTitle} <em>{t.experienceAccent}</em>
          </h2>
        </div>
        <article className="experience-card reveal">
          <div className="experience-years">
            <span>2023</span><i /><span>2024</span>
          </div>
          <div className="experience-copy">
            <p>{t.university}</p>
            <h3>{t.job}</h3>
            <span>{t.jobText}</span>
          </div>
          <ul>
            {t.tasks.map((task) => <li key={task}>{task}</li>)}
          </ul>
          <div className="server-stack" aria-hidden="true">
            <i /><i /><i />
          </div>
        </article>
      </section>

      <section id="projects" className="section toned-section">
        <div className="section-heading heading-row reveal">
          <div>
            <p>{t.projectsKicker}</p>
            <h2>{t.projectsTitle} <em>{t.projectsAccent}</em></h2>
          </div>
          <span>{t.projectsIntro}</span>
        </div>
        <p className="mobile-swipe-hint"><span aria-hidden="true">↔</span>{t.swipeHint}</p>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card reveal" key={project.number}>
              <div className={`project-visual ${project.kind}`}>
                <span className="project-index">{project.number}</span>
                {"status" in project && project.status && (
                  <span className="project-status"><i aria-hidden="true" />{getText(project.status, lang)}</span>
                )}
                {project.kind === "library" && (
                  <div className="library-ui" aria-hidden="true">
                    <span /><span /><span /><i /><i /><i />
                  </div>
                )}
                {project.kind === "transport" && <strong>PT</strong>}
                {project.kind === "media" && <strong>M4</strong>}
              </div>
              <div className="project-content">
                <div className="project-meta">
                  <span>{getText(project.type, lang)}</span>
                  {"date" in project && <span>{project.date}</span>}
                </div>
                <h3>{getText(project.title, lang)}</h3>
                <p>{getText(project.description, lang)}</p>
                <div className="tags">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
                <div className="project-actions">
                  <button type="button" onClick={() => setActiveProject(project)}>
                    {t.caseStudy} <span aria-hidden="true">＋</span>
                  </button>
                  <a href={project.href} target="_blank" rel="noreferrer">
                    {getText(project.link, lang)} <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-heading reveal">
          <p>{t.skillsKicker}</p>
          <h2>{t.skillsTitle} <em>{t.skillsAccent}</em></h2>
        </div>
        <p className="skills-hint reveal">{t.skillsHint}</p>
        <p className="mobile-swipe-hint"><span aria-hidden="true">↔</span>{t.swipeHint}</p>
        <div className="skills-experience">
          <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article
              className={activeSkill === index ? "skill-card reveal is-active" : "skill-card reveal"}
              key={group.number}
              role="button"
              tabIndex={0}
              aria-pressed={activeSkill === index}
              onClick={() => setActiveSkill(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActiveSkill(index);
                }
              }}
            >
              <div><span>{group.number}</span><i>{group.icon}</i></div>
              <h3>{getText(group.title, lang)}</h3>
              <p>{getText(group.description, lang)}</p>
              <ul>
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
          </div>
          <aside className="skill-focus" aria-live="polite">
            <span>{t.skillFocus} / {skillGroups[activeSkill].number}</span>
            <div className="focus-icon" aria-hidden="true">{skillGroups[activeSkill].icon}</div>
            <h3>{getText(skillGroups[activeSkill].title, lang)}</h3>
            <p>{getText(skillGroups[activeSkill].description, lang)}</p>
            <div className="focus-signal" aria-hidden="true">
              <i /><i /><i /><i /><i />
            </div>
            <ul>
              {skillGroups[activeSkill].skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </aside>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-copy reveal">
          <p>{t.contactKicker}</p>
          <h2>{t.contactTitle} <em>{t.contactAccent}</em></h2>
          <span>{t.contactText}</span>
          <a className="button button-primary" href="mailto:bgdady987@gmail.com">
            {t.start} <b aria-hidden="true">↗</b>
          </a>
        </div>
        <div className="contact-list reveal">
          <a href="mailto:bgdady987@gmail.com">
            <i>@</i><span><small>{t.email}</small><strong>bgdady987@gmail.com</strong></span><b>↗</b>
          </a>
          <a href="tel:+963931733249">
            <i>☎</i><span><small>{t.phone}</small><strong>+963 931 733 249</strong></span><b>↗</b>
          </a>
          <a href="https://wa.me/963931733249" target="_blank" rel="noreferrer">
            <i>W</i><span><small>{t.whatsapp}</small><strong>{t.message}</strong></span><b>↗</b>
          </a>
          <a href="https://www.instagram.com/eng_anas_a_bagdady/" target="_blank" rel="noreferrer">
            <i>◎</i><span><small>{t.instagram}</small><strong>@eng_anas_a_bagdady</strong></span><b>↗</b>
          </a>
          <a href="https://github.com/Anas-bagdady" target="_blank" rel="noreferrer">
            <i>&lt;/&gt;</i><span><small>{t.github}</small><strong>Anas-bagdady</strong></span><b>↗</b>
          </a>
        </div>
      </section>

      <a className="floating-contact" href="#contact">
        <span aria-hidden="true">↗</span>
        <strong>{t.floatingContact}</strong>
      </a>

      {activeProject && (
        <div
          className="case-overlay"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setActiveProject(null);
          }}
        >
          <article className="case-dialog" role="dialog" aria-modal="true" aria-labelledby="case-title">
            <button className="case-close" type="button" onClick={() => setActiveProject(null)} aria-label={t.close}>
              <span aria-hidden="true">×</span>
            </button>
            <div className={`case-visual ${activeProject.kind}`} aria-hidden="true">
              <span>{activeProject.number}</span>
              <strong>{activeProject.kind === "library" ? "LIB" : activeProject.kind === "transport" ? "PT" : "M4"}</strong>
              <i />
            </div>
            <div className="case-content">
              <p>{getText(activeProject.type, lang)}</p>
              <h2 id="case-title">{getText(activeProject.title, lang)}</h2>
              <div className="case-points">
                <section>
                  <span>01</span><div><h3>{t.challenge}</h3><p>{getText(activeProject.challenge, lang)}</p></div>
                </section>
                <section>
                  <span>02</span><div><h3>{t.solution}</h3><p>{getText(activeProject.solution, lang)}</p></div>
                </section>
                <section>
                  <span>03</span><div><h3>{t.outcome}</h3><p>{getText(activeProject.outcome, lang)}</p></div>
                </section>
              </div>
              <div className="case-footer">
                <div className="tags">{activeProject.stack.map((item) => <span key={item}>{item}</span>)}</div>
                <a href={activeProject.href} target="_blank" rel="noreferrer">
                  {getText(activeProject.link, lang)} <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      )}

      <footer>
        <a className="brand" href="#home">
          <span className="brand-monogram" aria-hidden="true">AB</span>
          <span className="brand-copy"><strong lang="en">Anas Bagdady</strong><small>{t.brandSub}</small></span>
        </a>
        <p>{t.rights}</p>
        <a href="#home">{t.top} <span>↑</span></a>
      </footer>
    </main>
  );
}
