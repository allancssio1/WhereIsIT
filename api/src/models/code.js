const db = require('../config/db')
const { date } = require('../utils')

module.exports = {
  crateFirstStatus: async ({code, status}) => {
    try {
      console.log(status)
      const query = `
        INSERT INTO code (code, status, create_at)
        VALUES ($1, $2, $3)
        RETURNING id
      `
      const values = [
        code,
        status,
        date(Date.now()).iso,
      ]
      await db.query(query, values)
      return
    } catch (error) {      
      console.error("errer 2 ->", error)
      return
    }
  },
  crateSecondyStatus: async ({code, status}) => {
    try {
      console.log(status)
      const query = `
        INSERT INTO code (code, status, create_at, send_at )
        VALUES ($1, $2, $3, $4)
        RETURNING id
      `
      const values = [
        code,
        status,
        date(Date.now()).iso,
        date(Date.now()).iso,
      ]

      console.log(values)
      console.log("2222")
      await db.query(query, values)
      return
    } catch (error) {      
      console.error("errer 2 ->", error)
      return
    }
  },
  crateStatusConclued: async ({code, status}) => {
    try {
      console.log(status)
      const query = `
          INSERT INTO code (code, status, create_at, send_at, finish_at)
          VALUES ($1, $2, $3, $4, $5)
          RETURNING id
        `
      const values = [
        code,
        status,
        date(Date.now()).iso,
        date(Date.now()).iso,
        date(Date.now()).iso,
      ]

      console.log(values)
      console.log("3333")
      await db.query(query, values)
      return
    } catch (error) {      
      console.error("errer 3 ->", error)
      return
    }
  },
  findCode: async (code) => {
    console.log(code)
    try {
      return await db.query(`
        SELECT * FROM code WHERE code.code = $1
        `, [code])
    } catch (error) {      
      console.error("errer 3 ->", error)
      return
    }
  }
}