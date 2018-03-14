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

// GET /api/stats
app.get('/api/stats', function (request, response) {
    // Fake it til ya make it
    var body = [
        {
            id: 1,
            speed: 30,
            distance: 50,
            time: "2018-03-14T01:03:28.034234Z"
        },
        {
            id: 2,
            speed: 30,
            distance: 50,
            time: "2018-03-14T01:03:28.034234Z"
        },
        {
            id: 3,
            speed: 30,
            distance: 50,
            time: "2018-03-14T01:03:28.034234Z"
        }
    ];
    response.status(200);
    response.json(body);
});

// Run app
app.listen(PORT, function () {
    console.log(`Server running on port ${PORT}`);
});