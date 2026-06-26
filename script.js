const year = document.getElementById("year");
const links = document.querySelectorAll(".directory-link");
const sections = [...links]
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if (year) {
  year.textContent = new Date().getFullYear();
}

const setActiveLink = () => {
  const current = sections.findLast((section) => section.getBoundingClientRect().top <= 160);
  if (!current) return;

  links.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current.id}`);
  });
};

window.addEventListener("scroll", setActiveLink, { passive: true });
setActiveLink();
