const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../src/models/connection');
const productsModel = require('../../../src/models/products.model');
const { productsDB, productsDBbyId, insertDB } = require('../mocks/products.mock');

describe('TESTING MODELS LAYER: products.model.js', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('should return an array of products', async function () {
    sinon.stub(connection, 'execute').resolves([productsDB]);
    const response = await productsModel.findAll();
    expect(response).to.be.an('array');
    expect(response).to.be.deep.equal(productsDB);
  });

  it('should return a product by id', async function () {
    sinon.stub(connection, 'execute').resolves([[productsDBbyId]]);
    const response = await productsModel.findById(1);
    expect(response).to.be.an('object');
    expect(response).to.be.deep.equal(productsDBbyId);
  });

  it('should insert a product', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: insertDB }]);
    const response = await productsModel.insert({ id: 4, name: 'Piano' });
    expect(response).to.be.an('object');
    expect(response).to.be.deep.equal(insertDB);
  });
});