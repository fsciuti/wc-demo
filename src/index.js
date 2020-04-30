import FakeData from './fake-data';

import ComponentRegistry from './core/component-registry';

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

ComponentRegistry.register([
  { tagName: 'item-header', component: ItemHeader },
  { tagName: 'item-filter', component: ItemFilter },
  { tagName: 'item-counter', component: ItemCounter },
  { tagName: 'item-list', component: ItemList },
  { tagName: 'item-button', component: ItemButton },
]);
