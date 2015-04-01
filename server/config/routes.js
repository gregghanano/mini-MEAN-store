var orders = require('../controllers/orders');

module.exports = function(app){
	app.get('/', function(req, res){
		res.render('index');
	})

	app.get('/getCustomers', function(req,res){
		orders.getCustomers(req,res);
	})
	app.post('/addCustomer', function(req, res){
		orders.addCustomer(req, res);
	})

	app.get('/getProducts', function(req, res){
		orders.getProducts(req, res);
	})

	app.post('/addProduct', function(req, res){
		orders.addProduct(req, res);
	})

	app.post('/addOrder', function(req, res){
		orders.addOrder(req, res);
	})

	app.get('/getOrders', function(req, res){
		orders.getOrders(req, res);
	})
}