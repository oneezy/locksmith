// Services Controller
angular
	.module('app')
	.controller('servicesCtrl', ['$scope', 'Page', function($scope, Page) {
		Page.setTitle('Austin Texas Locksmith Services');
		Page.setDescription('Services! Services! Services!');
	}]);

// Locations Controller
angular
	.module('app')
	.controller('locationsCtrl', ['$scope', 'Page', function($scope, Page) {
		Page.setTitle('Austin Texas Locksmith Locations');
		Page.setDescription('Location! Location! Location!');
	}]);

// Payment Controller
angular
	.module('app')
	.controller('paymentCtrl', ['$scope', 'Page', function($scope, Page) {
		Page.setTitle('Austin Texas Locksmith Payment');
		Page.setDescription('Payment! Payment! Payment!');
	}]);
