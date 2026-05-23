const header = document.querySelector(".header");
const menuButton = document.querySelector(".header__burger");
const mobileMenu = document.querySelector(".mobile-menu");

if (header && menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = !header.classList.contains("header--menu-open");

    if (isOpen) {
      mobileMenu.hidden = false;
      mobileMenu.inert = false;
    }

    header.classList.toggle("header--menu-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Закрыть меню" : "Открыть меню");

    if (!isOpen) {
      mobileMenu.hidden = true;
      mobileMenu.inert = true;
    }
  });

  mobileMenu.addEventListener("click", (event) => {
    const target = event.target;

    if (target instanceof HTMLAnchorElement || target instanceof HTMLButtonElement) {
      header.classList.remove("header--menu-open");
      mobileMenu.hidden = true;
      mobileMenu.inert = true;
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Открыть меню");
    }
  });
}
