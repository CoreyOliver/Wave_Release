const express = require("express");
const mySQL = require("mysql2");

//connection

const connectDB = mySQL.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
});

const connectToDB = connectDB.connect(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("successfully connected to mySQL");
    }
  });


module.exports = connectDB.promise();
