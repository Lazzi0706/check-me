const { Sequelize } = require('sequelize')
const path = require('node:path')


require('dotenv').config({path: path.join(__dirname, '../../.env')})

const sequelize = new Sequelize(process.env.REACT_APP_DB_MAIN, {
    dialect: 'postgres',
    replication: {
        read: [ { host: process.env.REACT_APP_MAIN_IPV4 } ],
        write: [ { host: process.env.REACT_APP_REPLICA_IPV4 } ]
    }
})

const InitializeDataBaseConnection = async (database) => {
    try {
        await database.authenticate()
    }
    catch (e) {
        console.error('Unable to connect to database: ', e)
    }
}

module.exports = { InitializeDataBaseConnection, sequelize }