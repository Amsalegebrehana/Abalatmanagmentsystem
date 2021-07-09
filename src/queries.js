const Pool = require('pg').Pool;
//change this one to your database username and password
const pool = new Pool({
  user: 'postgres',
  password: 'superuser',
  database: 'abalatdb',
  host: 'localhost',
  port: 5432
});

module.exports=pool;