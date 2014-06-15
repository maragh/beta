'use strict'
//++++++++++++++++++
var digicelApp = angular.module('digicelApp', [
    'ngRoute',
    'digicelControllers',
    'digicelAnimation'
]);

digicelApp.config(['$routeProvider',
        function($routeProvider){
            $routeProvider.
                when('/home',{
                    templateUrl: 'partials/home-view.html',
                    controller: 'homeController'
                }).when('/login/:serviceId',{
                    templateUrl: 'partials/login-view.html',
                    controller: 'loginController'
                }).when('/customer/:serviceId',{
                    templateUrl:'partials/customer-view.html',
                    controller:'customerController'
                }).otherwise({
                redirectTo: '/home'
            });
        }]);