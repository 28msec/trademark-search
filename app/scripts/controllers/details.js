'use strict';

angular.module('trademarkApp')
  .controller('DetailsCtrl', function ($scope, API_URL, $http, $routeParams, $location) {
	$scope.serial = $routeParams.serial;    
    $scope.results = null;
    $scope.loading = false;
    $scope.t = { "case-file-header" : { } };
    
    
    $scope.load = function() {
    	 $scope.loading = true;    
    	 $http({
  			method: 'GET', 
  			url: API_URL + '/_queries/public/detail.jq',
  			params: { "serial" : $scope.serial }
  		}).success(function(data, status, headers, config) {
  			console.log(data);
  			$scope.t = data;
  			$scope.loading = false;
  			  			  			  		
  		});
    };
    
    
    $scope.getStatus = function(trademark) {
    	return (
    			trademark["case-file-header"]["abandonment-date"] != null ||
    			trademark["case-file-header"]["cancellation-date"] != null) ? "Dead" : "Live";    	
    };
    
    $scope.getImage = function(trademark) { 
        return  "//tsdr.uspto.gov/img/" + trademark["serial-number"] + "/large";
    };
    
    $scope.loadsrc = function() { 
    	var id = $scope.serial;
        $scope.src = "//tsdr.uspto.gov/img/" + id + "/large"; 
        $scope.uspto = "http://tsdr.uspto.gov/#caseNumber="+id+"&caseType=SERIAL_NO&searchType=statusSearch";
    };     
    
    $scope.fdate = function(date) {
       if (date=="" || date=="0" || !date) return "-";
       return date.substr(0,4)+"-"+date.substr(4,2)+"-"+date.substr(6,2)	
    };
    
    $scope.list = function(array) {
    	var result = array[0];
    	for (var i=1;i<array.length;i++) result+=", "+array[i];
    	return result;
    };
    
    $scope.load();
  });
