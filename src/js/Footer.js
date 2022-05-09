import Control from './Control.js';

class Footer extends Control {
  constructor(parent) {
    super(parent, 'div', 'footer');
    this.subtitlle = new Control(this.element, 'h2', 'subtitlle');
    this.subtitlle.element.textContent = 'Клавиатура создана в операционной системе Windows';
    this.subtitlle_second = new Control(this.element, 'h3', 'subtitlle');
    this.subtitlle_second.element.textContent = 'Для переключения языка комбинация: левыe ctrl + shift';
  }
}

const createFooter = () => new Footer(document.body);

export default createFooter;





