var express = require('express');
var bodyParser = require('body-parser');

// Constants
const PORT = 3000;

// Setup express
var app = express();

// Setup body-parser
app.use(bodyParser.json());

// Routes
// GET /
app.get('/', function (request, response) {
    var body = {
        message: 'Please use /api'
    };
    response.status(200);
    response.json(body);
});

// Run app
app.listen(PORT, function () {
    console.log("Server running on port " + PORT);
});