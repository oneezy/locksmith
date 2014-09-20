angular
	.module('app')
	.controller('homeCtrl', ['$scope', '$timeout', function($scope, $timeout) {
	    function addSlide() {
	        var i = target.length;
	    };

	    function addSlides() {
	        for (var i=0; i < qty; i++) {
	            addSlide(target);
	        }
	    }
	}])