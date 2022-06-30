const express = require('express');
const bodyParser = require('body-parser');
const ProductRouter = require('./routes/productRouter');
const ErrorMiddleware = require('./middlewares/ErrorMiddleware');

const app = express(); 
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', ProductRouter);

app.use(ErrorMiddleware);
// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;