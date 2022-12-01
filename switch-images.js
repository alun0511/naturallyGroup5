const braiceletDesk = document.getElementById("braicelet-desktop");
const sweaterDesk = document.getElementById("sweater-desktop");
const socksDesk = document.getElementById("socks-desktop");
const thermosDesk = document.getElementById("thermos-desktop");
const braiceletMobile = document.getElementById("braicelet-mobile");
const sweaterMobile = document.getElementById("sweater-mobile");
const socksMobile = document.getElementById("socks-mobile");
const thermosMobile = document.getElementById("thermos-mobile");

const hiddenClass = document.querySelector(".hidden");
const sweaterVideoDesk = document.getElementById("sweater-video-desk");
const sweaterVideoMobile = document.getElementById("sweater-video-mobile");

const braceletDarkGreenDesk = () => {
  braiceletDesk.src = "images/products/Bracelet/bracelet_green420x420.png";
};
const braceletLightkGreenDesk = () => {
  braiceletDesk.src = "images/products/Bracelet/bracelet_lightgreen420x420.png";
};
const braceletRedDesk = () => {
  braiceletDesk.src = "images/products/Bracelet/bracelet_rost420x420.png";
};
const braceletOrangeDesk = () => {
  braiceletDesk.src = "images/products/Bracelet/bracelet_yellow420x420.png";
};
const braceletLogoDesk = () => {
  braiceletDesk.src = "images/products/Bracelet/bracelet+logo420x420.png";
};

const sweaterBeigeDesk = () => {
  sweaterDesk.src = "images/products/Sweater/fleece_desktop_beige.jpg";
  sweaterVideoDesk.classList.add("hidden");
  sweaterDesk.classList.remove("hidden");
};
const sweaterDarkGreenDesk = () => {
  sweaterDesk.src = "images/products/Sweater/fleece_desktop_darkgreen.jpg";
  sweaterVideoDesk.classList.add("hidden");
  sweaterDesk.classList.remove("hidden");
};
const sweaterLightGreenDesk = () => {
  sweaterDesk.src = "images/products/Sweater/fleece_desktop_lightgreen.jpg";
  sweaterVideoDesk.classList.add("hidden");
  sweaterDesk.classList.remove("hidden");
};
const sweaterRedDesk = () => {
  sweaterDesk.src = "images/products/Sweater/fleece_desktop_red.jpg";
  sweaterVideoDesk.classList.add("hidden");
  sweaterDesk.classList.remove("hidden");
};
const sweaterOrangeDesk = () => {
  sweaterDesk.src = "images/products/Sweater/fleece_desktop_yellow.jpg";
  sweaterVideoDesk.classList.add("hidden");
  sweaterDesk.classList.remove("hidden");
};
const sweateranimatedDesk = () => {
  if (sweaterVideoDesk.classList.contains("hidden")) {
    sweaterVideoDesk.classList.remove("hidden");
    sweaterDesk.classList.add("hidden");
  } else {
    sweaterVideoDesk.classList.add("hidden");
    sweaterDesk.classList.remove("hidden");
  }
};

const socksGreenDesk = () => {
  socksDesk.src = "images/products/Socks/socks+box_ljusa420x420.png";
  // socksDesk.style.opacity = "100%";
};
const socksOrangeDesk = () => {
  socksDesk.src = "images/products/Socks/socks+box420x420.png";
  // socksDesk.style.opacity = "100%";
};

const thermosGreenDesk = () => {
  thermosDesk.src = "images/products/Thermos/green_desktop.png";
};
const thermosRedDesk = () => {
  thermosDesk.src = "images/products/Thermos/red_desktop.png";
};
const thermosOrangeDesk = () => {
  thermosDesk.src = "images/products/Thermos/yellow_desktop.png";
};
const thermosTrioDesk = () => {
  thermosDesk.src = "images/products/Thermos/trio_desktop.png";
};
const thermosForrestDesk = () => {
  thermosDesk.src = "images/products/Thermos/green_tilted_desktop.png";
};

const braceletDarkGreenMobile = () => {
  braiceletMobile.src = "images/products/Bracelet/bracelet_green354x328.png";
};
const braceletLightkGreenMobile = () => {
  braiceletMobile.src =
    "images/products/Bracelet/bracelet_lightgreen354x328.png";
};
const braceletRedMobile = () => {
  braiceletMobile.src = "images/products/Bracelet/bracelet_rost354x328.png";
};
const braceletOrangeMobile = () => {
  braiceletMobile.src = "images/products/Bracelet/bracelet_yellow354x328.png";
};
const braceletLogoMobile = () => {
  braiceletMobile.src = "images/products/Bracelet/bracelet+logo354x328.png";
};

const sweaterBeigeMobile = () => {
  sweaterMobile.src = "images/products/Sweater/fleece_mobile_beige.jpg";
};
const sweaterDarkGreenMobile = () => {
  sweaterMobile.src = "images/products/Sweater/fleece_mobile_darkgreen.jpg";
};
const sweaterLightGreenMobile = () => {
  sweaterMobile.src = "images/products/Sweater/fleece_mobile_lightgreen.jpg";
};
const sweaterRedMobile = () => {
  sweaterMobile.src = "images/products/Sweater/fleece_mobile_red.jpg";
};
const sweaterOrangeMobile = () => {
  sweaterMobile.src = "images/products/Sweater/fleece_mobile_yellow.jpg";
};
const sweateranimatedMobile = () => {
  if (sweaterVideoMobile.classList.contains("hidden")) {
    sweaterVideoMobile.classList.remove("hidden");
    sweaterMobile.classList.add("hidden");
  } else {
    sweaterVideoMobile.classList.add("hidden");
    sweaterMobile.classList.remove("hidden");
  }
};

const socksGreenMobile = () => {
  socksMobile.src = "images/products/Socks/socks+box354x328.png";
};
const socksOrangeMobile = () => {
  socksMobile.src = "images/products/Socks/socks+box_ljusa354x328.png";
};

const thermosGreenMobile = () => {
  thermosMobile.src = "images/products/Thermos/green_mobile.png";
};
const thermosRedMobile = () => {
  thermosMobile.src = "images/products/Thermos/red_mobile.png";
};
const thermosOrangeMobile = () => {
  thermosMobile.src = "images/products/Thermos/yellow_mobile.png";
};
const thermosTrioMobile = () => {
  thermosMobile.src = "images/products/Thermos/trio_mobile.png";
};
const thermosForrestMobile = () => {
  thermosMobile.src = "images/products/Thermos/green_tilted_mobile.png";
};
