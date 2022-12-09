require('dotenv').config();
const express = require("express")
const server = express()
const cors = require('cors')
const morgan = require('morgan')
const PORT = 4000


//Cross Origin
server.use(cors())
//Morgan for logging out when sending request
server.use(morgan('dev'))
//Body Parser for awaiting information
server.use(express.json())
const {client} = require('./db')
client.connect()

const apiRouter = require('./api/index')


server.use('/api', apiRouter, (req, res, next) => {
    try { 
        res.send("Welcome to the Users Chon Website API")
    }catch(error) {
        console.log("There was an error with the API")
        throw error
    }
})



server.listen(PORT, () => {
    console.log("I'm listening on PORT:", PORT)
})

//Server sided error
