const Pool = require('pg').Pool
//change this one to your database username and password
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'abalatdb',
  password: 'superuser',
  port: 5432,
})