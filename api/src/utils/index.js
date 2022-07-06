const generatorCode = () => {
  let code = ''
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for(let i=0; i<16; i++){
    code += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return code
}

const generatorStatus = () => {
  let status = ''
  const possible = ["1", "2", "3"]

  for(let i=0; i<16; i++){
    status = possible[Math.floor(Math.random() * possible.length)]  
  }

  return status
}

const date = timestemp => {
  const date = new Date(timestemp)
  const year = date.getUTCFullYear()
  const month = `0${date.getUTCMonth() + 1}`.slice(-2)
  const day = `0${date.getUTCDate()}`.slice(-2)
  return {
    day,
    month,
    year,
    iso: `${day}-${month}-${year}`
  }
}

module.exports = {generatorCode, generatorStatus, date}