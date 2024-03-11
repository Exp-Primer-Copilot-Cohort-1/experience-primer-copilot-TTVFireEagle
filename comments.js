// Create web server
var express = require('express');
var app = express();
// Use this middleware to parse the request body
var bodyParser = require('body-parser');
app.use(bodyParser.json());
// Use this middleware to serve static files
app.use(express.static('public'));
// Use this middleware to enable CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// Use this middleware to log requests
app.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});
// Use this middleware to manage comments
var comments = [];
app.get('/comments', function(req, res) {
    res.json(comments);
});
app.post('/comments', function(req, res) {
    if (req.body.author && req.body.text) {
        comments.push({            // Object properties
        });
    }
});
