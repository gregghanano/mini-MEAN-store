var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Customer = mongoose.model('Customer');
var Product = mongoose.model('Product');

var orders = {};

orders.getCustomers = function(req,res){
	Customer.find({}, function(err, data){
		if(err){
			console.log('couldnt get customers');
		} else {
			res.json(data);
		}
	})
}

orders.addCustomer = function(req, res){
	console.log(req.body, 'req.body customer data');
	var new_customer = new Customer({customerName: req.body.customerName});
	new_customer.save(function(err, data){
		if(err){
			console.log('you didnt save the custoemr');
		} else {
			console.log(data, "saved data");
			res.json(data);
		}
	})

}

orders.addProduct = function(req, res){
	console.log(req.body, 'req.body product data');
	var new_product = new Product({productName: req.body.productName, image: req.body.image, description: req.body.description, initialQuantity:req.body.initialQuantity});
	new_product.save(function(err, data){
		if(err){
			console.log('you didnt save the product');
		} else {
			console.log(data, "saved product");
			res.json(data);
		}
	})
}

orders.getProducts = function(req, res){
	Product.find({}, function(err, data){
		if(err){
			console.log('couldnt get products');
		} else {
			res.json(data);
		}
	})
}

orders.addOrder = function(req, res){
	console.log('add Order req.body ', req.body)
	var new_order = new Order({customer: req.body.customer, quantity: req.body.quantity, product: req.body.product});
	console.log(new_order, "/////new order variable");
	new_order.save(function(err, data){
		if(err){
			console.log('couldnt save order');
		} else {
			Product.findOne({_id: req.body.product}, function(err, data2){
				if(err){
					console.log('couldnt find one product')
				} else {
					console.log("product findOne data////// ", data2);
					var newQuantity = data2.initialQuantity - req.body.quantity;
					console.log("newQuantity variable = ", newQuantity);
					Product.update({_id: req.body.product}, {initialQuantity: newQuantity}, function(err, data3){
						if(err){
							console.log('didnt update product!');
						} else {
							res.json(data3);
						}
					})
				}
			})
		}
	})
}

orders.getOrders = function(req, res){
	Order.find({}).populate('customer').populate('product').exec(function(err, data){
		res.json(data);
	})
}

module.exports = orders;