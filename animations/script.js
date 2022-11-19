const hamburgerMenu = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".drop-menu");
const hiddenMenu = document.querySelector(".hidden");
const userEmail = document.getElementById("email");
const body = document.querySelector("Body");

hamburgerMenu.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else if (!menu.classList.contains("hidden")) {
    menu.classList.add("hidden");
  }
});

/* window.addEventListener("scroll", () => {
  // console.log(`Hello`);

  // console.log(window.scrollY);

  // console.log(window.scrollTop);

  console.log(document.documentElement.scrollTop);
}); */

// https://coolcssanimation.com/element-fade-out-on-scroll/

var header = document.querySelector(".article");

function fadeOutOnScroll(element) {
  if (!element) {
    return;
  }

  var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
  var elementHeight = element.offsetHeight;
  var scrollTop = document.documentElement.scrollTop + 400;

  var opacity = 0;

  if (scrollTop >= 600) {
    opacity = 0 + (scrollTop - distanceToTop) / elementHeight;
  }

  if (opacity <= 1) {
    element.style.opacity = opacity;
  }
}

function scrollHandler() {
  fadeOutOnScroll(header);
}

window.addEventListener("scroll", scrollHandler);

/* var header = document.querySelector(".article");

function fadeOutOnScroll(element) {
  if (!element) {
    return;
  }

  var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
  var elementHeight = element.offsetHeight;
  var scrollTop = document.documentElement.scrollTop + 400;

  var opacity = 1;

  if (scrollTop > distanceToTop) {
    opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
  }

  if (opacity >= 0) {
    element.style.opacity = opacity;
  }
}

function scrollHandler() {
  fadeOutOnScroll(header);
}

window.addEventListener("scroll", scrollHandler); */
