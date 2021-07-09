const express = require('express');
//const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(require('./routes/index.routes'));

//app to listen on port set
app.listen(port, () => {
    console.log(`App running on port ${port}.`);
  });