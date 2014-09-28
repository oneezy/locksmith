
// App Starts
angular
	.module('app', [
		'ui.router',
		'ngAnimate',
		'angular-carousel'
	])
	.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider) {
		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'pages/home.html',
				controller: 'homeCtrl'
			})
			.state('services', {
				url: '/locksmith-services',
				templateUrl: 'pages/locksmith-services.html',
				controller: 'servicesCtrl'
			})
			.state('locations', {
				url: '/locksmith-locations',
				templateUrl: 'pages/locksmith-locations.html'
			})
			.state('payment', {
				url: '/locksmith-payment',
				templateUrl: 'pages/locksmith-payment.html'
			})
		// use the HTML5 History API
		$locationProvider.html5Mode(true);
	}])


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


angular
  .module('app')
  .controller('servicesCtrl', ['$scope', function($scope) {
    $scope.title = "Locksmith Services";
  }]);
