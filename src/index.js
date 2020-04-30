import FakeData from './fake-data';
import render from './view/render';

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

document.querySelector('[data-component=item-add]').addEventListener('click', () => {
  state.items.push(FakeData.getItem());
  renderNewState({ ...state });
});

renderNewState({ ...state });
