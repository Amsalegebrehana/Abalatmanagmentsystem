const express = require('express');
//const bodyParser = require('body-parser');
const app = express();


const port = 3000;

// app.use(bodyParser.json())
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// )
//route to look for a  get request
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

//app to listen on port set
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })