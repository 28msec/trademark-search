'use strict';

angular.module('trademarkApp')
  .controller('ResultsCtrl', function ($scope, API_URL, $http, $routeParams) {
	$scope.searchtype = $routeParams.searchtype;
    $scope.search = $routeParams.search;
    $scope.status = $routeParams.status;
    $scope.results = null;
    $scope.loading = false;
    
    $scope.numResults = 0;
    $scope.numPages = 0; 
    $scope.currentPage = 0; 
    $scope.page = 1;
    $scope.pages = [ "please wait..." ];
    
    $scope.load = function() {
    	 $scope.loading = true;
    	 $scope.currentPage = $scope.page;
    	 var params = {};
    	 params[$scope.searchtype] = $scope.search;
    	 if ($scope.status != "all") params.status = $scope.status;
    	 params.page = $scope.page;
    	 $http({
  			method: 'GET', 
  			url: API_URL + '/_queries/public/search.jq',
  			params: params
  		}).success(function(data, status, headers, config) {
  			console.log(data);
  			$scope.numResults = data.numResults;
  			$scope.numPages = data.numPages;
  			$scope.currentPage = data.currentPage;
  			$scope.results = data.results;
  			$scope.loading = false;
  			
  			$scope.pages = [];
  		    if ($scope.numPages < 15) {
  	          for(var i=1;i<=$scope.numPages;i++) $scope.pages.push(i);
  	        } else {
  	          var cp = $scope.currentPage;
  	          for(var i=1;i<=5;i++) $scope.pages.push(i);
  	           if (cp>7) $scope.pages.push("...");
  	           if (cp>6) $scope.pages.push(cp - 1);
  	           if (cp>5) $scope.pages.push(cp);
  	           if (cp>4 && cp<$scope.numPages-1) $scope.pages.push(cp + 1);
  	           if (cp<$scope.numPages-2) $scope.pages.push("...");
  	           if (cp<$scope.numPages) $scope.pages.push($scope.numPages);
  	         }
  			  			  			
  		});
    };
    
    $scope.nextPage = function() {
      if ($scope.page < $scope.numPages) {
    	  $scope.page++;
    	  $scope.load();
      }      
    };
    
    $scope.prevPage = function() {
      if ($scope.page > 1) { 
    	  $scope.page--; 
    	  $scope.load(); 
      }
    };
    
    $scope.setPage = function(newpage) {
      if ($scope.page != newpage) {
    	  $scope.page = newpage;
          $scope.load();  
      }      
    };
    
    $scope.go = function(trademark) {
    	document.location.href = trademark.url;    	         
    };
    
    $scope.getStatus = function(trademark) {
    	return (
    			trademark["case-file-header"]["abandonment-date"] != null ||
    			trademark["case-file-header"]["cancellation-date"] != null) ? "Dead" : "Live";    	
    };
    
    $scope.load();
  });
