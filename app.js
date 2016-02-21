/**
 * Dependencies
 */

var express = require('express');
var bodyParser = require('body-parser');

/**
 * Importation of routes
 */
var index = require('./routes/index');
var survey = require('./routes/survey');

/**
 * Express
 */
var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

// pour contrer les erreurs de cross domain
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

/**
 * Routes
 */
app.use('/', index);
app.use('/survey', survey);

module.exports = app;