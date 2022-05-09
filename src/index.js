import createHead from './js/Header.js';
import createTextarea from './js/Textarea.js';
import createKeyboard from './js/KeyBoard.js';
import createFooter from './js/Footer';
import changeСase from './js/changeCase.js';
import changeLanguage from './js/changeLanguage.js';
import style from './css/style.css';

createHead();
const text = createTextarea();
createKeyboard(text);
createFooter();
changeСase();
changeLanguage();

