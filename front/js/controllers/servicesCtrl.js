// Services
angular
	.module('app')
	.controller('servicesCtrl', ['$scope', 'Page', function($scope, Page) {
		Page.setTitle('Austin Texas Locksmith Services');
		Page.setDescription('Services! Services! Services!');
	}]);
