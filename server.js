const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const cors = require('cors')

// dot config
dotenv.config() // jab root me hoga to sirf confit karege
// nahi to dotenv.config('path jaha file present hai')


// rest object
const app = express()

// middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))


// test routes
app.use('/api/v1/test',require('./routes//testRoutes'));

// port
const PORT = process.env.PORT || 8080


// listen
app.listen(PORT,()=>{
    console.log(`Node Server running in ${process.env.DEV_MODE} Mode on Port ${process.env.PORT}`.bgBlue.white)
})