var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hello Dexcom!')
})

module.exports = app;