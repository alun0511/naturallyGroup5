const hamburgerMenu = document.querySelector(".hamburger");
const menu = document.querySelector(".drop-menu");
const hiddenMenu = document.querySelector(".hidden");
const userEmail = document.getElementById("email");

const minWidth = window.matchMedia("(min-width: 768px)");

window.addEventListener("resize", () => {
  if (minWidth.matches) {
    menu.classList.add("hidden");
  }
});

hamburgerMenu.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else if (!menu.classList.contains("hidden")) {
    menu.classList.add("hidden");
  }
});
