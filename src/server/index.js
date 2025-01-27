// Если нет записей по вторичной таблице, то ответом приходит целое НИХУЯ. Надо исправить
// Упаковать в один JSON информацию по игроку и массив его персонажей
// Либо подумать башкой и как-то заделать

// Дописать менеджер БД на питоне
// Возможно сделать хуйню по инициализации БД

const cors = require('cors')
const express = require('express')

const app = express()
const { InitializeDataBaseConnection, sequelize } = require('./db')

app.use(express.static(__dirname))
app.use(cors())

InitializeDataBaseConnection(sequelize)

app.get('/api/user/:ckey', (req, res) => {
    sequelize.query(
        `
        SELECT * FROM users WHERE ckey = '${req.params.ckey}';
        `
    , {
    }).then((data) => {
        return res.json(data[0])
    }).catch((e) => {
        console.error(e)
    })
})

app.get('/api/user/:ckey/characters', (req, res) => {
    sequelize.query(
        `
        SELECT characters.id, characters.name, characters.age FROM users FULL JOIN characters ON users.ckey = characters.owner_id WHERE ckey = '${req.params.ckey}';
        `
    , {
    }).then((data) => {
        return res.json(data[0])
    }).catch((e) => {
        console.error(e)
    })
})

app.listen(3001, () => {
})