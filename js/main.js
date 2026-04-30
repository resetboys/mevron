const languageToggle = document.querySelector("[data-language-toggle]");
const languagePanel = document.querySelector("[data-language-panel]");
const languageClose = document.querySelector("[data-language-close]");

const setLanguagePanelState = (isOpen) => {
  languagePanel?.classList.toggle("is-open", isOpen);
  languagePanel?.setAttribute("aria-hidden", String(!isOpen));
  languageToggle?.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("is-language-open", isOpen);
};

languageToggle?.addEventListener("click", () => {
  const isOpen = languagePanel?.classList.contains("is-open") ?? false;
  setLanguagePanelState(!isOpen);
});

languageClose?.addEventListener("click", () => {
  setLanguagePanelState(false);
  languageToggle?.focus();
});

languagePanel?.addEventListener("click", (event) => {
  if (event.target === languagePanel) {
    setLanguagePanelState(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setLanguagePanelState(false);
  }
});
