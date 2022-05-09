export default class Control {
  constructor(parent, tag, className) {
    this.element = document.createElement(tag);
    this.element.className = className;
    parent.append(this.element);
  }

  destroy() {
    this.node.remove();
  }
}


