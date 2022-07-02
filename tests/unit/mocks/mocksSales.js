const mockSalesGetAll = [
  {
    date: "2022-07-02T02:51:51.000Z",
    quantity: 5,
    saleId: 1,
    productId: 1,
  },
  {
    date: "2022-07-02T02:51:51.000Z",
    quantity: 10,
    saleId: 1,
    productId: 2,
  },
  {
    date: "2022-07-02T02:51:51.000Z",
    quantity: 15,
    saleId: 2,
    productId: 3,
  },
];

const mockSaleGetById = [
  {
    sale_id: 2,
    date: "2022-07-02T14:06:38.000Z",
    quantity: 15,
    productId: 3,
  },
];

module.exports = { mockSalesGetAll, mockSaleGetById };
