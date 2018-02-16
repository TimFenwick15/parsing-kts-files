const fs = require('fs')
function parseKTSFile() {
    const newline = '\r\n'
    const ktsFile = fs.readFileSync('SampleDetailedMatches.csv', 'utf8')
    const splitKTSFile = ktsFile.split(newline)
    console.log(splitKTSFile)
}
parseKTSFile()
