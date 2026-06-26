const year = document.getElementById("year");
const links = document.querySelectorAll(".directory-link");
const sections = [...links]
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
const languageButtons = document.querySelectorAll(".lang-button");

const translations = {
  en: {
    "brand.name": "Outstanding Cleaning and Maintenance Limited",
    "brand.tagline": "Cleaning, cooling and property care",
    "nav.ac": "AC Installation & Maintenance",
    "nav.property": "Property Maintenance",
    "nav.boiler": "Boiler & HIU Maintenance",
    "nav.carpet": "Carpet Cleaning & End of Tenancy Cleaning",
    "contact.label": "Contact",
    "contact.address": "Address",
    "contact.mobile": "Mobile",
    "mobile.call": "Call",
    "hero.eyebrow": "AC and cold room services for homes, shops and small commercial units",
    "hero.title": "Installation, maintenance and repair work arranged clearly from the first call.",
    "hero.copy": "Outstanding Cleaning and Maintenance Limited is being repositioned around air conditioning, cold room installation and repair, while keeping property maintenance and cleaning services easy to find.",
    "hero.call": "Call 07367 582623",
    "hero.directory": "View service directory",
    "hero.status": "Open for enquiries",
    "focus.primaryLabel": "Primary focus",
    "focus.primary": "AC installation and maintenance",
    "focus.coldLabel": "Commercial cooling",
    "focus.cold": "Cold room installation and repairs",
    "focus.supportLabel": "Support work",
    "focus.support": "Property, boiler, HIU and cleaning services",
    "section.ac.eyebrow": "Cooling services",
    "section.ac.title": "AC Installation & Maintenance",
    "section.ac.note": "Use this as the main promotional section. Cold room installation and repairs can be added here.",
    "section.property.eyebrow": "General care",
    "section.property.title": "Property Maintenance",
    "section.boiler.eyebrow": "Heating and hot water",
    "section.boiler.title": "Boiler & HIU Maintenance",
    "section.carpet.eyebrow": "Cleaning services",
    "section.carpet.title": "Carpet Cleaning & End of Tenancy Cleaning",
    "final.eyebrow": "Ready to replace with your real copy",
    "final.title": "Send the service details when ready, and they can be pasted into each blank section.",
    "final.call": "Call 07367 582623",
    "final.email": "Email the company",
    "footer.top": "Back to top",
    "floating.call": "Call now"
  },
  zh: {
    "brand.name": "Outstanding Cleaning and Maintenance Limited",
    "brand.tagline": "清洁、制冷与物业维护服务",
    "nav.ac": "空调安装与维护",
    "nav.property": "物业维修维护",
    "nav.boiler": "锅炉与 HIU 维护",
    "nav.carpet": "地毯清洁与退房清洁",
    "contact.label": "联系方式",
    "contact.address": "地址",
    "contact.mobile": "手机",
    "mobile.call": "电话",
    "hero.eyebrow": "面向住宅、商铺和小型商业空间的空调与冷库服务",
    "hero.title": "从第一次联系开始，把安装、维护和维修安排清楚。",
    "hero.copy": "Outstanding Cleaning and Maintenance Limited 正在重点推广空调、冷库安装与维修业务，同时保留物业维护和清洁服务入口，方便不同客户快速找到需要的服务。",
    "hero.call": "致电 07367 582623",
    "hero.directory": "查看服务目录",
    "hero.status": "欢迎咨询",
    "focus.primaryLabel": "重点业务",
    "focus.primary": "空调安装与维护",
    "focus.coldLabel": "商业制冷",
    "focus.cold": "冷库安装与维修",
    "focus.supportLabel": "配套服务",
    "focus.support": "物业、锅炉、HIU 与清洁服务",
    "section.ac.eyebrow": "制冷服务",
    "section.ac.title": "空调安装与维护",
    "section.ac.note": "这里作为主要推广区。后续可以把空调、冷库安装和维修的详细内容直接贴在下方空白区域。",
    "section.property.eyebrow": "综合维护",
    "section.property.title": "物业维修维护",
    "section.boiler.eyebrow": "供暖与热水",
    "section.boiler.title": "锅炉与 HIU 维护",
    "section.carpet.eyebrow": "清洁服务",
    "section.carpet.title": "地毯清洁与退房清洁",
    "final.eyebrow": "等待替换为正式文案",
    "final.title": "你把详细服务内容写好后，可以直接贴进每个空白服务区。",
    "final.call": "致电 07367 582623",
    "final.email": "发送邮件",
    "footer.top": "返回顶部",
    "floating.call": "立即致电"
  }
};

if (year) {
  year.textContent = new Date().getFullYear();
}

const safeStorage = {
  get(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      // Language switching should still work when storage is blocked.
    }
  }
};

const setActiveLink = () => {
  let current = null;
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= 160) {
      current = section;
    }
  });

  if (!current) return;

  links.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current.id}`);
  });
};

const setLanguage = (language) => {
  const dictionary = translations[language] || translations.en;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.documentElement.dataset.language = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === language);
  });

  safeStorage.set("siteLanguage", language);
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

window.addEventListener("scroll", setActiveLink, { passive: true });
setActiveLink();
setLanguage(safeStorage.get("siteLanguage") || "en");
