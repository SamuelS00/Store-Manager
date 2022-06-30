const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../models/connection');
const ProductModel = require('../../../models/productModels');

const { mockProductsGetAll } = require('../mocks/modelsMocks');

describe('( model layer ) - method getall ', () => {
  before(async () => {
    const query = mockProductsGetAll;
    sinon.stub(connection, 'execute').resolves(query);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('When the product is successfully created', () => {
    it('tests if the return is an object', async () => {
      const response = await ProductModel.getAll();

      expect(response).to.be.a('object');
    });
  });
});