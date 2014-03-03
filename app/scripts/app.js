'use strict';

angular.module('trademarkApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
.constant('API_URL', 'http://trademark-client.28.io/v1')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/results/:status/:searchtype/:search', {
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
