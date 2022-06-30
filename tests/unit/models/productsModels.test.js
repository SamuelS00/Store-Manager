const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../models/connection');
const ProductModel = require('../../../models/productModels');

const { mockProductsGetAll } = require('../mocks/modelsMocks');

describe('( model layer )', () => {
  describe('#method getAll', () => {
    before(async () => {
      const query = [mockProductsGetAll];
      sinon.stub(connection, "execute").resolves(query);
    });

    after(async () => {
      connection.execute.restore();
    });

    describe("When the product is successfully created", () => {
      it("tests if the return is an object", async () => {
        const response = await ProductModel.getAll();
        expect(response[0]).to.be.a("object");
      });

      it("tests if o return has the name of the inserted product", async () => {
        const response = await ProductModel.getAll();
        expect(response[0]).to.be.a.property("name");
      });

      it("tests if o return has the id of the inserted product", async () => {
        const response = await ProductModel.getAll();
        expect(response[0]).to.be.a.property("id");
      });
    });
  });
});