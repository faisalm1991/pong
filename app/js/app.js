'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'ngLocale',
  'phonecatAnimations',
  'n3-charts.linechart',
  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);

phonecatApp.filter('orderObjectBy', function(){
 return function(input, attribute) {
    if (!angular.isObject(input)) return input;

    var array = [];
    for(var objectKey in input) {
        array.push(input[objectKey]);
    }

    array.sort(function(a, b){
        a = parseInt(a[attribute]);
        b = parseInt(b[attribute]);
        return a - b;
    });
    return array;
 }
});

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/PingPongGame', {
        templateUrl: 'partials/pingPongGame.html',
        controller: 'PingPongGameCtrl'
      }).
      otherwise({
        redirectTo: '/PingPongGame'
      });
  }]);
  
  phonecatApp.directive('draggable', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      element[0].addEventListener('dragstart', scope.handleDragStart, false);
      element[0].addEventListener('dragend', scope.handleDragEnd, false);
    }
  }
});

phonecatApp.directive('droppable', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      element[0].addEventListener('drop', scope.handleDrop, false);
      element[0].addEventListener('dragover', scope.handleDragOver, false);
    }
  }
});
