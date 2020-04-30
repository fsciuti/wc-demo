import FakeData from './fake-data';

import ItemHeader from './view/components/header';
import ItemFilter, { FILTER_ITEM } from './view/components/filter';
import ItemCounter from './view/components/counter';
import ItemList from './view/components/items';
import ItemButton, { ADD_ITEM } from './view/components/button';

const state = {
  items: FakeData.getItems(),
};

const renderNewState = newState => {
  window.requestAnimationFrame(() => {
    document.querySelector('item-counter').items = newState.items;
    document.querySelector('item-list').items = newState.items;
  });
};

renderNewState({ ...state });

document.querySelector('item-filter').addEventListener(FILTER_ITEM, (evt) => {
  const filteredItems = state.items.filter((item) => {
    return item.toLowerCase().indexOf(evt.detail.filter.toLowerCase()) >= 0;
  });
  renderNewState({ ...state, items: filteredItems });
});

document.querySelector('item-button').addEventListener(ADD_ITEM, () => {
  state.items.push(FakeData.getItem());
  renderNewState({ ...state });
});

window.customElements.define('item-header', ItemHeader);
window.customElements.define('item-filter', ItemFilter);
window.customElements.define('item-counter', ItemCounter);
window.customElements.define('item-list', ItemList);
window.customElements.define('item-button', ItemButton);
