'use strict';

angular.module('trademarkApp')
  .controller('MainCtrl', function ($scope, $location) {
	  
	$scope.criteria = { status : "" };
	
    $scope.search = function() {
      $location.path("/results/" + encodeURIComponent(JSON.stringify($scope.criteria)));           
    };
  });
