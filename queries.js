const Pool = require('pg').Pool
//change this one to your database username and password
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'abalatdb',
  password: '1234',
  port: 5432,
})