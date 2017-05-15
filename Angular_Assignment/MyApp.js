/// <reference path="Controller/EmployeesController.js" />
/// <reference path="Services/LocalStorageService.js" />
/// <reference path="Controller/modalController.js" />
/// <reference path="Controller/saveModalController.js" />

var app = angular.module('Employees', ['storageService', 'ngRoute', 'ngSanitize', 'ui.bootstrap']);

app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
}]);

app.config(function ($routeProvider,$locationProvider) {

        $routeProvider.when('/', {
            templateUrl: 'Views/Login.html',
            controller: 'EmployeesController'
        }).when('/Admin', {
            templateUrl: 'Views/EmployeeDashboard.html',
            controller: 'EmployeesController'
        }).otherwise({
            redirectTo: "/"
        })
        $locationProvider.html5Mode(true);
});
