
// App Starts
angular
	.module('app', [
		'ui.router',
		'ngAnimate',
		'angular-carousel'
	])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
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
	}])
