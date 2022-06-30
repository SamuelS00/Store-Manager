const sinon = require('sinon');
const { expect } = require('chai');

const ProductControllers = require('../../../controllers/productControllers');
const ProductServices = require('../../../services/productServices');

const { mockProductsGetAll, mockProductGetById } = require('../mocks/mocksProducts');

const httpsStatusCode = require('../../../helpers/httpStatusCode');

describe.only('( controller layer )', () => {
  describe('#method getAll', () => {
    describe('when all products are returned', () => {
      const req = {};
      const res = {};

      before(() => {
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        sinon.stub(ProductServices, 'getAll').resolves(mockProductsGetAll);
      });

      after(() => {
        ProductServices.getAll.restore();
      });

      it('tests if it is called with status 200', async () => {
        await ProductControllers.getAll(req, res);

        expect(res.status.calledWith(httpsStatusCode.OK)).to.be.equal(true);
      });

      it('test if json is called with products', async () => {
        await ProductControllers.getAll(req, res);

        expect(res.json.calledWith(mockProductsGetAll)).to.be.equal(true);
      });
    });
  })

  describe('#method getById', () => {
    describe('when only products by id are returned', () => {
      const req = {};
      const res = {};

      before(() => {
        req.params = { id: 3 };

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        sinon.stub(ProductServices, 'getById').resolves(mockProductGetById);
      });

      after(() => {
        ProductServices.getById.restore();
      });
      
      it('tests if it is called with status 200', async () => {
        await ProductControllers.getById(req, res);

        expect(res.status.calledWith(httpsStatusCode.OK)).to.be.equal(true);
      });

      it('test if json is called with products', async () => {
        await ProductControllers.getById(req, res);

        expect(res.json.calledWith(mockProductGetById)).to.be.equal(true);
      });
    });
  });
});