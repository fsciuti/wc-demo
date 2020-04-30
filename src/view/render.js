import { createItemList } from './components/items';
import counter from './components/counter';

export default (target, state) => {
  const cloneTarget = target.cloneNode(true);

  const itemList = cloneTarget.querySelector('[data-component=item-list]');
  const itemCounter = cloneTarget.querySelector('[data-component=item-counter]');

  itemList.replaceWith(createItemList(itemList, state));
  itemCounter.replaceWith(counter(itemCounter, state));

  return cloneTarget;
};
