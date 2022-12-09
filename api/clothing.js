const {getAllClothing} = require('../db')
const express = require('express')
const clothingRouter = express()



clothingRouter.get('/', async (req, res, next) => {
    try {
        console.log('Request made here')
        const clothing = await getAllClothing()
        res.send(clothing)
    }catch(error) {
        console.log("There was an error fetching a request to clothing")
        throw error
    }
})





module.exports = clothingRouter