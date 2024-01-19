const sinon = require('sinon');
const { expect } = require('chai');
const salesService = require('../../../src/services/sales.service');
const salesModel = require('../../../src/models/sales.model');
const { salesDB, salesDBbyId } = require('../mocks/sales.mock');

describe('TESTING SERVICES LAYER: sales.service.js', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('should return the correct data from models layer', async function () {
    sinon.stub(salesModel, 'findAll').resolves(salesDB);
    const { status, data } = await salesService.findAll();
    expect(status).to.be.equal('SUCCESS');
    expect(data).to.be.deep.equal(salesDB);
  });

  it('should return a sale by id', async function () {
    sinon.stub(salesModel, 'findById').resolves(salesDBbyId);
    const { status, data } = await salesService.findById(1);
    expect(status).to.be.equal('SUCCESS');
    expect(data).to.be.deep.equal(salesDBbyId);
  });

  it('should return NOT_FOUND when trying a invalid id', async function () {
    sinon.stub(salesModel, 'findById').resolves(null);
    const { status } = await salesService.findById(null);
    expect(status).to.be.equal('NOT_FOUND');
  });

  it('should insert a sale', async function () {
    sinon.stub(salesModel, 'insert').resolves(5);
    const testData = [
      { productId: 1, quantity: 5 },
      { productId: 2, quantity: 5 },
    ];
    const { status, data } = await salesService.insert(testData);
    expect(status).to.be.equal('CREATED');
    expect(data).to.be.deep.equal({ id: 5, itemsSold: testData });
  });

  it('shouldnt insert a sale if product not found', async function () {
    sinon.stub(salesModel, 'insert').resolves(5);
    sinon.stub(salesService, 'ifProductsExists').resolves(false);
    const testData = [
      { productId: 24, quantity: 5 },
      { productId: 21, quantity: 5 },
    ];
    const { status } = await salesService.insert(testData);
    expect(status).to.be.equal('NOT_FOUND');
  });
});