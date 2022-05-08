import Control from './Control';

class Header extends Control {
  constructor(parent) {
    super(parent, 'div', 'header');
    this.titlle = new Control(this.element, 'h1', 'title');
    this.titlle.element.textContent = 'RSS Виртуальная клавиатура';
  }
}

const createHead = () => new Header(document.body);

export default createHead;
