export const FILTER_ITEM = 'FILTER_ITEM';

export default class ItemFilter extends HTMLElement {
  constructor() {
    super();
    this.input = document.createElement('input');
    this.input.setAttribute('type', 'text');
    this.input.className = 'form-control';
    this.input.addEventListener('input', this.onFilter.bind(this));
    this.appendChild(this.input);
  }

  onFilter() {
    const { value } = this.input;
    const event = new CustomEvent(FILTER_ITEM, {
      detail: {
        filter: value,
      },
    });
    this.dispatchEvent(event);
  }
}
