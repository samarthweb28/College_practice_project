/* ============================================================
   Kestrel Hill College — shared interactions
   Mobile nav toggle + contact form handling
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-main-nav]");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  const contactForm = document.querySelector("[data-contact-form]");
  if (contactForm) {
    contactForm.addEventListener("submit", function (evt) {
      evt.preventDefault();
      const status = document.querySelector("[data-contact-status]");
      if (status) {
        status.textContent =
          "Thanks \u2014 this is a demo form, so nothing was actually sent, but a real inbox would have this message now.";
        status.style.display = "block";
      }
      contactForm.reset();
    });
  }

  // Set current year in footer
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
