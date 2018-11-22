const express = require('express');
const cors = require('cors');
const fs = require('fs');
const Joi = require('joi');

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
		else console.log('products are sent');
	});
});

app.post('/order', (req, res, next) => {

	const schema = Joi.object().keys({
		name: Joi.string().alphanum().min(3).max(30).required(),
		email: Joi.string().email().required(),
		cart: Joi.array().min(1).required()
	});

	const validation = Joi.validate(req.body, schema);

	if (validation.error) {
		const error = new Error(validation.error.details[0].message);
		error.status = 400;
		next(error);
		return;
	}

	const orderPath = `${__dirname}/data/orders.json`;
	const {name, email, cart} = req.body;
	
	fs.readFile(orderPath, (error, data) => {
		if (error) next(error);
		else if (data) {
			const orders = JSON.parse(data.toString());
			orders.push({name, email, cart});
		  fs.writeFile(orderPath, JSON.stringify(orders), error => {
				 if (error) next(error);
				 else {
					 console.log('a new order is received');
					 res.send('thanks for your order');
				 }
			 }
			);
		} else next(new Error('the orders file is not read'));
	});
});

app.listen(port, () => 
	console.log(`Listening on port:${port}`)
);