const express = require('express');

const app = express();

const serverPort = 8000;

app.get("/products", (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.sendFile(__dirname + "/data/products.json");
})

app.listen(serverPort);