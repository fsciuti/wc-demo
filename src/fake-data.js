import faker from 'faker';

function getItem() {
  return faker.name.findName();
}

function getItems() {
  const n = faker.random.number({ min: 2, max: 5 });
  return Array.from({ length: n }, () => getItem());
}

export default { getItem, getItems };
