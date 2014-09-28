// Payment Controller
angular
	.module('app')
	.controller('paymentCtrl', ['$scope', 'Page', function($scope, Page) {
		Page.setTitle('Austin Texas Locksmith Payment');
		Page.setDescription('Payment! Payment! Payment!');
	}]);
