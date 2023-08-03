const express = require('express')
const mySQL = require('mysql')

//connection

const connection = mySQL.createConnection(  {
    host: 'localhost',
    port: 3306,
    database: 'wave_release',
    user: 'root',
    password: 'CoreBrah54!!'
})


const connectDB = connection.connect(  function(err) {
    if(err) {
        console.log('error occured while connecting')
    } else {
        console.log('successfully connected to mySQL')
    }
})

module.exports = connectDB