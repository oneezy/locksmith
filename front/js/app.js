
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
				templateUrl: 'pages/locksmith-locations.html',
        controller: 'locationsCtrl'
			})
			.state('payment', {
				url: '/locksmith-payment',
				templateUrl: 'pages/locksmith-payment.html',
        controller: 'paymentCtrl'
			})
		// use the HTML5 History API
		$locationProvider.html5Mode(true);
	}])


// Page
angular
  .module('app')
  .factory('Page', function(){
    var title = 'default';
    return {
      title: function() { return title; },
      setTitle: function(newTitle) { title = newTitle; }
    };
  });


// Main Control
angular
  .module('app')
  .controller('mainCtrl', ['$scope', 'Page', function($scope, Page) {
    $scope.Page = Page;
  }]);


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


// Services
angular
  .module('app')
  .controller('servicesCtrl', ['$scope', 'Page', function($scope, Page) {
    Page.setTitle('Austin Texas Locksmith Services');
  }]);


// Locations
angular
  .module('app')
  .controller('locationsCtrl', ['$scope', 'Page', function($scope, Page) {
    Page.setTitle('Austin Texas Locksmith Locations');
  }]);


// Payment
angular
  .module('app')
  .controller('paymentCtrl', ['$scope', 'Page', function($scope, Page) {
    Page.setTitle('Austin Texas Locksmith Payment');
  }]);
