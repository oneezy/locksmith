
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
			// Home Page
			.state('home', {
				url: '/',
				templateUrl: 'pages/home.html',
				controller: 'homeCtrl'
			})

			// Top Navigation
			.state('services', {
				url: '/locksmith-services',
				templateUrl: 'pages/locksmith-services.html',
				controller: 'servicesCtrl'
			})
			.state('locations', {
				url: '/locksmith-locations',
				templateUrl: 'pages/locksmith-locations.html',
        controller: 'locationsCtrl'
			})
			.state('payment', {
				url: '/locksmith-payment',
				templateUrl: 'pages/locksmith-payment.html',
        controller: 'paymentCtrl'
			})

			// Austin
			.state('austin', {
				url: '/austin-texas-locksmith',
				templateUrl: 'pages/location-landingpage.html',
				controller: 'austinCtrl'
			})

			// Cedar Park
			.state('cedarpark', {
				url: '/cedar-park-texas-locksmith',
				templateUrl: 'pages/location-landingpage.html',
				controller: 'cedarparkCtrl'
			})

			// Kyle
			.state('kyle', {
				url: '/kyle-texas-locksmith',
				templateUrl: 'pages/location-landingpage.html',
				controller: 'kyleCtrl'
			})

			// Lakeway
			.state('lakeway', {
				url: '/lakeway-texas-locksmith',
				templateUrl: 'pages/location-landingpage.html',
				controller: 'lakewayCtrl'
			})

			// Dripping Springs
			.state('drippingsprings', {
				url: '/dripping-springs-texas-locksmith',
				templateUrl: 'pages/location-landingpage.html',
				controller: 'drippingspringsCtrl'
			})

			// Pflugerville
			.state('pflugerville', {
				url: '/pflugerville-texas-locksmith',
				templateUrl: 'pages/location-landingpage.html',
				controller: 'pflugervilleCtrl'
			})

			// Georgetown
			.state('georgetown', {
				url: '/georgetown-texas-locksmith',
				templateUrl: 'pages/location-landingpage.html',
				controller: 'georgetownCtrl'
			})

			// Elgin
			.state('elgin', {
				url: '/elgin-texas-locksmith',
				templateUrl: 'pages/location-landingpage.html',
				controller: 'elginCtrl'
			})

			// Buda
			.state('buda', {
				url: '/buda-texas-locksmith',
				templateUrl: 'pages/location-landingpage.html',
				controller: 'budaCtrl'
			})

			// Bastrop
			.state('bastrop', {
				url: '/bastrop-texas-locksmith',
				templateUrl: 'pages/location-landingpage.html',
				controller: 'bastropCtrl'
			})

			// Bee Cave
			.state('beecave', {
				url: '/bee-cave-texas-locksmith',
				templateUrl: 'pages/location-landingpage.html',
				controller: 'beecaveCtrl'
			})

			// Del Valle
			.state('delvalle', {
				url: '/del-valle-texas-locksmith',
				templateUrl: 'pages/location-landingpage.html',
				controller: 'delvalleCtrl'
			})

			// Manor
			.state('manor', {
				url: '/manor-texas-locksmith',
				templateUrl: 'pages/location-landingpage.html',
				controller: 'manorCtrl'
			})

			// Round Rock
			.state('roundrock', {
				url: '/round-rock-texas-locksmith',
				templateUrl: 'pages/location-landingpage.html',
				controller: 'roundrockCtrl'
			})

			// Spicewood
			.state('spicewood', {
				url: '/spicewood-texas-locksmith',
				templateUrl: 'pages/location-landingpage.html',
				controller: 'spicewoodCtrl'
			})

		// use the HTML5 History API
		$locationProvider.html5Mode(true);
	}])
