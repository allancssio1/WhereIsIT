const {Pool} = require('pg')

module.exports = new Pool({
  user: "allan",
  password: "al1991",
  host: "localhost",
  port: "5432",
  database: "whereisit"
})