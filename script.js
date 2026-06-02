/* language translations + UI, mobile menu, and scroll reveal */

/* translations (updated Arabic strings + new keys for project/contact labels) */
const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_edu_exp: "Education",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_contact: "Contact",
    hero_title: "Hi, I'm Anas Bagdady",
    hero_subtitle: "Full-Stack Developer | Backend Specialist",
    hero_desc: "I develop complete web applications from frontend interfaces to backend systems, with a strong specialization in Django, REST APIs, databases, and scalable backend architecture.",
    btn_contact: "Contact Me",
    btn_projects: "View Projects",
    btn_live_website: "Live Website",
    btn_github: "GitHub",
    btn_instagram: "Instagram",
    exp_desc_1: "Assisted in network and server maintenance, provided technical support, and contributed to digital transformation initiatives within the university.",
    exp_desc_2: "Developed small software solutions and gained practical experience in system administration and IT operations.",
    skills_cat_backend: "Backend",
    skills_cat_frontend: "Frontend",
    skills_cat_tools: "Tools",
    skills_cat_core: "Core Skills",
    proj_feature_responsive: "• Modern responsive design",
    proj_feature_presentation: "• Professional business presentation",
    proj_feature_showcase: "• Service showcase pages",
    proj_feature_contact: "• Contact and inquiry functionality",
    proj_feature_ux: "• Optimized user experience across desktop and mobile devices",
    about_title: "About Me",
    about_summary: "Full-Stack Developer specializing in backend engineering, API development, and scalable web systems. Experienced in building complete web applications while focusing on clean architecture, performance, and maintainable code.",
    about_text: "I am a Full-Stack Developer with a strong specialization in backend development and building scalable web applications.",
    about_text_2: "I work across both frontend and backend technologies, developing complete solutions that combine modern user interfaces with reliable and secure server-side systems.",
    about_text_3: "My primary expertise includes Django, Django REST Framework, API development, database design, and backend architecture, while also having practical experience building responsive frontend applications.",
    edu_title: "Education",
    edu_degree: "Bachelor in Informatics Engineering",
    edu_institution: "Ebla University, Syria",
    edu_extra: "Participation in International Programming Competition 2025",
    certs_title: "Certifications",
    cert1_title: "Python Certificate",
    cert1_desc: "Completed professional training in Python programming and Django web development.",
    cert2_title: "Django Certificate",
    cert2_desc: "Completed professional training in Django web development.",
    exp_title: "Experience",
    exp_role: "Internship – IT Department",
    exp_institution: "Ebla University, Syria",
    projects_title: "Projects",
    grad_title: "University Library Automation",
    grad_desc: "A full web system for managing university library resources using Django. The system includes user management, project/book management, favorites, ratings, notifications, search functionality, and RESTful APIs.",
    p5_title: "Prime Transporter",
    p5_desc: "A professional transportation and logistics company website developed to showcase services, strengthen brand identity, and provide a modern user experience across all devices.",
    xax4_title: "Max4Media",
    xax4_desc: "A digital media project for content creation, design, and social media management.",
    skills_title: "Technical Skills",
    contact_title: "Get In Touch",
    contact_desc: "I am open to new opportunities and collaborations.",
    /* new keys */
    software_title: "Software Projects",
    media_title: "Media / Business Project",
    contact_email: "Email",
    contact_email_value: "bgdady987@gmail.com",
    contact_phone: "Phone",
    contact_phone_value: "+963 931 733 249",
    contact_whatsapp: "WhatsApp",
    contact_whatsapp_note: "Message me on WhatsApp",
    contact_instagram: "Instagram",
    contact_instagram_value: "@eng_anas_a_bagdady"
  },
  ar: {
    nav_home: "الرئيسية",
    nav_about: "نبذة عني",
    nav_edu_exp: "التعليم",
    nav_experience: "الخبرة",
    nav_projects: "المشاريع",
    nav_skills: "المهارات",
    nav_contact: "تواصل معي",
    hero_title: "مرحباً، أنا أنس بغدادي",
    hero_subtitle: "مطور Full-Stack | متخصص في الباك-إند",
    hero_desc: "أطور تطبيقات ويب كاملة من واجهات المستخدم إلى أنظمة الباك-إند، مع تخصص قوي في Django وواجهات REST APIs وقواعد البيانات وهندسة باك-إند قابلة للتوسع.",
    btn_contact: "تواصل معي",
    btn_projects: "عرض المشاريع",
    btn_live_website: "الموقع الحي",
    btn_github: "GitHub",
    btn_instagram: "إنستغرام",
    exp_desc_1: "ساعدت في صيانة الشبكات والخوادم، وقدمت الدعم الفني وساهمت في مبادرات التحول الرقمي داخل الجامعة.",
    exp_desc_2: "طورت حلول برمجية صغيرة واكتسبت خبرة عملية في إدارة الأنظمة وعمليات تقنية المعلومات.",
    skills_cat_backend: "الباك-إند",
    skills_cat_frontend: "الواجهة الأمامية",
    skills_cat_tools: "الأدوات",
    skills_cat_core: "المهارات الأساسية",
    proj_feature_responsive: "• تصميم متجاوب وحديث",
    proj_feature_presentation: "• عرض احترافي للأعمال",
    proj_feature_showcase: "• صفحات عرض الخدمات",
    proj_feature_contact: "• وظيفة الاتصال والاستعلام",
    proj_feature_ux: "• تجربة مستخدم محسنة على سطح المكتب والجوال",
    about_title: "نبذة عني",

    /* About section - professional Arabic (updated) */
    about_summary: "مطور Full-Stack متخصص في هندسة الباك-إند وتطوير واجهات برمجة التطبيقات وأنظمة الويب القابلة للتوسع. لدي خبرة في بناء تطبيقات ويب كاملة مع التركيز على بنية نظيفة، الأداء، وكود قابل للصيانة.",
    about_text: "أنا مطور Full-Stack مع تخصص قوي في تطوير الباك-إند وبناء تطبيقات ويب قابلة للتوسع.",
    about_text_2: "أعمل على تقنيات الواجهة الأمامية والواجهة الخلفية، وأطور حلولاً كاملة تجمع بين واجهات مستخدم حديثة وأنظمة خادم آمنة وموثوقة.",
    about_text_3: "تشمل خبرتي الأساسية Django وDjango REST Framework وتطوير API وتصميم قواعد البيانات وهندسة الباك-إند، بينما لدي أيضاً خبرة عملية في بناء تطبيقات واجهة أمامية متجاوبة.",
    
    /* Education section - formal Arabic (updated) */
    edu_title: "التحصيل العلمي",
    edu_degree: "بكالوريوس في هندسة المعلوماتية",
    edu_institution: "جامعة إبلا، سوريا",
    edu_extra: "المشاركة في مسابقة البرمجة الدولية 2025",

    /* Certifications (Arabic) */
    certs_title: "الشهادات",
    cert1_title: "شهادة في لغة Python",
    cert1_desc: "أكملت تدريباً مهنياً في برمجة Python وتطبيقات الويب.",
    cert2_title: "شهادة في إطار عمل Django",
    cert2_desc: "أكملت تدريباً مهنياً في تطوير الويب باستخدام Django.",

    exp_title: "الخبرة",
    exp_role: "متدرب – قسم تكنولوجيا المعلومات",
    exp_institution: "جامعة إبلا، سوريا",
    projects_title: "المشاريع",
    grad_title: "نظام آلي لمكتبة الجامعة",
    grad_desc: "نظام ويب كامل لإدارة مكتبة الجامعة باستخدام Django. يتضمن النظام إدارة المستخدمين وإدارة الكتب والمفضلة والتقييمات والإشعارات ووظائف البحث وواجهات برمجة REST.",
    p5_title: "موقع Prime Transporter",
    p5_desc: "موقع احترافي لشركة نقل يعرض خدمات النقل واللوجستيات بواجهة حديثة ومتجاوبة وسهلة الاستخدام.",
    xax4_title: "Max4Media",
    xax4_desc: "مشروع وسائط رقمية لإنشاء المحتوى والتصميم وإدارة الشبكات الاجتماعية.",
    skills_title: "المهارات",
    contact_title: "تواصل معي",
    contact_desc: "أنا متاح لفرص جديدة والتعاون.",
    /* new keys (Arabic for projects/contact already added earlier) */
    software_title: "مشاريع برمجية",
    media_title: "مشاريع إعلامية / تجارية",
    contact_email: "البريد الإلكتروني",
    contact_email_value: "bgdady987@gmail.com",
    contact_phone: "الهاتف",
    contact_phone_value: "+963 931 733 249",
    contact_whatsapp: "واتساب",
    contact_whatsapp_note: "راسلني عبر واتساب",
    contact_instagram: "إنستغرام",
    contact_instagram_value: "@eng_anas_a_bagdady"
  },
  de: {
    nav_home: "Start",
    nav_about: "Über",
    nav_edu_exp: "Ausbildung",
    nav_experience: "Erfahrung",
    nav_projects: "Projekte",
    nav_skills: "Fähigkeiten",
    nav_contact: "Kontakt",
    hero_title: "Hi, ich bin Anas Bagdady",
    hero_subtitle: "Full-Stack-Entwickler | Backend-Spezialist",
    hero_desc: "Ich entwickle komplette Webanwendungen von Frontend-Oberflächen bis hin zu Backend-Systemen, mit starkem Fokus auf Django, REST APIs, Datenbanken und skalierbare Backend-Architektur.",
    btn_contact: "Kontakt",
    btn_projects: "Arbeiten",
    btn_live_website: "Live-Website",
    btn_github: "GitHub",
    btn_instagram: "Instagram",
    exp_desc_1: "Unterstützte bei Netzwerk- und Serverwartung, bot technischen Support und trug zu Digitalisierungsinitiativen innerhalb der Universität bei.",
    exp_desc_2: "Entwickelte kleine Softwarelösungen und sammelte praktische Erfahrungen in Systemadministration und IT-Betrieb.",
    skills_cat_backend: "Backend",
    skills_cat_frontend: "Frontend",
    skills_cat_tools: "Tools",
    skills_cat_core: "Kernkompetenzen",
    proj_feature_responsive: "• Modernes responsives Design",
    proj_feature_presentation: "• Professionelle Unternehmenspräsentation",
    proj_feature_showcase: "• Service-Schauseiten",
    proj_feature_contact: "• Kontakt- und Anfragefunktionalität",
    proj_feature_ux: "• Optimierte Benutzererfahrung auf Desktop und Mobilgeräten",
    about_title: "Über mich",
    about_summary: "Full-Stack-Entwickler mit Spezialisierung auf Backend-Engineering, API-Entwicklung und skalierbare Websysteme. Erfahren im Aufbau kompletter Webanwendungen mit Fokus auf saubere Architektur, Performance und wartbaren Code.",
    about_text: "Ich bin Full-Stack-Entwickler mit starker Spezialisierung auf Backend-Entwicklung und dem Aufbau skalierbarer Webanwendungen.",
    about_text_2: "Ich arbeite mit Frontend- und Backend-Technologien und entwickle komplette Lösungen, die moderne Benutzeroberflächen mit zuverlässigen und sicheren Serversystemen verbinden.",
    about_text_3: "Meine Kernkompetenzen umfassen Django, Django REST Framework, API-Entwicklung, Datenbankdesign und Backend-Architektur, während ich auch praktische Erfahrung im Aufbau responsiver Frontend-Anwendungen habe.",
    edu_title: "Ausbildung",
    edu_degree: "Bachelor in Informatik",
    edu_institution: "Ebla University, Syria",
    edu_extra: "Teilnahme am Internationalen Programmierwettbewerb 2025",
    certs_title: "Zertifikate",
    cert1_title: "Python-Zertifikat",
    cert1_desc: "Abschluss eines professionellen Trainings in Python-Programmierung und Django-Webentwicklung.",
    cert2_title: "Django-Zertifikat",
    cert2_desc: "Abschluss eines professionellen Trainings in Django-Webentwicklung.",
    exp_title: "Erfahrung",
    exp_role: "Praktikum – IT-Abteilung",
    exp_institution: "Ebla Universität, Syrien",
    projects_title: "Projekte",
    grad_title: "Bibliotheksverwaltung der Universität",
    grad_desc: "Vollständiges Websystem zur Verwaltung der Universitätsbibliothek mit Django. Das System umfasst Benutzerverwaltung, Projekt-/Buchverwaltung, Favoriten, Bewertungen, Benachrichtigungen, Suchfunktionen und RESTful-APIs.",
    p5_title: "Prime Transporter Website",
    p5_desc: "Eine professionelle Website für ein Transportunternehmen zur Präsentation von Transport- und Logistikdienstleistungen mit moderner und responsiver Benutzeroberfläche.",
    xax4_title: "Max4Media",
    xax4_desc: "Ein digitales Medienprojekt für Content-Erstellung, Design und Social-Media-Management.",
    skills_title: "Technische Fähigkeiten",
    contact_title: "Kontakt",
    contact_desc: "Ich bin offen für neue Möglichkeiten und Kooperationen.",
    /* new keys (German) */
    software_title: "Software-Projekte",
    media_title: "Medien / Business-Projekt",
    contact_email: "E-Mail",
    contact_email_value: "bgdady987@gmail.com",
    contact_phone: "Telefon",
    contact_phone_value: "+963 931 733 249",
    contact_whatsapp: "WhatsApp",
    contact_whatsapp_note: "Schreiben Sie mir über WhatsApp",
    contact_instagram: "Instagram",
    contact_instagram_value: "@eng_anas_a_bagdady"
  }
};
function setElementTextPreserveChildren(el, text) {
  if (!el) return;

  if (!el.children || el.children.length === 0) {
    el.textContent = text;
    return;
  }

  const textNode = Array.from(el.childNodes).find(
    n => n.nodeType === 3 && n.nodeValue.trim() !== ""
  );

  if (textNode) {
    textNode.nodeValue = text + " ";
  } else {
    el.insertBefore(document.createTextNode(text + " "), el.firstChild);
  }
}

function translatePage(lang = 'en') {
  const dict = translations[lang] || translations.en;
  const fallback = translations.en || {};
  const missing = new Set();

  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (!key) return;

    const baseKey = key.replace(/[_\-]?\d+$/, '');

    const textForKey =
      dict[key] !== undefined ? dict[key] :
      dict[baseKey] !== undefined ? dict[baseKey] :
      fallback[key] !== undefined ? fallback[key] :
      fallback[baseKey] !== undefined ? fallback[baseKey] :
      null;

    if (textForKey === null) {
      missing.add(key);
      return;
    }

    const tag = el.tagName.toLowerCase();

    if (tag === 'input' || tag === 'textarea') {
      el.placeholder = textForKey;
      return;
    }

    setElementTextPreserveChildren(el, textForKey);
  });

  document.querySelectorAll('[data-key][data-attr]').forEach(el => {
    const key = el.getAttribute('data-key');
    const attr = el.getAttribute('data-attr');
    if (!key || !attr) return;

    const baseKey = key.replace(/[_\-]?\d+$/, '');

    const textForKey =
      dict[key] !== undefined ? dict[key] :
      dict[baseKey] !== undefined ? dict[baseKey] :
      fallback[key] !== undefined ? fallback[key] :
      fallback[baseKey] !== undefined ? fallback[baseKey] :
      null;

    if (textForKey !== null) {
      el.setAttribute(attr, textForKey);
    } else {
      missing.add(key);
    }
  });

  document.querySelectorAll('.lang-btn').forEach(b => {
    b.setAttribute('aria-pressed', b.textContent.toLowerCase() === lang);
  });

  if (missing.size > 0) {
    console.warn(`Missing translation keys for "${lang}":`, [...missing].sort());
  }
}

function changeLanguage(lang){
  // set html lang and dir
  const isRTL = lang === 'ar';
  document.documentElement.lang = lang;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  if(isRTL){
    document.body.classList.add('rtl');
  } else {
    document.body.classList.remove('rtl');
  }

  translatePage(lang);

  // Small adjustments to ensure RTL alignment where needed
  const alignTargets = document.querySelectorAll('section, .card, .project-card, .contact-item, .skills-list, .timeline, .timeline-item, .project-card-header, .project-meta, .about-info');
  alignTargets.forEach(el => {
    if(isRTL){
      el.style.textAlign = 'right';
    } else {
      el.style.removeProperty('text-align');
    }
  });

  try{ localStorage.setItem('site-lang', lang); }catch(e){}
}

/* mobile menu: toggle, close on outside click, close on link click */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if(hamburger){
  const setExpanded = v => hamburger.setAttribute('aria-expanded', String(!!v));
  const toggleMenu = () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('open');
    setExpanded(navLinks.classList.contains('show'));
  };
  hamburger.addEventListener('click', toggleMenu);
  hamburger.addEventListener('keydown', (e)=> { if(e.key === 'Enter' || e.key === ' ') toggleMenu(); });

  // close when link clicked
  navLinks.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=>{
      if(navLinks.classList.contains('show')){ toggleMenu(); }
    });
  });

  // click outside to close
  document.addEventListener('click', (e)=>{
    if(navLinks.classList.contains('show') && !navLinks.contains(e.target) && !hamburger.contains(e.target)){
      toggleMenu();
    }
  });
}

/* on load: set saved language and reveal animations */
document.addEventListener('DOMContentLoaded', ()=> {
  // restore language
  const saved = (function(){ try{ return localStorage.getItem('site-lang') }catch(e){return null} })() || 'en';
  changeLanguage(saved);

  // Reveal on scroll using IntersectionObserver
  const reveals = Array.from(document.querySelectorAll('.reveal'));
  const io = new IntersectionObserver((entries, obs)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12});

  reveals.forEach((el,i)=>{
    el.style.transitionDelay = `${i * 90}ms`;
    io.observe(el);
  });

  // small hover polish fallback for buttons
  document.querySelectorAll('.btn').forEach(b=>{
    b.addEventListener('mouseenter', ()=> b.classList.add('hovering'));
    b.addEventListener('mouseleave', ()=> b.classList.remove('hovering'));
  });

  initProjectLightbox();
  initLibrarySlider();
});

function initProjectLightbox(){
  const overlay = document.querySelector('.lightbox-overlay');
  if(!overlay) return;

  const image = overlay.querySelector('.lightbox-image');
  const caption = overlay.querySelector('.lightbox-caption');
  const closeBtn = overlay.querySelector('.lightbox-close');

  const openLightbox = (src, alt) => {
    image.src = src;
    image.alt = alt || '';
    caption.textContent = alt || '';
    overlay.classList.add('visible');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    overlay.classList.remove('visible');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.removeProperty('overflow');
    window.setTimeout(()=>{
      image.src = '';
      image.alt = '';
      caption.textContent = '';
    }, 300);
  };

  document.querySelectorAll('.gallery-image-btn, .gallery-thumb').forEach(btn => {
    btn.addEventListener('click', () => {
      const img = btn.querySelector('img');
      if(!img) return;
      openLightbox(img.src, img.alt);
    });
  });

  closeBtn.addEventListener('click', closeLightbox);

  overlay.addEventListener('click', (event) => {
    if(event.target === overlay){
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (event) => {
    if(event.key === 'Escape' && overlay.classList.contains('visible')){
      closeLightbox();
    }
  });
}

function initLibrarySlider(){
  const libraryImages = [
     "a2.png",
    "a3.png",
    "a4.png",
    "a5.png",
    "a6.png",
    "a7.png",
    "a8.png",
    "a1.png"
  ];

  let currentLibraryImage = 0;
  const librarySlider = document.querySelector('[data-slider="library"]');
  if(!librarySlider) return;

  const image = librarySlider.querySelector('.library-slider-image');
  const prevBtn = librarySlider.querySelector('.library-slider-btn.prev');
  const nextBtn = librarySlider.querySelector('.library-slider-btn.next');
  if(!image || !prevBtn || !nextBtn) return;

  function updateLibraryImage(){
    image.src = libraryImages[currentLibraryImage];
    image.alt = `University Library screenshot ${currentLibraryImage + 1}`;
  }

  prevBtn.addEventListener('click', () => {
    currentLibraryImage = (currentLibraryImage - 1 + libraryImages.length) % libraryImages.length;
    updateLibraryImage();
  });

  nextBtn.addEventListener('click', () => {
    currentLibraryImage = (currentLibraryImage + 1) % libraryImages.length;
    updateLibraryImage();
  });
}