export default class ItemList extends HTMLElement {
  static get observedAttributes() {
    return ['items'];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
    <style>
      li:first-child {
        border-top-left-radius: var(--item-list-radius, .25rem);
        border-top-right-radius: var(--item-list-radius, .25rem);
      }
      li:last-child {
        margin-bottom: 0;
        border-bottom-right-radius: var(--item-list-radius, .25rem);
        border-bottom-left-radius: var(--item-list-radius, .25rem);
      }
    </style>`;
    this.ul = document.createElement('ul');
    this.ul.setAttribute('part', 'list');
    this.ul.className = 'item-list list-group';
    shadowRoot.appendChild(this.ul);
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
        <li part="list-item">
          ${item}
        </li>`;
    }, '');
    this.shadowRoot.querySelector('ul').innerHTML = items;
  }
}
