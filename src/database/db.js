require('dotenv/config')
const mysql = require('mysql2/promise')

const connect = async () => {
    if(global.connection && global.connection.state !== 'disconnect') return global.connection

    const connection = await mysql.createConnection(`${process.env.DB}://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)

    global.connection = connection

    return connection
}
 

const testConn = async () => {
    try {
        await connect()
        
        return {message:'true'}
    } catch (err) {
        console.log('Failed to connect', err)
        return {message : 'Failed to connect', err}
    }
}
  
module.exports = { testConn }