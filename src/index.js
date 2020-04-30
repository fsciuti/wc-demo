import FakeData from './fake-data';
import render from './view/render';

import ItemHeader from './view/components/header';
import ItemButton, { ADD_ITEM } from './view/components/button';

const state = {
  items: FakeData.getItems(),
};

let app = document.querySelector('#app');


const renderNewState = newState => {
  window.requestAnimationFrame(() => {
    const cloneApp = render(app, newState);
    app.replaceWith(cloneApp);
    app = cloneApp;
  });
};

document.querySelector('[data-component=item-filter]').addEventListener('input', (evt) => {
  const filteredItems = state.items.filter((item) => {
    return item.toLowerCase().indexOf(evt.target.value.toLowerCase()) >= 0;
  });
  renderNewState({ ...state, items: filteredItems });
});

document.querySelector('item-button').addEventListener(ADD_ITEM, () => {
  state.items.push(FakeData.getItem());
  renderNewState({ ...state });
});

renderNewState({ ...state });

window.customElements.define('item-header', ItemHeader);
window.customElements.define('item-button', ItemButton);
