const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });
}

const contactForm = document.querySelector("#contact-form");
const feedback = document.querySelector("#form-feedback");

if (contactForm && feedback) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) return;

    feedback.textContent = "Mensagem preenchida com sucesso! Esta é uma demonstração e nenhum dado foi enviado.";
    contactForm.reset();
  });
}
