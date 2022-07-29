const random = require("random")
const b58strSet = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
const redirDelay = 2

function genMeta(uri) {
    return (`<meta http-equiv='refresh' content='${redirDelay}; url = ${uri}'>`)
}

function genB58(len) {
    let str = ""
    for (let i = 0; i < len; i++) {
        str = str.concat(b58strSet[random.int(0, b58strSet.length - 1)])
    }
    return str
}

module.exports = { genMeta, genB58 }