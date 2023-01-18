const buttons = document.getElementsByClassName("cta__text__button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = () => {
    const expanded = document.getElementsByClassName("contact_textbox")[0].style.height == "400px";

    for (let f = 0; f < buttons.length; f++) {
      buttons[f].ariaExpanded = !expanded;
    }

    console.log(expanded);

    document.getElementsByClassName("contact_textbox")[0].style.height = expanded ? 0 : "400px";
    document.getElementsByClassName("contact_textbox__textbox")[0].style.bottom = expanded
      ? "-365px"
      : 0;
  };
}
