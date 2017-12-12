const express = require('../lib/express');
console.log(express)
const app = express();
const PORT = 3000;

app.get(function (req, res) {
    res.end("GET SUCCESS");
})

app.post(function (req, res) {
    res.end('PST SUCCESS');
})

app.listen(PORT);
console.log("app is running on localhost: " + PORT)