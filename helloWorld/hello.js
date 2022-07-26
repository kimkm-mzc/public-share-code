const express = require('express');
const app = express();

var port = app.listen(process.env.PORT || 8080);

app.get('/', function(req, res) {
    res.send("<h1>Hello World!</h1>")
})

app.listen(port, function() {
    console.log('start! express server');
})