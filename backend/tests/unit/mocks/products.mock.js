const productsDB = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do CapitÃ£o AmÃ©rica',
  },
];

const productsDBbyId = {
  id: 1,
  name: 'Martelo de Thor',
};

const foundProducts = {
  status: 'SUCCESS',
  data: productsDB,
};

const foundProduct = {
  status: 'SUCCESS',
  data: productsDBbyId,
};

const notFoundProduct = {
  status: 'NOT_FOUND',
  data: { message: 'Product not found' },
};

const insertDB = {
  id: 4,
  name: 'Piano',
};

const insertedProduct = {
  status: 'CREATED',
  data: insertDB,
};

module.exports = {
  productsDB,
  productsDBbyId,
  foundProduct,
  notFoundProduct,
  foundProducts,
  insertDB,
  insertedProduct,
};