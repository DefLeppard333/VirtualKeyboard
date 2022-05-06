// import header from "./js/Header" ;
// import textarea from "./js/Textarea";
// import keyboard from "./js/Keyboard";


window.onload = () => {

    document.body.appendChild(document.createElement('div'))
    header();
    const text = textarea();
    keyboard(text);
  };