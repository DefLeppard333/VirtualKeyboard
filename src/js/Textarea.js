import Control from './Control.js';

class Textarea extends Control {
  constructor(parent) {
    super(parent, 'textarea', 'text__area');
  }
}

const createTextarea = () => new Textarea(document.body);

export default createTextarea;
