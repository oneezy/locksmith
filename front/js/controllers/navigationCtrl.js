// Services Controller
angular
	.module('app')
	.controller('servicesCtrl', ['$scope', 'Page', function($scope, Page) {
		Page.setTitle('Austin Texas Locksmith Services');
	}]);

// Locations Controller
angular
	.module('app')
	.controller('locationsCtrl', ['$scope', 'Page', function($scope, Page) {
		Page.setTitle('Austin Texas Locksmith Locations');
	}]);

// Payment Controller
angular
	.module('app')
	.controller('paymentCtrl', ['$scope', 'Page', function($scope, Page) {
		Page.setTitle('Austin Texas Locksmith Payment');
	}]);
