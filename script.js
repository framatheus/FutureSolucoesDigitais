document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("#current-year");
  const header = document.querySelector(".site-header");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  const updateHeader = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  if (!("IntersectionObserver" in window)) {
    return;
  }

  const targets = document.querySelectorAll(
    ".section-heading, .service-card, .project, .steps article, .about-grid, .contact-card"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach((target) => {
    target.classList.add("reveal");
    observer.observe(target);
  });
});
