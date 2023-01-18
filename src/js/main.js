const buttons = document.getElementsByClassName("cta__text__button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = () => {
    const collapsed = document.getElementsByClassName("contact_textbox")[0].style.height != "400px";

    document.getElementsByClassName("contact_textbox")[0].style.height = collapsed ? "400px" : 0;
    document.getElementsByClassName("contact_textbox__textbox")[0].style.bottom = collapsed
      ? 0
      : "-365px";
  };
}
