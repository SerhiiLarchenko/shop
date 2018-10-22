const express = require('express');
const Joi = require("joi");

const app = express();

const serverPort = 8000;

const orders = [];

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
       next();
 });

app.use(express.json());

app.get("/products", (req, res) => {
    res.sendFile(__dirname + "/data/products.json");
})

app.post("/order", (req,res) => {
    orders.push(req.body.order);
    res.send("we will call asap");
    console.log(orders);
});

app.listen(serverPort);

console.log("server is running");