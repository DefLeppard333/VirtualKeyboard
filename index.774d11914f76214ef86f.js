(()=>{"use strict";var __webpack_modules__={355:()=>{eval("\n;// CONCATENATED MODULE: ./js/Control.js\nclass Control {\n  constructor(parent, tag, className) {\n    this.element = document.createElement(tag);\n    this.element.className = className;\n    parent.append(this.element);\n  }\n\n  destroy() {\n    this.node.remove();\n  }\n}\n\n\n\n;// CONCATENATED MODULE: ./js/Header.js\n\n\nclass Header extends Control {\n  constructor(parent) {\n    super(parent, 'div', 'header');\n    this.titlle = new Control(this.element, 'h1', 'title');\n    this.titlle.element.textContent = 'RSS Виртуальная клавиатура';\n  }\n}\n\nconst createHead = () => new Header(document.body);\n\n/* harmony default export */ const js_Header = (createHead);\n\n;// CONCATENATED MODULE: ./js/Textarea.js\n\n\nclass Textarea extends Control {\n  constructor(parent) {\n    super(parent, 'textarea', 'text__area');\n  }\n}\n\nconst createTextarea = () => new Textarea(document.body);\n\n/* harmony default export */ const js_Textarea = (createTextarea);\n\n;// CONCATENATED MODULE: ./js/keyData.js\nconst keyData = [\n  [ // row 1\n    {\n      key: { ru: 'ё', en: '`' }, shift: { ru: 'Ё', en: '~' }, code: 'Backquote', class: 'key',\n    },\n    {\n      key: { ru: '1', en: '1' }, shift: { ru: '!', en: '!' }, code: 'Digit1', class: 'key',\n    },\n    {\n      key: { ru: '2', en: '2' }, shift: { ru: '\"', en: '@' }, code: 'Digit2', class: 'key',\n    },\n    {\n      key: { ru: '3', en: '3' }, shift: { ru: '№', en: '#' }, code: 'Digit3', class: 'key',\n    },\n    {\n      key: { ru: '4', en: '4' }, shift: { ru: ';', en: '$' }, code: 'Digit4', class: 'key',\n    },\n    {\n      key: { ru: '5', en: '5' }, shift: { ru: '%', en: '%' }, code: 'Digit5', class: 'key',\n    },\n    {\n      key: { ru: '6', en: '6' }, shift: { ru: ':', en: '^' }, code: 'Digit6', class: 'key',\n    },\n    {\n      key: { ru: '7', en: '7' }, shift: { ru: '?', en: '&' }, code: 'Digit7', class: 'key',\n    },\n    {\n      key: { ru: '8', en: '8' }, shift: { ru: '*', en: '*' }, code: 'Digit8', class: 'key',\n    },\n    {\n      key: { ru: '9', en: '9' }, shift: { ru: '(', en: '(' }, code: 'Digit9', class: 'key',\n    },\n    {\n      key: { ru: '0', en: '0' }, shift: { ru: ')', en: ')' }, code: 'Digit0', class: 'key',\n    },\n    {\n      key: { ru: '-', en: '-' }, shift: { ru: '_', en: '_' }, code: 'Minus', class: 'key',\n    },\n    {\n      key: { ru: '=', en: '=' }, shift: { ru: '+', en: '+' }, code: 'Equal', class: 'key',\n    },\n    {\n      key: { ru: 'Backspace', en: 'Backspace' }, code: 'Backspace', class: 'key key_backspace', noType: true,\n    },\n  ],\n  [ // row 2\n    {\n      key: { ru: 'Tab', en: 'Tab' }, code: 'Tab', class: 'key key_tab', noType: true,\n    },\n    {\n      key: { ru: 'й', en: 'q' }, shift: { ru: 'Й', en: 'Q' }, code: 'KeyQ', class: 'key',\n    },\n    {\n      key: { ru: 'ц', en: 'w' }, shift: { ru: 'Ц', en: 'W' }, code: 'KeyW', class: 'key',\n    },\n    {\n      key: { ru: 'у', en: 'e' }, shift: { ru: 'У', en: 'E' }, code: 'KeyE', class: 'key',\n    },\n    {\n      key: { ru: 'к', en: 'r' }, shift: { ru: 'К', en: 'R' }, code: 'KeyR', class: 'key',\n    },\n    {\n      key: { ru: 'е', en: 't' }, shift: { ru: 'Е', en: 'T' }, code: 'KeyT', class: 'key',\n    },\n    {\n      key: { ru: 'н', en: 'y' }, shift: { ru: 'Н', en: 'Y' }, code: 'KeyY', class: 'key',\n    },\n    {\n      key: { ru: 'г', en: 'u' }, shift: { ru: 'Г', en: 'U' }, code: 'KeyU', class: 'key',\n    },\n    {\n      key: { ru: 'ш', en: 'i' }, shift: { ru: 'Ш', en: 'I' }, code: 'KeyI', class: 'key',\n    },\n    {\n      key: { ru: 'щ', en: 'o' }, shift: { ru: 'Щ', en: 'O' }, code: 'KeyO', class: 'key',\n    },\n    {\n      key: { ru: 'з', en: 'p' }, shift: { ru: 'З', en: 'P' }, code: 'KeyP', class: 'key',\n    },\n    {\n      key: { ru: 'х', en: '[' }, shift: { ru: 'Х', en: '{' }, code: 'BracketLeft', class: 'key',\n    },\n    {\n      key: { ru: 'ъ', en: ']' }, shift: { ru: 'Ъ', en: '}' }, code: 'BracketRight', class: 'key',\n    },\n    {\n      key: { ru: '\\\\', en: '\\\\' }, shift: { ru: '|', en: '|' }, code: 'Backslash', class: 'key key_backslash',\n    },\n    {\n      key: { ru: 'Del', en: 'Del' }, code: 'Delete', class: 'key key_del',\n    },\n  ],\n  [ // row 3\n    {\n      key: { ru: 'CapsLk', en: 'CapsLk' }, code: 'CapsLock', class: 'key key_capslock', noType: true,\n    },\n    {\n      key: { ru: 'ф', en: 'a' }, shift: { ru: 'Ф', en: 'A' }, code: 'KeyA', class: 'key',\n    },\n    {\n      key: { ru: 'ы', en: 's' }, shift: { ru: 'Ы', en: 'S' }, code: 'KeyS', class: 'key',\n    },\n    {\n      key: { ru: 'в', en: 'd' }, shift: { ru: 'В', en: 'D' }, code: 'KeyD', class: 'key',\n    },\n    {\n      key: { ru: 'а', en: 'f' }, shift: { ru: 'А', en: 'F' }, code: 'KeyF', class: 'key',\n    },\n    {\n      key: { ru: 'п', en: 'g' }, shift: { ru: 'П', en: 'G' }, code: 'KeyG', class: 'key',\n    },\n    {\n      key: { ru: 'р', en: 'h' }, shift: { ru: 'Р', en: 'H' }, code: 'KeyH', class: 'key',\n    },\n    {\n      key: { ru: 'о', en: 'j' }, shift: { ru: 'О', en: 'J' }, code: 'KeyJ', class: 'key',\n    },\n    {\n      key: { ru: 'л', en: 'k' }, shift: { ru: 'Л', en: 'K' }, code: 'KeyK', class: 'key',\n    },\n    {\n      key: { ru: 'д', en: 'l' }, shift: { ru: 'Д', en: 'L' }, code: 'KeyL', class: 'key',\n    },\n    {\n      key: { ru: 'ж', en: ';' }, shift: { ru: 'Ж', en: ':' }, code: 'Semicolon', class: 'key',\n    },\n    {\n      key: { ru: 'э', en: '\\'' }, shift: { ru: 'Э', en: '\"' }, code: 'Quote', class: 'key',\n    },\n    {\n      key: { ru: 'Enter', en: 'Enter' }, code: 'Enter', class: 'key key_enter', noType: true,\n    },\n  ],\n  [ // row 4\n    {\n      key: { ru: 'Shift', en: 'Shift' }, code: 'ShiftLeft', class: 'key key_leftshift', noType: true,\n    },\n    {\n      key: { ru: 'я', en: 'z' }, shift: { ru: 'Я', en: 'Z' }, code: 'KeyZ', class: 'key',\n    },\n    {\n      key: { ru: 'ч', en: 'x' }, shift: { ru: 'Ч', en: 'X' }, code: 'KeyX', class: 'key',\n    },\n    {\n      key: { ru: 'с', en: 'c' }, shift: { ru: 'С', en: 'C' }, code: 'KeyC', class: 'key',\n    },\n    {\n      key: { ru: 'м', en: 'v' }, shift: { ru: 'М', en: 'V' }, code: 'KeyV', class: 'key',\n    },\n    {\n      key: { ru: 'и', en: 'b' }, shift: { ru: 'И', en: 'B' }, code: 'KeyB', class: 'key',\n    },\n    {\n      key: { ru: 'т', en: 'n' }, shift: { ru: 'Т', en: 'N' }, code: 'KeyN', class: 'key',\n    },\n    {\n      key: { ru: 'ь', en: 'm' }, shift: { ru: 'Ь', en: 'M' }, code: 'KeyM', class: 'key',\n    },\n    {\n      key: { ru: 'б', en: ',' }, shift: { ru: 'Б', en: '<' }, code: 'Comma', class: 'key',\n    },\n    {\n      key: { ru: 'ю', en: '.' }, shift: { ru: 'Ю', en: '>' }, code: 'Period', class: 'key',\n    },\n    {\n      key: { ru: '.', en: '/' }, shift: { ru: ',', en: '?' }, code: 'Slash', class: 'key',\n    },\n    {\n      key: { ru: '↑', en: '↑' }, code: 'ArrowUp', noType: true, class: 'key',\n    },\n    {\n      key: { ru: 'Shift', en: 'Shift' }, code: 'ShiftRight', class: 'key key_rightshift', noType: true,\n    },\n  ],\n  [\n    {\n      key: { ru: 'Cntrl', en: 'Cntrl' }, code: 'ControlLeft', class: 'key key_leftctrl', noType: true,\n    },\n    {\n      key: { ru: 'Win', en: 'Win' }, code: 'MetaLeft', class: 'key key_win', noType: true,\n    },\n    {\n      key: { ru: 'Alt', en: 'Alt' }, code: 'AltLeft', class: 'key key_leftalt', noType: true,\n    },\n    { key: { ru: ' ', en: ' ' }, code: 'Space', class: 'key key_space' },\n    {\n      key: { ru: 'Alt', en: 'Alt' }, code: 'AltRight', class: 'key key_rightalt', noType: true,\n    },\n    {\n      key: { ru: '←', en: '←' }, code: 'ArrowLeft', noType: true, class: 'key',\n    },\n    {\n      key: { ru: '↓', en: '↓' }, code: 'ArrowDown', noType: true, class: 'key',\n    },\n    {\n      key: { ru: '→', en: '→' }, code: 'ArrowRight', noType: true, class: 'key',\n    },\n    {\n      key: { ru: 'Cntrl', en: 'Cntrl' }, code: 'ControlRight', class: 'key key_rightctrl', noType: true,\n    },\n  ],\n];\n\n/* harmony default export */ const js_keyData = (keyData);\n\n;// CONCATENATED MODULE: ./js/KeyBoard.js\n\n\n\nclass KeyBoard extends Control {\n  constructor(parent, text) {\n    super(parent, 'div', 'keyboard');\n    this.textarea = text;\n\n    for (let i = 0; i < js_keyData.length; i += 1) {\n      this.row = new Control(this.element, 'div', 'row');\n\n      js_keyData[i].forEach((el) => {\n        const { element } = new Control(this.row.element, 'button', `${el.class}`);\n\n        element.textContent = `${el.key.en}`;\n\n        element.addEventListener('click', (event) => {\n          let cursor = this.textarea.element.selectionStart;\n          const str = this.textarea.element;\n          const strLeft = this.textarea.element.value.slice(0, cursor);\n          const strRight = this.textarea.element.value.slice(cursor);\n          const { textContent } = event.target;\n          this.textarea.element.focus();\n\n          if (textContent.length === 1) {\n            if (cursor === str.value.length) {\n              this.textarea.element.value += textContent;\n            } else {\n              cursor += 1;\n              this.textarea.element.value = `${strLeft}${textContent}${strRight}`;\n              str.setSelectionRange(cursor, cursor);\n            }\n          }\n          if (el.code === 'Enter') {\n            cursor += 1;\n            this.textarea.element.value = `${strLeft}\\n${strRight}`;\n            str.setSelectionRange(cursor, cursor);\n          }\n\n          if (el.code === 'Backspace') {\n            cursor -= 1;\n            this.textarea.element.value = `${strLeft.slice(0, -1)}${strRight}`;\n            str.setSelectionRange(cursor, cursor);\n          }\n\n          if (el.code === 'Delete') {\n            this.textarea.element.value = `${strLeft}${strRight.slice(1)}`;\n            str.setSelectionRange(cursor, cursor);\n          }\n\n          if (el.code === 'Tab') {\n            cursor += 4;\n            this.textarea.element.value = `${strLeft}    ${strRight}`;\n            str.setSelectionRange(cursor, cursor);\n          }\n        });\n        element.addEventListener('click', (event) => {\n          if (event.target.classList.contains('key_capslock')) {\n            element.classList.toggle('capslk');\n          }\n        });\n        element.addEventListener('click', (event) => {\n            if (event.target.classList.contains('key_leftshift')) {\n              element.classList.toggle('capslk');\n            }\n          });\n\n        document.addEventListener('keydown', (event) => {\n          let cursorTab = this.textarea.element.selectionStart;\n\n          const strTab = this.textarea.element;\n          const strLeftTab = this.textarea.element.value.slice(0, cursorTab);\n          const strRightTab = this.textarea.element.value.slice(cursorTab);\n          if (event.code === 'Tab' && el.code === 'Tab') {\n            event.preventDefault();\n            cursorTab += 4;\n            this.textarea.element.value = `${strLeftTab}    ${strRightTab}`;\n            strTab.setSelectionRange(cursorTab, cursorTab);\n          }\n        });\n\n        document.addEventListener('keydown', (event) => {\n          let cursorArrow = this.textarea.element.selectionStart;\n\n          const strArrow = this.textarea.element;\n          const strLeftArrow = this.textarea.element.value.slice(0, cursorArrow);\n          const strRightArrow = this.textarea.element.value.slice(cursorArrow);\n          if ((event.code === 'ArrowUp' && el.code === 'ArrowUp')\n             || (event.code === 'ArrowLeft' && el.code === 'ArrowLeft')\n             || (event.code === 'ArrowDown' && el.code === 'ArrowDown')\n             || (event.code === 'ArrowRight' && el.code === 'ArrowRight')) {\n            event.preventDefault();\n            cursorArrow += 1;\n\n            this.textarea.element.value = `${strLeftArrow}${element.textContent}${strRightArrow}`;\n            strArrow.setSelectionRange(cursorArrow, cursorArrow);\n          }\n        });\n\n        document.addEventListener('keydown', (event) => {\n          if (event.code === 'CapsLock' && el.code === 'CapsLock') {\n            element.classList.toggle('capslk');\n          }\n        });\n\n        document.addEventListener('keydown', (event) => {\n            if (event.code === 'ShiftLeft' && el.code === 'ShiftLeft') {\n              element.classList.add('capslk');\n            }\n          });\n          document.addEventListener('keyup', (event) => {\n            if (event.code === 'ShiftLeft' && el.code === 'ShiftLeft') {\n              element.classList.remove('capslk');\n            }\n          });\n\n        document.addEventListener('keydown', (event) => {\n          this.textarea.element.focus();\n          if (event.code === el.code) {\n            element.classList.add('active');\n          }\n        });\n        document.addEventListener('keyup', (event) => {\n          if (event.code === el.code) {\n            element.classList.remove('active');\n          }\n        });\n      });\n    }\n    \n  }\n  \n}\n\nconst createKeyboard = (text) => new KeyBoard(document.body, text);\n\n/* harmony default export */ const js_KeyBoard = (createKeyboard);\n\n;// CONCATENATED MODULE: ./js/Footer.js\n\r\n\r\nclass Footer extends Control {\r\n  constructor(parent) {\r\n    super(parent, 'div', 'footer');\r\n    this.subtitlle = new Control(this.element, 'h2', 'subtitlle');\r\n    this.subtitlle.element.textContent = 'Клавиатура создана в операционной системе Windows';\r\n    this.subtitlle_second = new Control(this.element, 'h3', 'subtitlle');\r\n    this.subtitlle_second.element.textContent = 'Для переключения языка комбинация: левыe ctrl + shift';\r\n  }\r\n}\r\n\r\nconst createFooter = () => new Footer(document.body);\r\n\r\n/* harmony default export */ const js_Footer = (createFooter);\r\n\r\n\r\n\r\n\r\n\r\n\n;// CONCATENATED MODULE: ./js/changeCase.js\n\nconst changeСase = () => {\n  const btnKeys = [...document.querySelectorAll('.key')];\n  const btnKey = document.querySelector('.keyboard');\n  const caps = document.querySelector('.key_capslock');\n  const shift = document.querySelector('.key_leftshift');\n\n  btnKey.addEventListener('click', () => {\n    btnKeys.forEach((el) => {\n      const elem = el;\n      if (elem.textContent.length === 1) {\n        if (caps.classList.contains('capslk')||shift.classList.contains('capslk')) {\n          elem.textContent = elem.textContent.toUpperCase();\n        } else {\n          elem.textContent = elem.textContent.toLowerCase();\n        }\n      }\n    });\n  });\n\n  document.addEventListener('keydown', () => {\n    btnKeys.forEach((el) => {\n      const elem = el;\n      if (elem.textContent.length === 1) {\n        if (caps.classList.contains('capslk')||shift.classList.contains('capslk')) {\n          elem.textContent = elem.textContent.toUpperCase();\n        } else {\n          elem.textContent = elem.textContent.toLowerCase();\n        }\n      }\n    });\n  });\n  document.addEventListener('keyup', () => {\n    btnKeys.forEach((el) => {\n      const elem = el;\n      if (elem.textContent.length === 1) {\n        if (shift.classList.contains('capslk')) {\n          elem.textContent = elem.textContent.toUpperCase();\n\n        } else {\n          elem.textContent = elem.textContent.toLowerCase();\n        }\n      }\n    });\n  });\n};\n/* harmony default export */ const changeCase = (changeСase);\n\n;// CONCATENATED MODULE: ./js/changeLanguage.js\n\r\n\r\nconst changeLanguage = () => {\r\n  const rows = [...document.querySelectorAll('.row')];\r\n  const caps = document.querySelector('.key_capslock');\r\n\r\n  let lang;\r\n\r\n  document.addEventListener('keydown', (e) => {\r\n    if (e.shiftKey && e.ctrlKey) {\r\n      if (lang) {\r\n        lang = false;\r\n      } else lang = true;\r\n      for (let i = 0; i < js_keyData.length; i += 1) {\r\n        for (let j = 0; j < rows[i].children.length; j += 1) {\r\n          if (lang === true) {\r\n            if (caps.classList.contains('capslk') && rows[i].children[j].textContent.length === 1) {\r\n              rows[i].children[j].textContent = js_keyData[i][j].key.ru.toUpperCase();\r\n            } else rows[i].children[j].textContent = js_keyData[i][j].key.ru;\r\n          }\r\n          if (lang === false) {\r\n            if (caps.classList.contains('capslk') && rows[i].children[j].textContent.length === 1) {\r\n              rows[i].children[j].textContent = js_keyData[i][j].key.en.toUpperCase();\r\n            } else rows[i].children[j].textContent = js_keyData[i][j].key.en;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const js_changeLanguage = (changeLanguage);\r\n\n;// CONCATENATED MODULE: ./index.js\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\njs_Header();\r\nconst index_text = js_Textarea();\r\njs_KeyBoard(index_text);\r\njs_Footer();\r\nchangeCase();\r\njs_changeLanguage();\r\n\r\n\n\n//# sourceURL=webpack:///./index.js_+_8_modules?")}},__webpack_exports__={};__webpack_modules__[355]()})();