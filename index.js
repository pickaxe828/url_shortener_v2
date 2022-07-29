// install express with `npm install express` 
const express = require("express")
const { genMeta, genB58 } = require("./utils/utils.js")
const deta = require("deta")

const app = express()
const db = deta.Base("url_storage_v2")

const b58keyLength = 6

app.use(express.json())

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.send("Welcome to the URL shortener's backend! For more information/ usage, visit our github: ")
})

app.post("/create", async (req, res) => {
    let data = {
        key: genB58(b58keyLength),
        uri: encodeURIComponent(req.body.uri)
    }
    await db.put(data)
    res.send(data)
})

app.get("/:key", async (req, res) => {
    let key = req.params.key
    let data = await db.get(key)
    let uri = decodeURIComponent(data.uri)
    let meta = genMeta(uri)
    res.render('template', { meta: meta })
})

// export 'app'
module.exports = app