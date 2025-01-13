const express = require('express')
const cors = require('cors')
const db = require('./db')
const path = require('path')

const app = express()

require('dotenv').config({
    path: path.resolve(__dirname, '../../.env')
})

const checkme = db.ConnectToDB(process.env.REACT_APP_DB_USER, process.env.REACT_APP_DB_PASSWORD, process.env.REACT_APP_DB_ADDR, process.env.REACT_APP_DB_NAME, process.env.REACT_APP_DB_PORT)

app.use(express.static(__dirname))
app.use(cors())

app.get('/api/getUser/:ckey', (req, res) => {
    db.GetUser(checkme, req.params.ckey, res)
})

app.listen(process.env.REACT_APP_SERVER_PORT, () => {
    console.log(process.env.REACT_APP_SERVER_PORT)
})