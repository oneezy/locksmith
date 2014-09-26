angular
	.module('app')
	.controller('servicesCtrl', ['$scope', 'Page', function($scope, Page) {
		$scope.title = "Locksmith Services";
		Page.setTitle('WOO!!!');
	}]);
