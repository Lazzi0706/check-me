const express = require('express')
const app = express()
const Pool = require('pg').Pool
const PORT = 3001

const pool = new Pool({
    user: 'lazzi',
    host: '192.168.1.10',
    database: 'checkme',
    password: '123',
    port: 5432
})

pool.connect().then( () => {
    console.log('DB: Connected to database successful')
}).catch( (err) => {
    console.error('DB: Something went wrong!', err)
})

app.use(express.static(__dirname))

app.get('/api/getUser/:ckey', (req, res) => {
    const ckey = req.params.ckey;

    pool.query('SELECT * FROM users WHERE ckey = $1', [ckey]).then( (result) => {
        res.send(res.json(result.rows))
    }).catch( (err) => {
        console.error('error ', err)
    })
})

app.listen(PORT, () => {
    console.log(PORT)
})