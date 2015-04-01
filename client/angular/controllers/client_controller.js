myApp.controller('ordersController', function($scope, $location, orderFactory, $routeParams, localStorageService){
	$scope.orders = [];
	$scope.customers = [];
	$scope.products = [];

	orderFactory.getCustomers(function(data){
		$scope.customers = data;
	})

	orderFactory.getProducts(function(data){
		$scope.products = data;
	})

	orderFactory.getOrders(function(data){
		$scope.orders = data;
	})

	$scope.addCustomer = function(){
		console.log("new customer data ", $scope.newCustomer);
		orderFactory.addFactoryCustomer($scope.newCustomer, function(data){
			console.log("new customer data ", data);
			orderFactory.getCustomers(function(data){
				$scope.customers = data;
			})
			$scope.newCustomer = {};
		})
	}

	$scope.addProduct = function(){
		console.log('new product data ', $scope.newProduct);
		orderFactory.addFactoryProduct($scope.newProduct, function(data){
			console.log('new product data ', data);
			orderFactory.getProducts(function(data){
				$scope.products = data;
			})
			$scope.newProduct = {};
		})
	}

	$scope.addOrder = function(){
		console.log('new order data ', $scope.newOrder);
		orderFactory.addFactoryOrder($scope.newOrder, function(data){
			orderFactory.getOrders(function(data){
				$scope.orders = data;
			})
			$scope.newOrder = {};
		})
	}
})