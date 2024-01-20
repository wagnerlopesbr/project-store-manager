const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { expect } = require('chai');

chai.use(sinonChai);
const productsService = require('../../../src/services/products.service');
const productsController = require('../../../src/controllers/products.controller');
const { productsDB, productsDBbyId, foundProduct, notFoundProduct, foundProducts } = require('../mocks/products.mock');

describe('TESTING CONTROLLERS LAYER: products.controller.js', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('should return the correct data from services layer', async function () {
    sinon.stub(productsService, 'findAll').resolves(foundProducts);
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productsController.findAll(undefined, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsDB);
  });

  it('should return the correct data based on id', async function () {
    sinon.stub(productsService, 'findById').resolves(foundProduct);
    const req = {
      params: {
        id: 1,
      },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productsController.findById(req, res);
    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsDBbyId);
  });

  it('should return an error message when trying a invalid id', async function () {
    sinon.stub(productsService, 'findById').resolves(notFoundProduct);
    const req = {
      params: {
        id: 'gabigol',
      },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productsController.findById(req, res);
    expect(res.status).to.be.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });

  it('should return the correct data when inserting a product', async function () {
    sinon.stub(productsService, 'insert').resolves(foundProduct);
    const req = {
      body: {
        name: 'Piano',
      },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productsController.insert(req, res);
    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsDBbyId);
  });

  it('should return the correct data when updating a product', async function () {
    sinon.stub(productsService, 'update').resolves(foundProduct);
    const req = {
      params: {
        id: 1,
      },
      body: {
        name: 'Piano',
      },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productsController.update(req, res);
    expect(res.status).to.be.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsDBbyId);
  });

  it('should remove a product', async function () {
    sinon.stub(productsService, 'remove').resolves({ status: 'NO_CONTENT', data: { message: 'Deleted or non existent' } });
    const req = {
      params: {
        id: 1,
      },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productsController.remove(req, res);
    expect(res.status).to.be.calledWith(204);
    expect(res.json).to.have.been.calledWith({ message: 'Deleted or non existent' });
  });
});