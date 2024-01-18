const sinon = require('sinon');
const { expect } = require('chai');
const productsService = require('../../../src/services/products.service');
const productsModel = require('../../../src/models/products.model');
const { productsDB, productsDBbyId} = require('../mocks/products.mock');

describe('TESTING SERVICES LAYER: products.service.js', function() {
  afterEach(function() {
    sinon.restore();
  })

  it('should return the correct data from models layer', async function() {
    sinon.stub(productsModel, 'findAll').resolves(productsDB);
    const { status, data } = await productsService.findAll();
    expect(status).to.be.equal('SUCCESS');
    expect(data).to.be.deep.equal(productsDB);
  });

  it('should return a product by id', async function() {
    sinon.stub(productsModel, 'findById').resolves(productsDBbyId);
    const { status, data } = await productsService.findById(1);
    expect(status).to.be.equal('SUCCESS');
    expect(data).to.be.deep.equal(productsDBbyId);
  });

  it('should return NOT_FOUND when trying a invalid id', async function() {
    sinon.stub(productsModel, 'findById').resolves(null);
    const { status, data } = await productsService.findById(null);
    expect(status).to.be.equal('NOT_FOUND');
  });
});