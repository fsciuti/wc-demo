import FakeData from '../../fake-data';

import { FILTER_ITEM } from '../components/filter';
import { ADD_ITEM } from '../components/button';

const state = {
  items: FakeData.getItems(),
};

const template = `
  <item-header data-title="Item Page"></item-header>
  <hr>
  <item-filter></item-filter>
  <hr>
  <item-counter></item-counter>
  <hr>
  <item-list></item-list>
  <hr>
  <item-button></item-button>
`;

export default class ItemPage extends HTMLElement {
  constructor() {
    super();
    const tmpl = document.createElement('template');
    tmpl.innerHTML = template;
    const elem = document.createElement('div');
    elem.append(tmpl.content.cloneNode(true));
    this.appendChild(elem);
  }

  connectedCallback() {
    this.render({ ...state });

    Promise.all([
      customElements.whenDefined('item-filter'),
      customElements.whenDefined('item-button'),
    ]).then(() => {
      this.querySelector('item-filter').addEventListener(FILTER_ITEM, (e) => {
        const filteredItems = state.items.filter((item) => {
          return item.toLowerCase().indexOf(e.detail.filter.toLowerCase()) >= 0;
        });
        this.render({ items: filteredItems });
      });

      this.querySelector('item-button').addEventListener(ADD_ITEM, () => {
        state.items.push(FakeData.getItem());
        this.render({ ...state });
      });
    });
  }

  render(newState) {
    window.requestAnimationFrame(() => {
      this.querySelector('item-list').items = newState.items;
      this.querySelector('item-counter').items = newState.items;
    });
  }
}
