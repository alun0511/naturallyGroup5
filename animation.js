const hamburgerMenu = document.querySelector(".hamburger");
const menu = document.querySelector(".drop-menu");
const hiddenMenu = document.querySelector(".hidden-left");
const userEmail = document.getElementById("email");
const body = document.querySelector("body");
const cart = document.querySelector(".cart");
const hidenCart = document.querySelector(".hidden-right");
const shoppingBag = document.querySelector(".shopping-bag");
const language = document.querySelectorAll(".language-button");
const search = document.querySelector(".search");
const searchField = document.querySelector(".search-field");
const hiddenSearch = document.querySelector(".hidden-top");
const main = document.querySelector("main");
const header = document.querySelector("header");
const heroImg = document.querySelector(".hero img");
const heroVideo = document.querySelector(".hero video");
const bigLogoMobileUp = document.querySelector(".big-logo img");
const bigLogoMobileDown = document.querySelector(".big-logo2 img");

heroVideo.playbackRate = 0.78;

const minWidth = window.matchMedia("(min-width: 768px)");

if (minWidth.matches) {
  bigLogoMobileDown.src = "/images/logo/bigdesktopUp.png";
  bigLogoMobileUp.src = "/images/logo/bigdesktopDown.png";
  console.log(bigLogoMobileUp, bigLogoMobileDown);
}

window.addEventListener("resize", () => {
  if (minWidth.matches) {
    menu.classList.add("hidden-left");
    cart.classList.add("hidden-right");
  }
});

search.addEventListener("click", () => {
  if (searchField.classList.contains("hidden-top")) {
    searchField.classList.remove("hidden-top");
    cart.classList.add("hidden-right");
    menu.classList.add("hidden-left");
  } else if (!searchField.classList.contains("hidden-top")) {
    searchField.classList.add("hidden-top");
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
    searchField.classList.add("hidden-top");
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
    searchField.classList.add("hidden-top");
  } else if (!cart.classList.contains("hidden-right")) {
    cart.classList.add("hidden-right");
  }
});

const emailForm = document.querySelector(".email-form");

emailForm.addEventListener("submit", (e) => {
  window.alert(
    "Thank you for signing up to our newsletter! A voucher has been sent to the submitted email address."
  );
});

window.addEventListener("scroll", () => {
  // body.onscroll = () => {
  // console.log(`Hello`);
  // body.scrollTop;
  // };
});

/* document.body.onscroll = () => {
  console.log(`Hello`);
};
 */
