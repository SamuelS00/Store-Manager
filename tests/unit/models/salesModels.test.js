const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../models/connection');
const SaleModels = require('../.././../models/saleModels');

const { mockSalesGetAll, mockSaleGetById } = require('../mocks/mocksSales');

describe('( model layer - sale )', () => {
  describe('#method getAll', () => {
    describe('when all sales are returned', () => {
      before(async () => {
        const query = [mockSalesGetAll];
        sinon.stub(connection, 'execute').resolves(query);
      });

      after(async () => {
        connection.execute.restore();
      });

      it('tests if the return is an object', async () => {
        const response = await SaleModels.getAll();
        expect(response[0]).to.be.a('object');
      });

      it('test if the return has the date of sale', async () => {
        const response = await SaleModels.getAll();
        expect(response[0]).to.be.a.property('date');
      });

      it('test if the return has the quantity of sale', async () => {
        const response = await SaleModels.getAll();
        expect(response[0]).to.be.a.property('quantity');
      });

      it('test if the return has the productId of sale', async () => {
        const response = await SaleModels.getAll();
        expect(response[0]).to.be.a.property('productId');
      });

      it('test if the return has the saleId of sale', async () => {
        const response = await SaleModels.getAll();
        expect(response[0]).to.be.a.property('saleId');
      });
    });
  });

  describe('#method getById', () => {
    describe('when sale by id is returned', () => {
      before(async () => {
        const query = [mockSaleGetById];
        sinon.stub(connection, 'execute').resolves(query);
      });

      after(async () => {
        connection.execute.restore();
      });

      it('tests if the return is an object', async () => {
        const response = await SaleModels.getById(2);
        expect(response[0]).to.be.a('object');
      });

      it('test if the return has the date of sale', async () => {
        const response = await SaleModels.getById(2);
        expect(response[0]).to.be.a.property('date');
      });

      it('test if the return has the quantity of sale', async () => {
        const response = await SaleModels.getById(2);
        expect(response[0]).to.be.a.property('quantity');
      });

      it('test if the return has the productId of sale', async () => {
        const response = await SaleModels.getById(2);
        expect(response[0]).to.be.a.property('productId');
      });

      it('test if the return has the saleId of sale', async () => {
        const response = await SaleModels.getById(2);
        expect(response[0]).to.be.a.property('sale_id');
      });
    });
  });
});