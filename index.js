const express = require('express');
const pool= require('./queries');
//const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', async(req, res) => {
    // response.json({ info: 'Node.js, Express, and Postgres API' })
    // console.log("Get working");
    try{
      const users= await pool.query("SELECT * FROM users");
      res.json(users.rows);

    }catch(err){
      console.error(err.message);
    }

});

//app to listen on port set
app.listen(port, () => {
    console.log(`App running on port ${port}.`);
  })