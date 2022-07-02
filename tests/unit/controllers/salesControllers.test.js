const sinon = require('sinon');
const { expect } = require('chai');

const saleControllers = require('../../../controllers/saleControllers');
const saleServices = require('../../../services/saleServices');

const { mockSaleGetById, mockSalesGetAll } = require('../mocks/mocksSales')

const httpsStatusCode = require('../../../helpers/httpStatusCode');

describe('( controller layer - sale )', () => {
  describe('#method getAll', () => {
    describe('when all sales are returned', () => {
      const req = {};
      const res = {};

      before(async () => {
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        sinon.stub(saleServices, 'getAll').resolves(mockSalesGetAll);
      });

      after(async () => {
        saleServices.getAll.restore();
      });

      it('tests if it is called with status 200', async () => {
        await saleControllers.getAll(req, res);

        expect(res.status.calledWith(httpsStatusCode.OK)).to.be.equal(true);
      });

      it('test if json is called with sales', async () => {
        await saleControllers.getAll(req, res);

        expect(res.json.calledWith(mockSalesGetAll)).to.be.equal(true);
      });
    })
  });

  describe('#method getById', () => {
    describe('when only sales by id are returned', () => {
      const req = {};
      const res = {};

      before(async () => {
        req.params = { id: 3 };

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        sinon.stub(saleServices, 'getById').resolves(mockSaleGetById);
      });

      after(async () => {
        saleServices.getById.restore();
      });

      it('tests if it is called with status 200', async () => {
        await saleControllers.getById(req, res);

        expect(res.status.calledWith(httpsStatusCode.OK)).to.be.equal(true);
      });

      it('test if json is called with sales', async () => {
        await saleControllers.getById(req, res);

        expect(res.json.calledWith(mockSaleGetById)).to.be.equal(true);
      });
    });
  });
});
