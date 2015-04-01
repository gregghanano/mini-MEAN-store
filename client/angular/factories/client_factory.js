myApp.factory('orderFactory', function($http){
	var orders = [];
	var customers = [];
	var products = [];

	var factory = {};

//------------ Customers -----------------
	factory.getCustomers = function(callback){
		$http.get('/getCustomers').success(function(output){
			customers = output;
			callback(output);
		})
	}

	factory.addFactoryCustomer = function(data, callback){
		$http.post('/addCustomer', data).success(function(output){
			customers.push(output);
			callback(output);
		})
	}

//------------- Products -------------------

	factory.getProducts = function(callback){
		$http.get('/getProducts').success(function(output){
			products = output;
			callback(output);
		})
	}

	factory.addFactoryProduct = function(data, callback){
		$http.post('/addProduct', data).success(function(output){
			products.push(output);
			callback(output);
		})
	}
//-------------- Orders ---------------------
	factory.getOrders = function(callback){
		$http.get('/getOrders').success(function(output){
			orders = output;
			callback(output);
		})
	}

	factory.addFactoryOrder = function(data, callback){
		$http.post('/addOrder', data).success(function(output){
			console.log('output from server controller////', output);
			orders.push(output);
			callback(output);
		})
	}

	return factory;
})