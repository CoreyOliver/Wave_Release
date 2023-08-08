const express = require('express')
const mySQL = require('mysql')

//connection

const connectDB = mySQL.createConnection(  {
    host: 'localhost',
    port: 3306,
    database: 'wave_release',
    user: 'root',
    password: process.env.ROOT_PW
})


const connectToDB = connectDB.connect(  function(err) {
    if(err) {
        console.log(err)
    } else {
        console.log('successfully connected to mySQL')
    }
})

module.exports = connectDB