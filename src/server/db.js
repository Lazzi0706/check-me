const Pool = require('pg').Pool

const ConnectToDB = (user, password, host, db, port) => {
    const pool = new Pool({
        user: user,
        host: host,
        database: db,
        password: password,
        port: port || 5432
    })
    pool.connect().then( () => {
        console.log('DB: Connected to database successful')
    }).catch( (err) => {
        console.error('DB: Something went wrong!', err)
    })
    return pool
}

const GetUser = async (pool, ckey, responce) => {
    pool.query('SELECT * FROM users WHERE ckey = $1', [ckey]).then( (result) => {
        responce.send(responce.json(result.rows))
    }).catch( (err) => {
        console.error(err)
    })
}

module.exports = {ConnectToDB, GetUser}