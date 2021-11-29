window.addEventListener("load", () => {
  const buttonMenu = document.querySelector(".header__menu");
  const menu = document.querySelector(".header__links");
  const body = document.querySelector("body");

  buttonMenu?.addEventListener("click", () => {
    if (buttonMenu.getAttribute("aria-expanded") === "true") {
      body?.classList.remove("noscroll");
      menu?.setAttribute("data-visible", "false");
      buttonMenu?.setAttribute("aria-expanded", "false");
    } else if (buttonMenu.getAttribute("aria-expanded") === "false") {
      body?.classList.add("noscroll");
      menu?.setAttribute("data-visible", "true");
      buttonMenu?.setAttribute("aria-expanded", "true");
    }
  });
});
