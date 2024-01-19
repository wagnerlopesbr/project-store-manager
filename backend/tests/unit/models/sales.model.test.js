const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../src/models/connection');
const salesModel = require('../../../src/models/sales.model');
const { salesDB, salesDBbyId, insertDB } = require('../mocks/sales.mock');

describe('TESTING MODELS LAYER: sales.model.js', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('should return an array of sales', async function () {
    sinon.stub(connection, 'execute').resolves([salesDB]);
    const response = await salesModel.findAll();
    expect(response).to.be.an('array');
    expect(response).to.be.deep.equal(salesDB);
  });

  it('should return a sale by id', async function () {
    sinon.stub(connection, 'execute').resolves([[salesDBbyId]]);
    const response = await salesModel.findById(1);
    expect(response).to.be.an('array');
    expect(response).to.be.deep.equal([salesDBbyId]);
  });

  it('should insert a sale', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: insertDB }]);
    const response = await salesModel.insert({
      id: 5,
      itemsSold: [
        { productId: 1, quantity: 5 },
        { productId: 2, quantity: 5 },
      ],
    });
    expect(response).to.be.an('object');
    expect(response).to.be.deep.equal(insertDB);
  });
});