const sinon = require('sinon');
const { expect } = require('chai');

const SaleServices = require('../../../services/saleServices');
const SaleModels = require('../../../models/saleModels');

const { mockSalesGetAll, mockSaleGetById } = require('../mocks/mocksSales');

describe('( service layer )', () => {
  describe('#method getAll', () => {
    describe('when all sales are returned', () => {
      before(async () => {
        const query = mockSalesGetAll;
        sinon.stub(SaleModels, 'getAll').resolves(query);
      });

      after(async () => {
        SaleModels.getAll.restore();
      });

      it('tests if the return is an object', async () => {
        const response = await SaleServices.getAll();
        expect(response[0]).to.be.a('object');
      });

      it('test if the return has the date of sale', async () => {
        const response = await SaleServices.getAll();
        expect(response[0]).to.be.a.property('date');
      });

      it('test if the return has the quantity of sale', async () => {
        const response = await SaleServices.getAll();
        expect(response[0]).to.be.a.property('quantity');
      });

      it('test if the return has the productId of sale', async () => {
        const response = await SaleServices.getAll();
        expect(response[0]).to.be.a.property('productId');
      });

      it('test if the return has the saleId of sale', async () => {
        const response = await SaleServices.getAll();
        expect(response[0]).to.be.a.property('saleId');
      });
    });
  });

  describe('#method getById', () => {
    describe('when only sales by id are returned', () => {
      before(async () => {
        const query = mockSaleGetById;
        sinon.stub(SaleModels, 'getById').resolves(query);
      });

      after(async () => {
        SaleModels.getById.restore();
      });
      
      it('tests if the return is an object', async () => {
        const response = await SaleServices.getById(2);
        expect(response[0]).to.be.a('object');
      });

      it('test if the return has the date of sale', async () => {
        const response = await SaleServices.getById(2);
        expect(response[0]).to.be.a.property('date');
      });

      it('test if the return has the quantity of sale', async () => {
        const response = await SaleServices.getById(2);
        expect(response[0]).to.be.a.property('quantity');
      });

      it('test if the return has the productId of sale', async () => {
        const response = await SaleServices.getById(2);
        expect(response[0]).to.be.a.property('productId');
      });

      it('test if the return has the saleId of sale', async () => {
        const response = await SaleServices.getById(2);
        expect(response[0]).to.be.a.property('sale_id');
      });
    });
  });
});
