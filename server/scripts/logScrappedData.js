const fs = require('fs')
const _ = require('lodash')

const directory = `${__dirname}/../../scrappedData.json`

module.exports = (scrappedData) => {
  // read
  let logData = JSON.parse(fs.readFileSync(directory))

  // write
  if (!_.some(logData, scrappedData)) {
    logData.push(scrappedData)
    fs.writeFileSync(directory, JSON.stringify(logData, null, 4))
    console.log('item added to the log file ')
  } else console.log('this item already exist in the log file')
}
