const salesDB = [
  {
    id: 1,
    date: '2024-01-12T20:33:12.000Z',
  },
  {
    id: 2,
    date: '2024-01-12T20:33:12.000Z',
  },
];

const salesDBbyId = {
  id: 1,
  date: '2024-01-12T20:33:12.000Z',
};

const foundSales = {
  status: 'SUCCESS',
  data: salesDB,
};

const foundSale = {
  status: 'SUCCESS',
  data: salesDBbyId,
};

const notFoundSale = {
  status: 'NOT_FOUND',
  data: { message: 'Sale not found' },
};

const insertDB = {
  id: 5,
  itemsSold: [
    { productId: 1, quantity: 5 },
    { productId: 2, quantity: 5 },
  ],
};

const insertedSales = {
  status: 'CREATED',
  data: insertDB,
};

module.exports = {
  salesDB,
  salesDBbyId,
  foundSale,
  notFoundSale,
  foundSales,
  insertDB,
  insertedSales,
};