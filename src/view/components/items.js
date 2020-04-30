export default class ItemList extends HTMLElement {
  static get observedAttributes() {
    return ['items'];
  }

  constructor() {
    super();
    this.ul = document.createElement('ul');
    this.ul.className = 'item-list list-group';
    this.appendChild(this.ul);
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
    const items = this.items.reduce((str, item) => {
      return `
        ${str}
        <li class="list-group-item">
          ${item}
        </li>`;
    }, '');
    this.querySelector('ul').innerHTML = items;
  }
}
