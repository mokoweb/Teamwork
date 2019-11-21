
var conString = "postgres://zocticbk:pY8pkBxWOonINK1IOrFDd_cugezoptyl@hansken.db.elephantsql.com:5432/zocticbk" //Can be found in the Details page
const { Pool, Client } = require('pg')
const pool = new Pool({
  connectionString: conString,
})
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})
const client = new Client({
  connectionString: conString,
})
client.connect()
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})