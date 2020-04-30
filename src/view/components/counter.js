export default class ItemCounter extends HTMLElement {
  static get observedAttributes() {
    return ['items'];
  }

  constructor() {
    super();
    this.p = document.createElement('p');
    this.p.className = 'item-counter alert alert-primary';
    this.appendChild(this.p);
  }

  get items() {
    if (!this.hasAttribute('items')) {
      return [];
    }
    return JSON.parse(this.getAttribute('items'));
  }

  set items(value) {
    this.setAttribute('items', JSON.stringify(value));
  }

  attributeChangedCallback() {
    this.p.innerHTML = this.items.length === 1 ? '1 Item' : `${this.items.length} Items`;
  }
}
