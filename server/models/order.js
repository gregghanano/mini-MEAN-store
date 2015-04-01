var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var OrderSchema = new mongoose.Schema({
	customer: {type: Schema.Types.ObjectId, ref:"Customer"},
	quantity: Number,
	product: {type: Schema.Types.ObjectId, ref:"Product"},
	created_date: {type: Date, default: Date.now}

})

var CustomerSchema = new mongoose.Schema({
	customerName: String
})

var ProductSchema = new mongoose.Schema({
	productName: String,
	image: String,
	description: String,
	initialQuantity: Number
})

var Order = mongoose.model('Order', OrderSchema);
var Customer = mongoose.model('Customer', CustomerSchema);
var Product = mongoose.model('Product', ProductSchema);