const db = require('../config/db')

module.exports = {
  crateFirstStatus: ({code, status}) => {
    try{
      db.query(`
        INSERT INTO whereisit (code, create_at, status)
        VALUES ($1, $2, $3)
      `)
      const values = [
        code,
        date(Date.now()).iso,
        status
      ]

      db.query(query, values)

      return {
        success: true,
        code: 200,
        message: 'Success create code.',
      }
    } catch(error) {
      return {
        success: false,
        code: 400,
        message: 'Error in creation code on Database',
      }
    }
  },
  crateSecondyStatus: ({code, status}) => {
    try{
      db.query(`
        INSERT INTO whereisit (code, create_at, send_at, status)
        VALUES ($1, $2, $3, $4)
      `)
      const values = [
        code,
        date(Date.now()-1000).iso,
        date(Date.now()).iso,
        status
      ]

      db.query(query, values)

      return {
        success: true,
        code: 200,
        message: 'Success create code.',
      }
    } catch(error) {
      return {
        success: false,
        code: 400,
        message: 'Error in creation code on Database',
      }
    }
  },
  crateStatusConclued: ({code, status}) => {
    try{
      db.query(`
        INSERT INTO whereisit (code, create_at, send_at, finish_at, status)
        VALUES ($1, $2, $3, $4, $5)
      `)
      const values = [
        code,
        date(Date.now()-5000).iso,
        date(Date.now()-1000).iso,
        date(Date.now()).iso,
        status
      ]

      db.query(query, values)

      return {
        success: true,
        code: 200,
        message: 'Success create code.',
      }
    } catch(error) {
      return {
        success: false,
        code: 400,
        message: 'Error in creation code on Database',
      }
    }
  }
}