const hiddenLanguage = document.querySelector(".hidden-text");
const english = document.querySelectorAll(".eng");
const swedish = document.querySelectorAll(".sve");

let eng = true;

swedish.forEach((element) => {
  element.classList.add("hidden-text");
});

language.forEach((button) => {
  const newbutton = button;

  newbutton.addEventListener("click", () => {
    if (!eng) {
      language.forEach((button) => {
        button.innerHTML = "<a>SV<strong>/EN</strong></a>";
      });
      swedish.forEach((element) => {
        element.classList.add("hidden-text");
      });
      english.forEach((element) => {
        element.classList.remove("hidden-text");
      });
      eng = true;
    } else {
      language.forEach((button) => {
        button.innerHTML = "<a><strong>SV/</strong>EN</a>";
      });
      swedish.forEach((element) => {
        element.classList.remove("hidden-text");
      });
      english.forEach((element) => {
        element.classList.add("hidden-text");
      });
      eng = false;
    }
  });
});
