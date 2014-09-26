angular
	.module('app')
	.controller('mainCtrl', ['$scope', 'Page', function($scope, Page) {
				$scope.Page = Page;
			}
	}])
