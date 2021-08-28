import { Prism } from './deps.js';

export class OceanPrism {
  handle(el) {
    if(el.localName === 'code' && el.parentNode && el.parentNode.localName === 'pre') {
      let match = this.codeBlockMatch(el);
      if(match) {
        let [,,lang] = match;
        this.highlight(el, lang);
        let langClass = `language-${lang}`;
        let pre = el.parentNode;
        if(!pre.classList.has(langClass)) {
          pre.classList.add(langClass);
        }
        if(el.classList.has(`lang-${lang}`)) {
          el.classList.remove(`lang-${lang}`);
          el.classList.add(langClass);
        }
      }
    }
  }

  codeBlockMatch(el) {
    let className = el.className;
    let match = /lang(uage)?-(.+)/.exec(className);
    if(match && Prism.languages[match[2]]) {
      return match;
    }
    return null;
  }

  highlight(el, lang) {
    let grammar = Prism.languages[lang];
    let code = el.textContent;
    let rendered = Prism.highlight(code, grammar, lang);
    el.textContent = rendered;
  }

  static createInstance() {
    return new OceanPrism();
  }
}