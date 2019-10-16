const mysql = require('mysql')
const {database} = require('./keys')
const {promisify} = require('util')

const pool = mysql.createPool(database)
pool.getConnection((err, con) =>{
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST') console.error('Database connection was closed')
        if(err.code === 'ER_CON_COUNT_ERROR') console.error('Database has to many connections')
        if(err.code === 'ECONNREFUSED') console.error('Database connection was refused')
        if(err.code === 'ER_ACCESS_DENIED_ERROR')console.error('Access denied')
    }
    if(con){
        con.release()
        console.log('DB connected')
    } 
    return
})

// convirtiendo callbacks a promesas
pool.query = promisify(pool.query)

module.exports = pool