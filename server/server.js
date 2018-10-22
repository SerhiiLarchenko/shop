const express = require('express');
const fs = require('fs');

const app = express();

const serverPort = 8000;

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
    let { name, email, cart} = req.body,
        orders = [];
    fs.readFile(__dirname + "/data/orders.json", (err,data) => {
        if (err) console.error(err);
        if (data) orders = JSON.parse(data.toString());
        console.log(orders)
        orders.push({name, email, cart});
    });
    fs.writeFile(__dirname + "/data/orders.json", JSON.stringify(orders), (err) => {console.log(err)});
    res.send("we will call asap");
});

app.listen(serverPort);


console.log("server is running");