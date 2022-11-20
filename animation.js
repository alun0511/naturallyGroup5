const hamburgerMenu = document.querySelector(".hamburger");
const menu = document.querySelector(".drop-menu");
const hiddenMenu = document.querySelector(".hidden-left");
const userEmail = document.getElementById("email");
const body = document.querySelector("body");
const cart = document.querySelector(".cart");
const hidenCart = document.querySelector(".hidden-right");
const shoppingBag = document.querySelector(".shopping-bag");

const minWidth = window.matchMedia("(min-width: 768px)");

window.addEventListener("resize", () => {
  if (minWidth.matches) {
    menu.classList.add("hidden-left");
  }
});

hamburgerMenu.addEventListener("click", () => {
  if (
    menu.classList.contains(
      "hidden-left" || !cart.classList.contains("hidden-right")
    )
  ) {
    menu.classList.remove("hidden-left");
    cart.classList.add("hidden-right");
  } else if (!menu.classList.contains("hidden-left")) {
    menu.classList.add("hidden-left");
  }
});

shoppingBag.addEventListener("click", () => {
  if (
    cart.classList.contains("hidden-right") ||
    !menu.classList.contains("hidden-left")
  ) {
    cart.classList.remove("hidden-right");
    menu.classList.add("hidden-left");
  } else if (!cart.classList.contains("hidden-right")) {
    cart.classList.add("hidden-right");
  }
});

window.addEventListener("scroll", () => {
  // body.onscroll = () => {
  console.log(`Hello`);
  // body.scrollTop;
  // };
});

/* document.body.onscroll = () => {
  console.log(`Hello`);
};
 */
