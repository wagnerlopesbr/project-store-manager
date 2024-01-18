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

module.exports = {
  productsDB,
  productsDBbyId,
  foundProduct,
  notFoundProduct,
  foundProducts,
};