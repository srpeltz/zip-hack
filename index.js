var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var morgan = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var session = require('express-session')
var port = process.env.PORT || 5000

// load env variable from .env file
require('dotenv').config()

// create express app
var app = express()

// set up public directory path and favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(express.static('public'))


// load general middleware
app.use(morgan('dev'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))

// set up routes - always send index when there is no other match...
// React handles my routing.
app.get('*', (req,res) => {
	res.sendFile(path.join(__dirname, '/public/index.html'))
})

// listen on port variable
app.listen(port, function(){
	var msg = `Server listening on port ${port}.`
	var bracket = '='.repeat(msg.length+4)
	console.log(`${bracket}\n| ${msg} |\n${bracket}`)
})