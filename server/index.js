//run npm init -y
//npm i express
//add boilerplate to server
const express = require('express')


//access to files
const path = require('path')
require('dotenv').config()

//uses Heroku port or defaults to 5000
const port = process.env.PORT || 5000
const app = express()
app.use(express.json())



//set up request
//get endpoint for index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/main.js'))
  })
  
app.listen(port, () => {
    console.log('Docked at port ' + port)
})

