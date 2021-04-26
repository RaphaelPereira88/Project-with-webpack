const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors')
const fetch = require('node-fetch')
const bodyParser = require('body-parser')

const dotenv = require('dotenv');
dotenv.config();

const app = express()

app.use(express.static('dist'))
app.use(cors())
app.use(bodyParser.json())

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

//if input is a URL, the program will use this post route
app.post("/clientdataUrl", async function (req, res) {
    console.log('req====+>', req.body)
    

    const result = await fetch(process.env.API_ID + process.env.API_KEY+ "url=" + req.body.sentence)
    try {
        console.log (result)
        const response = await result.json();
        res.send(response)
        console.log(response)
    } catch (error) {
        console.log("error", error);
    }
})

//if the input is a Text, the program will use this post route
app.post("/clientdataText", async function (req, res) {
    console.log('req====+>', req.body)
    

    const result = await fetch(process.env.API_ID + process.env.API_KEY + "txt=" + req.body.sentence)
    try {
        console.log (result)
        const response = await result.json();
        res.send(response)
        console.log(response)
    } catch (error) {
        console.log("error", error);
    }
})
