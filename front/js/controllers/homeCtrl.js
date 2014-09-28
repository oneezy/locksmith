// Home
angular
	.module('app')
	.controller('homeCtrl', ['$scope', '$timeout', 'Page', function($scope, $timeout, Page) {
			Page.setTitle('Austin Texas Locksmith');

			function addSlide() {
					var i = target.length;
			};

			function addSlides() {
					for (var i=0; i < qty; i++) {
							addSlide(target);
					}
			}
	}])
