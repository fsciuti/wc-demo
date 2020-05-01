export default class ItemList extends HTMLElement {
  static get observedAttributes() {
    return ['items'];
  }

  styleRules = `
  /* Inheritable styles (background, color, font, line-height, etc.) continue to inherit in shadow DOM. */
  /* Use all: initial; to breaking the law! */

  /* Pseudo Classes :defined, :host, :host(), :host-context */
  /* Pseudo Elements ::part (only :focus and :hover Pseudo Classes) */

  /* Outside styles always win over styles defined in shadow DOM */
  :host {
    display: block;
    /* The new CSS Containment property limit the scope of the browser's styles, layout and paint work. */
    contain: content;
    border: 1px dashed #ddd;
    padding: 1rem;
    border-radius: var(--item-list-radius, .25rem);
  }
  :host([hidden]) {
    display: none;
  }
  li:first-child {
    border-top-left-radius: var(--item-list-radius, .25rem);
    border-top-right-radius: var(--item-list-radius, .25rem);
  }
  li:last-child {
    margin-bottom: 0;
    border-bottom-right-radius: var(--item-list-radius, .25rem);
    border-bottom-left-radius: var(--item-list-radius, .25rem);
  }
  p {
    color: orange;
  }
  /* only first level */
  ::slotted(.alert) {
    font-weight: bold;
  }
  `;

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `<style>${this.styleRules}</style>`;
    this.ul = document.createElement('ul');
    this.ul.setAttribute('part', 'list');
    this.ul.className = 'item-list list-group';

    this.beforeBoxSlot = document.createElement('slot');
    this.beforeBoxSlot.setAttribute('name', 'beforeBox');
    this.beforeBoxSlot.innerHTML = '<p>Default Before Text from Shadow DOM</p>';

    this.afterBoxSlot = document.createElement('slot');
    this.afterBoxSlot.setAttribute('name', 'afterBox');
    this.afterBoxSlot.innerHTML = '<p>Default After Text from Shadow DOM</p>';

    shadowRoot.appendChild(this.beforeBoxSlot);
    shadowRoot.appendChild(this.ul);
    shadowRoot.appendChild(this.afterBoxSlot);
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
