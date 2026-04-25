const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

// Dynamically create the menu overlay
const menuOverlay = document.createElement("div");
menuOverlay.className = "mobile-menu-overlay";
document.body.appendChild(menuOverlay);

const closeMobileMenu = () => {
  if (mobileMenu) mobileMenu.classList.remove("active");
  menuOverlay.classList.remove("active");
  document.body.style.overflow = "";
};

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    menuOverlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  });
}
if (closeMenu && mobileMenu) {
  closeMenu.addEventListener("click", closeMobileMenu);
}
menuOverlay.addEventListener("click", closeMobileMenu);

const mobileDropdownBtn = document.getElementById("mobileDropdownBtn");
if (mobileDropdownBtn) {
  mobileDropdownBtn.addEventListener("click", () => {
    mobileDropdownBtn.classList.toggle("active");
  });
}

const yearEls = document.querySelectorAll(".year");
yearEls.forEach((el) => (el.textContent = new Date().getFullYear()));



const translations = {
  en: { started: "Get Started", consult: "Book Consultation" },
  sw: { started: "Anza Sasa", consult: "Weka Miadi" },
};
const langBtn = document.getElementById("langBtn");
const mobileLangBtn = document.getElementById("mobileLangBtn");
if (langBtn || mobileLangBtn) {
  let lang = localStorage.getItem("techlouis-lang") || "en";
  const applyLang = () => {
    document.querySelectorAll("[data-t]").forEach((node) => {
      const key = node.getAttribute("data-t");
      if (translations[lang][key]) node.textContent = translations[lang][key];
    });
    if (langBtn) langBtn.textContent = lang === "en" ? "SW" : "EN";
    if (mobileLangBtn) mobileLangBtn.textContent = `🌐 ${lang === "en" ? "SW" : "EN"}`;
  };
  applyLang();
  const toggleLang = () => {
    lang = lang === "en" ? "sw" : "en";
    localStorage.setItem("techlouis-lang", lang);
    applyLang();
  };
  if (langBtn) langBtn.addEventListener("click", toggleLang);
  if (mobileLangBtn) mobileLangBtn.addEventListener("click", toggleLang);
}

const counters = document.querySelectorAll("[data-count]");
const animateCounter = (el) => {
  const target = Number(el.getAttribute("data-count"));
  const duration = 1100;
  const step = target / (duration / 16);
  let current = 0;
  const tick = () => {
    current += step;
    if (current >= target) {
      el.textContent = `${target}+`;
      return;
    }
    el.textContent = `${Math.floor(current)}+`;
    requestAnimationFrame(tick);
  };
  tick();
};
if (counters.length) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((counter) => observer.observe(counter));
}

const testimonials = [
  { name: "Nyati Auction Mart", quote: "Tech Louis redesigned our platform and booking inquiries increased by 40%." },
  { name: "Bezzu Security", quote: "Their ERP and cybersecurity implementation reduced downtime by 80%." },
  { name: "SME Client", quote: "Fast communication, beautiful design, and practical digital strategy." },
];
const quoteEl = document.getElementById("testimonialQuote");
const nameEl = document.getElementById("testimonialName");
if (quoteEl && nameEl) {
  let i = 0;
  setInterval(() => {
    i = (i + 1) % testimonials.length;
    quoteEl.textContent = testimonials[i].quote;
    nameEl.textContent = testimonials[i].name;
  }, 3500);
}

const revealNodes = document.querySelectorAll(".reveal");
if (revealNodes.length) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.16 }
  );
  revealNodes.forEach((node) => revealObserver.observe(node));
}
