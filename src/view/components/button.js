export const ADD_ITEM = 'ADD_ITEM';

export default class ItemButton extends HTMLElement {
  constructor() {
    super();
    this.button = document.createElement('button');
    this.button.textContent = 'Aggiungi';
    this.button.className = 'btn btn-primary';
    this.addEventListener('click', this.onClick);
    this.appendChild(this.button);
  }

  onClick() {
    const event = new CustomEvent(ADD_ITEM);
    this.dispatchEvent(event);
  }
}
