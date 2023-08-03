const express = require('express')
const app = express()
const cors = require('cors')
const logger = require('morgan')



//middleware init
require('dotenv').config({path: "./config/.env"})
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(cors());

// connections
const connectDB = require('./config/main.database')
const mainRoutes = require('./routes/main.routes')


//routes init

app.use('/', mainRoutes)


//listening

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`)
})