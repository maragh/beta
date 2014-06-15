'use strict'
//++++++++++++++++++++++++
var digicelControllers = angular.module('digicelControllers', []);

digicelControllers.controller('homeController', ['$scope', function ($scope){
    $scope.title = "home";
}]);

digicelControllers.controller('customerController', ['$scope', '$routeParams','$http','$location', function($scope, $routeParams, $http, $location){
    
    $scope.title = 'customer';
//    $scope.id = $routeParams.serviceId;
    
}]);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
digicelControllers.controller('loginController', ['$scope','$routeParams','$http','$location', function ($scope, $routeParams, $http, $location){
    $scope.title = "login";
    $scope.service = $routeParams.serviceId;
    
    $scope.master = {};
    $scope.submit = function (user){
        $scope.master = angular.copy(user);
//        console.log($scope.master.number);
        $http({method:'POST',url:'http://localhost/app/config.php',"data": $scope.master})
        .success (function(data, status){
            $scope.status = status;
            $scope.data = data;
            console.log($scope.data);
//           $location.path('/home');
        }).error(function(data, status){
           $scope.data = data || "Request failed";
            $scope.status = status;
            console.log($scope.status);
        })
       
    }
    
}]);