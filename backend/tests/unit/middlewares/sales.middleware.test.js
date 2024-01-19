const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { validateInsert } = require('../../../src/middlewares/sales.middleware');

chai.use(sinonChai);
const { expect } = chai;

describe('TESTING SALES MIDDLEWARE: sales.middleware.js', function () {
  let req;
  let res;
  let next;

  beforeEach(function () {
    req = {
      body: [
        { productId: 'p1', quantity: 2 },
        { productId: 'p2', quantity: 3 },
      ],
    };
    res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };
    next = sinon.spy();
  });

  it('should return a 422 response if quantity is less than or equal to 0', function () {
    req.body[0].quantity = 0;
    validateInsert(req, res, next);
    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({ message: '"quantity" must be greater than or equal to 1' });
  });
});
