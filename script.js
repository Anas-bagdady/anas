/* language translations + UI, mobile menu, and scroll reveal */

/* translations (updated Arabic strings + new keys for project/contact labels) */
const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_edu_exp: "Education",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_contact: "Contact",
    hero_title: "Hi, I'm Anas Bagdady",
    hero_subtitle: "Informatics Engineer & Backend Developer",
    hero_desc: "Specialized in building robust backend systems, designing APIs, and delivering scalable solutions.",
    btn_contact: "Contact Me",
    btn_projects: "View Projects",
    about_title: "About Me",
    about_text: "I am an Informatics Engineer focused on Backend Development, REST API design, database management, and building scalable web systems using Python and Django.",
    about_text_2: "I have hands-on experience delivering complete web applications and data automation tools, with emphasis on maintainability and performance.",
    about_text_3: "I enjoy solving complex backend problems, collaborating in teams, and delivering production-ready systems that scale.",
    edu_title: "Education",
    edu_degree: "Bachelor in Informatics Engineering",
    edu_institution: "Ebla University, Syria",
    edu_extra: "Participation in International Programming Competition 2025",
    exp_title: "Experience",
    exp_role: "Internship – IT Department",
    exp_list: "",
    projects_title: "Projects",
    grad_proj_title: "Graduation Project",
    grad_title: "University Library Automation",
    grad_desc: "Full web system for managing university library using Django. Features include RESTful APIs, book management, and user borrowing systems.",
    other_proj_title: "Other Projects",
    p1_title: "Student Management",
    p1_desc: "Web application using Python, MySQL and HTML/CSS.",
    p2_title: "Data Automation",
    p2_desc: "Python program for data analysis and automation.",
    p3_title: "E-Learning Platform",
    p3_desc: "Online learning platform for courses.",
    p4_title: "Company Website",
    p4_desc: "Professional company services presentation.",
    xax4_title: "xax4media",
    xax4_desc: "A digital media project for content creation, design, and social media management.",
    skills_title: "Technical Skills",
    lang_title: "Languages",
    lang_ar: "Arabic:",
    lang_de: "German:",
    lang_en: "English:",
    contact_title: "Get In Touch",
    contact_desc: "I am open to new opportunities and collaborations.",
    /* new keys */
    software_title: "Software Projects",
    media_title: "Media / Business Project",
    contact_email: "Email",
    contact_email_value: "bgdady987@gmail.com",
    contact_phone: "Phone",
    contact_phone_value: "0931733249",
    contact_whatsapp: "WhatsApp",
    contact_whatsapp_note: "Message me on WhatsApp",
    contact_instagram: "Instagram",
    contact_instagram_value: "@eng_anas_a_bagdady"
  },
  ar: {
    nav_home: "الرئيسية",
    nav_about: "نبذة عني",
    nav_edu_exp: "التعليم",
    nav_projects: "المشاريع",
    nav_skills: "المهارات",
    nav_contact: "تواصل معي",
    hero_title: "مرحباً، أنا أنس بغدادي",
    hero_subtitle: "مهندس معلوماتية ومطوّر Back-end",
    hero_desc: "متخصص في بناء أنظمة خلفية قوية، تصميم واجهات برمجة التطبيقات، وتقديم حلول قابلة للتوسع.",
    btn_contact: "تواصل معي",
    btn_projects: "عرض المشاريع",
    about_title: "نبذة عني",

    /* About section - professional Arabic (updated) */
    about_text: "أنا مهندس معلوماتية أركز على تطوير الواجهات الخلفية، وتصميم واجهات برمجة التطبيقات REST، وإدارة قواعد البيانات، وبناء أنظمة ويب قابلة للتوسع باستخدام Python وDjango.",
    about_text_2: "لدي خبرة عملية في تنفيذ تطبيقات ويب متكاملة وأدوات أتمتة البيانات، مع اهتمام بجودة الكود وأداء النظام.",
    about_text_3: "أحب حل مشاكل الباك-إند المعقدة والعمل ضمن فرق تقنية لتسليم أنظمة جاهزة للإنتاج وقابلة للتوسع.",
    
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
    exp_list: "",
    projects_title: "المشاريع",
    grad_proj_title: "مشروع التخرج",
    grad_title: "نظام آلي لمكتبة الجامعة",
    grad_desc: "نظام ويب كامل لإدارة مكتبة الجامعة باستخدام Django، يتضمن واجهات برمجة REST وإدارة الكتب ونظام إعارة للمستخدمين.",
    other_proj_title: "مشاريع أخرى",
    p1_title: "نظام إدارة الطلاب",
    p1_desc: "تطبيق ويب باستخدام Python و MySQL و HTML/CSS.",
    p2_title: "أتمتة البيانات",
    p2_desc: "برنامج بايثون لتحليل البيانات والأتمتة.",
    p3_title: "منصة تعليم إلكتروني",
    p3_desc: "منصة تعلم عبر الإنترنت للدورات.",
    p4_title: "موقع شركة",
    p4_desc: "عرض احترافي لخدمات الشركة.",
    xax4_title: "xax4media",
    xax4_desc: "مشروع وسائط رقمية لإنشاء المحتوى والتصميم وإدارة الشبكات الاجتماعية.",
    skills_title: "المهارات",
    lang_title: "اللغات",
    lang_ar: "العربية:",
    lang_de: "الألمانية:",
    lang_en: "الإنجليزية:",
    contact_title: "تواصل معي",
    contact_desc: "أنا متاح لفرص جديدة والتعاون.",
    /* new keys (Arabic for projects/contact already added earlier) */
    software_title: "مشاريع برمجية",
    media_title: "مشاريع إعلامية / تجارية",
    contact_email: "البريد الإلكتروني",
    contact_email_value: "bgdady987@gmail.com",
    contact_phone: "الهاتف",
    contact_phone_value: "0931733249",
    contact_whatsapp: "واتساب",
    contact_whatsapp_note: "راسلني عبر واتساب",
    contact_instagram: "إنستغرام",
    contact_instagram_value: "@eng_anas_a_bagdady"
  },
  de: {
    nav_home: "Start",
    nav_about: "Über",
    nav_edu_exp: "Ausbildung",
    nav_projects: "Projekte",
    nav_skills: "Fähigkeiten",
    nav_contact: "Kontakt",
    hero_title: "Hi, ich bin Anas Bagdady",
    hero_subtitle: "Informatikingenieur & Backend-Entwickler",
    hero_desc: "Spezialisiert auf robuste Backend-Systeme und digitale Lösungen.",
    btn_contact: "Kontakt",
    btn_projects: "Arbeiten",
    about_title: "Über mich",
    about_text: "Ich bin Informatikingenieur mit Schwerpunkt auf Backend-Entwicklung, REST-API-Design, Datenbankverwaltung und dem Aufbau skalierbarer Websysteme mit Python und Django.",
    about_text_2: "Ich verfüge über praktische Erfahrung in der Umsetzung vollständiger Webanwendungen und Automatisierungslösungen mit Fokus auf Wartbarkeit und Performance.",
    about_text_3: "Ich löse gern komplexe Backend-Probleme, arbeite gern im Team und liefere produktionsreife, skalierbare Systeme.",
    edu_title: "Ausbildung",
    edu_degree: "Bachelor in Informatik",
    edu_institution: "Ebla University, Syria",
    edu_extra: "Teilnahme am Internationalen Programmierwettbewerb 2025",
    exp_title: "Erfahrung",
    exp_role: "Praktikum – IT-Abteilung",
    exp_list: "",
    projects_title: "Projekte",
    grad_proj_title: "Abschlussprojekt",
    grad_title: "Bibliotheksverwaltung der Universität",
    grad_desc: "Vollständiges Websystem zur Verwaltung der Universitätsbibliothek mit Django, REST-APIs und Benutzerverwaltung.",
    other_proj_title: "Weitere Projekte",
    p1_title: "Studentenverwaltung",
    p1_desc: "Webanwendung mit Python, MySQL und HTML/CSS.",
    p2_title: "Datenautomatisierung",
    p2_desc: "Python-Programm für Datenanalyse und Automatisierung.",
    p3_title: "E-Learning Plattform",
    p3_desc: "Online-Lernplattform für Kurse.",
    p4_title: "Firmenwebsite",
    p4_desc: "Professionelle Präsentation von Firmendienstleistungen.",
    xax4_title: "xax4media",
    xax4_desc: "Ein digitales Medienprojekt für Content-Erstellung, Design und Social-Media-Management.",
    skills_title: "Technische Fähigkeiten",
    lang_title: "Sprachen",
    lang_ar: "Arabisch:",
    lang_de: "Deutsch:",
    lang_en: "Englisch:",
    contact_title: "Kontakt",
    contact_desc: "Ich bin offen für neue Möglichkeiten und Kooperationen.",
    /* new keys (German) */
    software_title: "Software-Projekte",
    media_title: "Medien / Business-Projekt",
    contact_email: "E-Mail",
    contact_email_value: "bgdady987@gmail.com",
    contact_phone: "Telefon",
    contact_phone_value: "0931733249",
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
});