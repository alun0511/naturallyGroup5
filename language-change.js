let eng = true;

language.forEach((button) => {
  const newbutton = button;

  newbutton.addEventListener("click", () => {
    if (!eng) {
      language.forEach((button) => {
        button.innerHTML = "<a>SV<strong>/EN</strong></a>";
      });
      eng = true;
    } else {
      language.forEach((button) => {
        button.innerHTML = "<a><strong>SV/</strong>EN</a>";
      });
      eng = false;
    }
  });
});
