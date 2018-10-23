const express = require('express');
const fs = require('fs');

const app = express();

const serverPort = 8000;

app.use((req, res, next) => {
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
        if (err) console.error(err, "24");
        if (data) orders = JSON.parse(data.toString());
        orders.push({name, email, cart});
        fs.writeFile(__dirname + "/data/orders.json",
         JSON.stringify(orders), (err) =>
           {console.error(err)});
    });
    
    res.send("we will call you asap");
});

app.listen(serverPort);


console.log("server is running");