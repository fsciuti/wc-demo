const createItem = (item) => {
  const li = document.createElement('li');
  li.textContent = item;
  li.className = 'list-group-item';
  return li;
};

const createItemList = (target, { items = [] }) => {
  const cloneTarget = target.cloneNode(false);

  items.forEach((item) => {
    cloneTarget.appendChild(createItem(item));
  });

  return cloneTarget;
};

export { createItem, createItemList };
