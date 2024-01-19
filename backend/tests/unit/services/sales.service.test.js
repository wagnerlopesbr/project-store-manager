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
});