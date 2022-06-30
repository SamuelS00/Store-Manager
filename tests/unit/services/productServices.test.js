const sinon = require('sinon');
const { expect } = require('chai');

const ProductServices = require('../../../services/productServices');
const ProductModels = require('../../../models/productModels');

const { mockProductsGetAll, mockProductGetById } = require('../mocks/mocksProducts');

describe('( service layer )', () => {
  describe('#method getAll', () => {
    before(async () => {
      const query = mockProductsGetAll;
      sinon.stub(ProductModels, 'getAll').resolves(query);
    });

    after(async () => {
      ProductModels.getAll.restore();
    });

    describe('when all products are returned', () => {
      it('tests if the return is an object', async () => {
        const response = await ProductServices.getAll();
        expect(response[0]).to.be.a('object');
      });

      it('tests if o return has the name of the inserted product', async () => {
        const response = await ProductServices.getAll();
        expect(response[0]).to.be.a.property('name');
      });

      it('tests if o return has the id of the inserted product', async () => {
        const response = await ProductServices.getAll();
        expect(response[0]).to.be.a.property('id');
      });
    });
  });

  describe('#method getById', () => {
    before(async () => {
      const query = mockProductGetById;
      sinon.stub(ProductModels, 'getById').resolves(query);
    });

    after(async () => {
      ProductModels.getById.restore();
    });

    describe('when only products by id are returned', () => {
      it('tests if the return is an object', async () => {
        const response = await ProductServices.getById(3);
        expect(response[0]).to.be.a('object');
      });

      it('tests if o return has the name of the inserted product', async () => {
        const response = await ProductServices.getById(3);
        expect(response[0]).to.be.a.property('name');
      });

      it('tests if o return has the id of the inserted product', async () => {
        const response = await ProductServices.getById(3);
        expect(response[0]).to.be.a.property('id');
      });
    });
  });
});