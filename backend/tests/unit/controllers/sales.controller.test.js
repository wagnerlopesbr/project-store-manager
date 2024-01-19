const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { expect } = require('chai');

chai.use(sinonChai);
const salesService = require('../../../src/services/sales.service');
const salesController = require('../../../src/controllers/sales.controller');
const { salesDB, salesDBbyId, foundSale, notFoundSale, foundSales } = require('../mocks/sales.mock');

describe('TESTING CONTROLLERS LAYER: sales.controller.js', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('should return the correct data from services layer', async function () {
    sinon.stub(salesService, 'findAll').resolves(foundSales);
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await salesController.findAll(undefined, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(salesDB);
  });

  it('should return the correct data based on id', async function () {
    sinon.stub(salesService, 'findById').resolves(foundSale);
    const req = {
      params: {
        id: 1,
      },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await salesController.findById(req, res);
    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.have.been.calledWith(salesDBbyId);
  });

  it('should return an error message when trying a invalid id', async function () {
    sinon.stub(salesService, 'findById').resolves(notFoundSale);
    const req = {
      params: {
        id: 'gabigol',
      },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await salesController.findById(req, res);
    expect(res.status).to.be.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Sale not found' });
  });
});