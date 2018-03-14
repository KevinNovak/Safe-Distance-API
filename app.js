var express = require('express');
var bodyParser = require('body-parser');

// Constants
const PORT = 3000;
const QUEUE_SIZE = 30;

// Setup express
var app = express();

// Setup body-parser
app.use(bodyParser.json());

// Setup stats queue
var statsQueue = [];
var nextStatId = 1;

function addStat(stat) {
    stat.id = nextStatId;
    nextStatId += 1;
    while (statsQueue.length >= QUEUE_SIZE) {
        statsQueue.pop();
    }
    statsQueue.push(stat);
}

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
    response.status(200);
    var reversedStatsQueue = [].concat(statsQueue).reverse();
    response.json(reversedStatsQueue);
});

// POST /api/stats
app.post('/api/stats', function (request, response) {
    var stat = request.body;
    // TODO: Validation
    addStat(stat);
    response.status(201);
    response.json(stat);
});

// Run app
app.listen(PORT, function () {
    console.log(`Server running on port ${PORT}`);
});