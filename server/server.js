const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use((error, req, res, next) => {
	console.error(error.stack);
	res.status(error.status || 500).send({
		error: error.message
	})
})

app.get('/products', (req, res, next) => {
	const productsPath = `${__dirname}/data/products.json`;
	res.sendFile(productsPath, error => {
		if (error) next(error);
		else console.log('Products are sent.');
	});
});

app.post('/order', (req, res, next) => {
	const orderPath = `${__dirname}/data/orders.json`;
	const {name, email, cart} = req.body;
	fs.readFile(orderPath, (error, data) => {
		if (error) next(error);
		else if (data) {
			const orders = JSON.parse(data.toString());
			orders.push({name, email, cart});
		  fs.writeFile(orderPath,
		   JSON.stringify(orders), error => {
				 if (error) next(error);
				 else {
					 console.log('A new order is received.');
					 res.send();
				 }
			 }
			);
		} else {
				const error = new Error('Not found');
				error.status = 404;
				next(error);
		}
	});
});

app.listen(port, () => 
	console.log(`Listening on port:${port}`)
);