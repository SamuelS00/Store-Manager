const app = require('./app');
require('dotenv').config();

app.listen(process.env.PORT || 3000, () => {
  console.log(`listening at the door ${process.env.PORT || 3000}`);
});
