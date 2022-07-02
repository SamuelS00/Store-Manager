const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../models/connection');
const ProductModel = require('../../../models/productModels');

const { mockProductsGetAll, mockProductGetById } = require('../mocks/mocksProducts');

describe('( model layer )', () => {
  describe('#method getAll', () => {
    describe('when all products are returned', () => {
      before(async () => {
        const query = [mockProductsGetAll];
        sinon.stub(connection, "execute").resolves(query);
      });

      after(async () => {
        connection.execute.restore();
      });

      it('tests if the return is an object', async () => {
        const response = await ProductModel.getAll(); // arrumar.
        expect(response[0]).to.be.a('object');
      });

      it('tests if o return has the name of the inserted product', async () => {
        const response = await ProductModel.getAll();
        expect(response[0]).to.be.a.property('name');
      });

      it('tests if o return has the id of the inserted product', async () => {
        const response = await ProductModel.getAll();
        expect(response[0]).to.be.a.property('id');
      });
    });
  });

  describe('#method getById', () => {
    describe('when only products by id are returned', () => {
      before(async () => {
        const query = [mockProductGetById];
        sinon.stub(connection, 'execute').resolves(query);
      });

      after(async () => {
        connection.execute.restore();
      });
      it('tests if the return is an object', async () => {
        const response = await ProductModel.getById(3);
        expect(response).to.be.a('object');
      });

      it('tests if o return has the name of the inserted product', async () => {
        const response = await ProductModel.getById(3);
        expect(response).to.be.a.property('name');
      });

      it('tests if o return has the id of the inserted product', async () => {
        const response = await ProductModel.getById(3);
        expect(response).to.be.a.property('id');
      });
    });
  });
});