var app = angular.module('plunker', []);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.
    when('/test1', {template: 'page 1', controller: Test1Ctrl}).
    when('/test2', {template: 'page 2', controller: Test2Ctrl}).
    otherwise({redirectTo: 'test1'});
  $locationProvider.html5Mode( true );
}]);

app.factory('Page', function(){
  var title = 'default';
  return {
    title: function() { return title; },
    setTitle: function(newTitle) { title = newTitle; }
  };
});

function MainCtrl($scope, Page) {
  $scope.Page = Page;
}
function Test1Ctrl($scope, Page) {
  Page.setTitle('title1');
}
function Test2Ctrl($scope, Page) {
  Page.setTitle('title2');
}
