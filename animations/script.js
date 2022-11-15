const hamburgerMenu = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".drop-menu");
const hiddenMenu = document.querySelector(".hidden");
const userEmail = document.getElementById("email");

hamburgerMenu.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else if (!menu.classList.contains("hidden")) {
    menu.classList.add("hidden");
  }
});
