'use strict';

angular.module('trademarkApp')
  .controller('ResultsCtrl', function ($scope, API_URL, $http, $routeParams, $location) {
	$scope.criteria = JSON.parse(decodeURIComponent($routeParams.criteria));    
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
    	 $scope.criteria.page = $scope.page;    	 
    	 $http({
  			method: 'GET', 
  			url: API_URL + '/_queries/public/search.jq',
  			params: $scope.criteria
  		}).success(function(data, status, headers, config) {
  			console.log(data);
  			$scope.numResults = data.numberOfResults;
  			$scope.numPages = data.numberOfPages;
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
    	$location.path("/details/" + encodeURIComponent(trademark['serial-number']));           
    	//document.location.href = trademark.url;    	         
    };
    
    $scope.getStatus = function(trademark) {
    	return (
    			trademark["case-file-header"]["abandonment-date"] != null ||
    			trademark["case-file-header"]["cancellation-date"] != null) ? "Dead" : "Live";    	
    };
    
    $scope.getImage = function(trademark) { 
        return  "//tsdr.uspto.gov/img/" + trademark["serial-number"] + "/large";
    };
    
    $scope.load();
  });

function showImage(obj) {
    var p=obj.prev(); 
    p.css('background', 'none'); 
    p.css('width', '0px'); 
    obj.css('display', 'inline'); 
};