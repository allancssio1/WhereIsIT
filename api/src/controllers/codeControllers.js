const codeModels = require('../models/code')
const { generatorCode, generatorStatus } = require('../utils')

module.exports = {
  create: async (req, res) => {
    try {
      const code = await generatorCode()
      const status = await generatorStatus()

      let params = {
        code: code,
        status: status
      }
      
      if (status === '1') {
        await codeModels.crateFirstStatus(params)
      }
      else if (status === '2') {
        await codeModels.crateSecondyStatus(params)
      }
      else if (status === '3') {
        await codeModels.crateStatusConclued(params)
      }
      
      return res.status(200).json({
        success: true,
        code: 200,
        data: {code, status},
        message: 'Success create code.',
      })
    } catch (error) {
      return res.status(400).json({
        success: false,
        code: 400,
        message: 'Error in creation code on Database',
        data: {}
      })
    }
    
  },
  findCode: async (req, res) => {
    const {code} = req.body

    const response = await codeModels.findCode(code)

    return res.status(200).json({
      success: true,
      code: 200,
      data: response.rows[0],
      message: 'Code found with success.',
    })
  }
}