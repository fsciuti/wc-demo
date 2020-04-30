export default class ItemHeader extends HTMLElement {
  static get observedAttributes() {
    return ['color', 'data-title'];
  }

  constructor() {
    super();
    this.div = document.createElement('div');
    this.div.innerHTML = `<h1>${this.title}</h1>`;
    this.style.color = this.color;
    this.appendChild(this.div);
  }

  get color() {
    return this.getAttribute('color') || 'black';
  }

  set color(value) {
    this.setAttribute('color', value);
  }

  get title() {
    return this.getAttribute('data-title') || 'WC-Demo'; // or this.dataset['...'];
  }

  set title(value) {
    this.setAttribute('data-title', value);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (!this.div) {
      return;
    }

    if (name === 'data-title') {
      this.div.innerHTML = `<h1>${newValue}</h1>`;
    }

    if (name === 'color') {
      this.div.style.color = newValue;
    }
  }
}
