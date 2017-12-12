const express = require('../lib/express');
const app = express();

app.get(function (req, res) {
    res.end("GET SUCCESS");
})

app.post(function (req, res) {
    res.end('PST SUCCESS');
})

app.listen(3000)