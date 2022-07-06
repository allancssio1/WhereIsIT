const {Pool} = require('pg')

module.exports = new Pool({
  user: "postgres",
  host: "localhost",
  password: "postgres",
  database: "whereisit",
  port: "5432",
})