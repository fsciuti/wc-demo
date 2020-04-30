import ComponentRegistry from './core/component-registry';

import ItemPage from './view/pages/item-page';
import ItemHeader from './view/components/header';
import ItemFilter from './view/components/filter';
import ItemCounter from './view/components/counter';
import ItemList from './view/components/items';
import ItemButton from './view/components/button';


ComponentRegistry.register([
  { tagName: 'item-page', component: ItemPage },
  { tagName: 'item-header', component: ItemHeader },
  { tagName: 'item-filter', component: ItemFilter },
  { tagName: 'item-counter', component: ItemCounter },
  { tagName: 'item-list', component: ItemList },
  { tagName: 'item-button', component: ItemButton },
]);
