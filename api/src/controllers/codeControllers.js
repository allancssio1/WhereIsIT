const codeModels = require('../models/code')
const { generatorCode, generatorStatus } = require('../utils')

module.exports = {
  create: async (req, res) => {
    const code = await generatorCode()
    const status = await generatorStatus()
    
    const params = {code, status}
    const responseDB = await codeModels.crateFirstStatus(params)

    if(!responseDB.success) {
      return res.status(400).json({
        success: false,
        code: 400,
        message: 'Error in creation code on Database',
        data: {}
      })
    }

    return res.status(200).json({
      success: true,
      code: 200,
      data: code,
      message: 'Success create code.',
    })
  },
  findCode: async (req, res) => {
    const {code} = req.body


    return res.status(200).json({
      success: true,
      code: 200,
      data: code,
      message: 'Code found with success.',
    })
  }
}