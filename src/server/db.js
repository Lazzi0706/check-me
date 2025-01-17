const { Sequelize } = require('sequelize')

const main_ipv4 = '192.168.1.13'
const replica_ipv4 = '192.168.1.14'

const sequelize = new Sequelize('postgresql://lazzi:123@192.168.1.13:5432/checkme', {
    dialect: 'postgres',
    replication: {
        read: [ { host: replica_ipv4 } ],
        write: [ { host: main_ipv4 } ]
    }
})

const InitializeDataBaseConnection = async (database) => {
    try {
        console.log('Connected to database succesfully.')
        await database.authenticate()
    }
    catch (e) {
        console.error('Unable to connect database: ', e)
    }
}

module.exports = { InitializeDataBaseConnection, sequelize }