
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

	.service('Page', function(){
	  var title = 'default';
	  return {
	    title: function() { return title; },
	    setTitle: function(newTitle) { title = newTitle; }
	  };
	});
