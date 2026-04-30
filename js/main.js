const exploreToggle = document.querySelector("[data-explore-toggle]");
const explorePanel = document.querySelector("[data-explore-panel]");
const exploreCloseButtons = document.querySelectorAll("[data-explore-close]");
const languageToggle = document.querySelector("[data-language-toggle]");
const languagePanel = document.querySelector("[data-language-panel]");
const languageClose = document.querySelector("[data-language-close]");

const setExplorePanelState = (isOpen) => {
  explorePanel?.classList.toggle("is-open", isOpen);
  explorePanel?.setAttribute("aria-hidden", String(!isOpen));
  exploreToggle?.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("is-explore-open", isOpen);

  if (isOpen) {
    setLanguagePanelState(false);
  }
};

const setLanguagePanelState = (isOpen) => {
  languagePanel?.classList.toggle("is-open", isOpen);
  languagePanel?.setAttribute("aria-hidden", String(!isOpen));
  languageToggle?.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("is-language-open", isOpen);

  if (isOpen) {
    setExplorePanelState(false);
  }
};

exploreToggle?.addEventListener("click", () => {
  const isOpen = explorePanel?.classList.contains("is-open") ?? false;
  setExplorePanelState(!isOpen);
});

exploreCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setExplorePanelState(false);
    exploreToggle?.focus();
  });
});

explorePanel?.addEventListener("click", (event) => {
  if (event.target === explorePanel) {
    setExplorePanelState(false);
  }
});

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
    setExplorePanelState(false);
    setLanguagePanelState(false);
  }
});
