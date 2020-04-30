const getCount = (items) => {
  return items.length === 1 ? '1 Item' : `${items.length} Items`;
};

export default (target, { items = [] }) => {
  const cloneTarget = target.cloneNode(true);
  cloneTarget.textContent = getCount(items);
  return cloneTarget;
};
