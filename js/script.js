// Toggle hamburger menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Language Translation System
const translations = {
  en: {
    // Navigation
    "nav.projects": "Projects",
    "nav.tech": "Tech",
    "nav.about": "About",
    "nav.contact": "Contact",

    // Profile Section
    "profile.greeting": "Hello, I'm",
    "profile.btn.certificates": "View Certificates",
    "profile.btn.contact": "Contact Info",

    // Projects Section
    "projects.subtitle": "Browse My Recent",
    "projects.title": "Projects",
    "projects.project1.title": "Project One",
    "projects.project2.title": "Project Two",
    "projects.project3.title": "Project Three",
    "projects.btn.github": "Github",
    "projects.btn.demo": "Live Demo",

    // Tech Section
    "tech.subtitle": "The core technologies powering my work",
    "tech.title": "Tech Stack",
    "tech.frontend": "Frontend Development",
    "tech.backend": "Backend Development",

    // About Section
    "about.subtitle": "Get To Know More",
    "about.title": "About Me",
    "about.experience": "Experience",
    "about.experience.years": "1+ year",
    "about.experience.subtitle": "Full Stack Development",
    "about.education": "Education",
    "about.education.school": "RollingCode School",
    "about.education.subtitle": "Full Stack Bootcamp",
    "about.github": "Active on GitHub",
    "about.github.subtitle": "Contributing & Learning",
    "about.journey.title": "My Journey",
    "about.journey.p1":
      "I'm a Full Stack Developer passionate about creating innovative and efficient web solutions. My focus is on building applications that not only meet technical requirements but also provide exceptional user experiences.",
    "about.journey.p2":
      "I actively contribute to open source projects and continuously expand my skills. You can check out my work and projects on",
    "about.github.link": "my GitHub profile",
    "about.journey.p3": "where I share my work with the community.",

    // Contact Section
    "contact.subtitle": "Get in Touch",
    "contact.title": "Contact Me",

    // Certificates Modal
    "certificates.title": "My Certificates",
    "certificates.view": "View Certificate",
    "certificates.cert1.title": "Full Stack Developer",
    "certificates.cert1.description":
      "Complete certification in full stack web development",
    "certificates.cert2.title": "Frontend Development",
    "certificates.cert2.description":
      "Specialization in modern frontend development",
    "certificates.cert3.title": "Backend Development",
    "certificates.cert3.description":
      "Backend development with Node.js and databases",
    "certificates.cert4.title": "Advanced JavaScript",
    "certificates.cert4.description":
      "Advanced JavaScript and modern frameworks",

    // Toast Messages
    "toast.darkMode": "🌙 Dark mode activated",
    "toast.lightMode": "☀️ Light mode activated",
    "toast.langES": "🇪🇸 Idioma cambiado a Español",
    "toast.langEN": "🇺🇸 Language changed to English",

    // Typing Animation
    "typing.1": "Full Stack Developer",
    "typing.2": "Web Designer",
    "typing.3": "React Developer",
    "typing.4": "Problem Solver",
  },
  es: {
    // Navigation
    "nav.projects": "Proyectos",
    "nav.tech": "Tecnologías",
    "nav.about": "Sobre Mí",
    "nav.contact": "Contacto",

    // Profile Section
    "profile.greeting": "Hola, soy",
    "profile.btn.certificates": "Ver Certificados",
    "profile.btn.contact": "Información de Contacto",

    // Projects Section
    "projects.subtitle": "Explora Mis Proyectos Recientes",
    "projects.title": "Proyectos",
    "projects.project1.title": "Proyecto Uno",
    "projects.project2.title": "Proyecto Dos",
    "projects.project3.title": "Proyecto Tres",
    "projects.btn.github": "Github",
    "projects.btn.demo": "Demo en Vivo",

    // Tech Section
    "tech.subtitle": "Las tecnologías principales que impulsan mi trabajo",
    "tech.title": "Stack Tecnológico",
    "tech.frontend": "Desarrollo Frontend",
    "tech.backend": "Desarrollo Backend",

    // About Section
    "about.subtitle": "Conoce Más",
    "about.title": "Sobre Mí",
    "about.experience": "Experiencia",
    "about.experience.years": "1+ año",
    "about.experience.subtitle": "Desarrollo Full Stack",
    "about.education": "Educación",
    "about.education.school": "RollingCode School",
    "about.education.subtitle": "Bootcamp Full Stack",
    "about.github": "Activo en GitHub",
    "about.github.subtitle": "Contribuyendo & Aprendiendo",
    "about.journey.title": "Mi Trayectoria",
    "about.journey.p1":
      "Soy un Desarrollador Full Stack apasionado por crear soluciones web innovadoras y eficientes. Mi enfoque está en construir aplicaciones que no solo cumplan con los requisitos técnicos, sino que también brinden experiencias de usuario excepcionales.",
    "about.journey.p2":
      "Contribuyo activamente a proyectos de código abierto y amplío continuamente mis habilidades. Puedes ver mi trabajo y proyectos en",
    "about.github.link": "mi perfil de GitHub",
    "about.journey.p3": "donde comparto mi trabajo con la comunidad.",

    // Contact Section
    "contact.subtitle": "Ponte en Contacto",
    "contact.title": "Contáctame",

    // Certificates Modal
    "certificates.title": "Mis Certificados",
    "certificates.view": "Ver Certificado",
    "certificates.cert1.title": "Desarrollador Full Stack",
    "certificates.cert1.description":
      "Certificación completa en desarrollo web full stack",
    "certificates.cert2.title": "Desarrollo Frontend",
    "certificates.cert2.description":
      "Especialización en desarrollo frontend moderno",
    "certificates.cert3.title": "Desarrollo Backend",
    "certificates.cert3.description":
      "Desarrollo backend con Node.js y bases de datos",
    "certificates.cert4.title": "JavaScript Avanzado",
    "certificates.cert4.description":
      "JavaScript avanzado y frameworks modernos",

    // Toast Messages
    "toast.darkMode": "🌙 Modo oscuro activado",
    "toast.lightMode": "☀️ Modo claro activado",
    "toast.langES": "🇪🇸 Idioma cambiado a Español",
    "toast.langEN": "🇺🇸 Language changed to English",

    // Typing Animation
    "typing.1": "Desarrollador Full Stack",
    "typing.2": "Diseñador Web",
    "typing.3": "Desarrollador React",
    "typing.4": "Solucionador de Problemas",
  },
};

// Language Toggle
const languageToggle = document.getElementById("language-toggle");
let currentLang = localStorage.getItem("language") || "en";

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("language", lang);
  document.documentElement.setAttribute("lang", lang);

  // Update language button text
  languageToggle.querySelector(".lang-text").textContent =
    lang === "en" ? "ES" : "EN";

  // Update all translated elements
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Update typing animation texts
  textArray = [
    translations[lang]["typing.1"],
    translations[lang]["typing.2"],
    translations[lang]["typing.3"],
    translations[lang]["typing.4"],
  ];

  // Show toast notification
  showToast(
    lang === "es"
      ? translations[lang]["toast.langES"]
      : translations[lang]["toast.langEN"],
    "success"
  );
}

languageToggle?.addEventListener("click", () => {
  const newLang = currentLang === "en" ? "es" : "en";
  setLanguage(newLang);
});

// Initialize language on load
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLang);
});

// Scroll Progress Indicator
window.addEventListener("scroll", () => {
  const scrollProgress = document.getElementById("scroll-progress");
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;
  scrollProgress.style.width = scrollPercentage + "%";
});

// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem("theme") || "dark";
htmlElement.setAttribute("data-theme", currentTheme);

themeToggle?.addEventListener("click", () => {
  const theme = htmlElement.getAttribute("data-theme");
  const newTheme = theme === "light" ? "dark" : "light";

  htmlElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  // Show toast notification
  showToast(
    newTheme === "dark"
      ? translations[currentLang]["toast.darkMode"]
      : translations[currentLang]["toast.lightMode"],
    "success"
  );
});

// Scroll Animations with Intersection Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-visible");
    }
  });
}, observerOptions);

// Observe all sections and detail containers
document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(
    "section, .details-container, .about-containers"
  );
  elementsToAnimate.forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Typing Animation
const typedTextElement = document.getElementById("typed-text");
const textArray = [
  "Full Stack Developer",
  "Web Designer",
  "React Developer",
  "Problem Solver",
];
let textArrayIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
  const currentText = textArray[textArrayIndex];
  const cursor = '<span class="cursor">|</span>';

  if (isDeleting) {
    typedTextElement.innerHTML =
      currentText.substring(0, charIndex - 1) + cursor;
    charIndex--;
  } else {
    typedTextElement.innerHTML =
      currentText.substring(0, charIndex + 1) + cursor;
    charIndex++;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentText.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textArrayIndex = (textArrayIndex + 1) % textArray.length;
    typeSpeed = 500;
  }

  setTimeout(typeText, typeSpeed);
}

// Start typing animation when page loads
document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(
    "section, .details-container, .about-containers"
  );
  elementsToAnimate.forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
  });

  // Start typing animation
  if (typedTextElement) {
    setTimeout(typeText, 1000);
  }

  // Animate skill bars
  animateSkillBars();
});

// Skill Bars Animation
function animateSkillBars() {
  const skillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const skillProgress =
            entry.target.querySelectorAll(".skill-progress");
          skillProgress.forEach((bar) => {
            const progress = bar.getAttribute("data-progress");
            bar.style.width = progress + "%";
          });
          skillObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll(".details-container").forEach((container) => {
    skillObserver.observe(container);
  });
}

// Dynamic Navigation Arrow Button
const backToTopButton = document.getElementById("back-to-top");

// Define sections and their navigation
const sections = [
  { id: "profile", next: "#projects" },
  { id: "projects", next: "#tech" },
  { id: "tech", next: "#about" },
  { id: "about", next: "#contact" },
  { id: "contact", next: "#profile" }, // Last section goes back to top
];

let currentSectionIndex = 0;

// Update arrow direction and destination based on scroll position
function updateArrowButton() {
  const scrollPosition = window.pageYOffset + window.innerHeight / 2;

  // Find current section
  sections.forEach((section, index) => {
    const element = document.getElementById(section.id);
    if (element) {
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + window.pageYOffset;
      const elementBottom = elementTop + element.offsetHeight;

      if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
        currentSectionIndex = index;
      }
    }
  });

  // Show button when scrolled down
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }

  // Update arrow direction based on current section
  if (currentSectionIndex === sections.length - 1) {
    // Last section (contact) - arrow points up
    backToTopButton.classList.add("arrow-up");
  } else {
    // Other sections - arrow points down
    backToTopButton.classList.remove("arrow-up");
  }
}

window.addEventListener("scroll", updateArrowButton);

backToTopButton?.addEventListener("click", () => {
  const destination = sections[currentSectionIndex].next;
  const targetElement = document.querySelector(destination);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
});

// Initialize on load
document.addEventListener("DOMContentLoaded", updateArrowButton);

// Toast Notification System
function showToast(message, type = "info") {
  const toastContainer = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;

  const icons = {
    success: "✓",
    error: "✕",
    info: "ℹ",
    warning: "⚠",
  };

  toast.innerHTML = `
    <span class="toast-icon">${icons[type] || icons.info}</span>
    <span class="toast-message">${message}</span>
  `;

  toastContainer.appendChild(toast);

  // Trigger animation
  setTimeout(() => toast.classList.add("show"), 10);

  // Remove toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Copy email on click
document.addEventListener("DOMContentLoaded", () => {
  // Copy email functionality
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
  emailLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const email = this.textContent;
      navigator.clipboard
        .writeText(email)
        .then(() => {
          showToast("📋 Email copiado al portapapeles", "success");
        })
        .catch(() => {
          showToast("No se pudo copiar el email", "error");
        });
    });
  });

  // Certificates Modal
  setupCertificatesModal();
});

// Certificates Modal Handler
function setupCertificatesModal() {
  const modal = document.getElementById("certificates-modal");
  const openBtn = document.getElementById("open-certificates-btn");
  const closeBtn = document.getElementById("close-certificates-btn");

  if (!modal || !openBtn || !closeBtn) return;

  // Open modal
  openBtn.addEventListener("click", () => {
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
    showToast("📜 Visualizando certificados", "info");
  });

  // Close modal
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    document.body.style.overflow = "auto";
  });

  // Close on outside click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
      document.body.style.overflow = "auto";
    }
  });

  // Close on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("show")) {
      modal.classList.remove("show");
      document.body.style.overflow = "auto";
    }
  });
}
