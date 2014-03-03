'use strict';

angular.module('trademarkApp')
  .controller('MainCtrl', function ($scope, $location) {
	  
	$scope.trademark = "";
	$scope.status = "all";	
	$scope.searchtype = "mark-identification"
	
    $scope.search = function() {
      $location.path("/results/" + $scope.status + "/" + encodeURIComponent($scope.searchtype) + "/"+ encodeURIComponent($scope.trademark));           
    };
  });
