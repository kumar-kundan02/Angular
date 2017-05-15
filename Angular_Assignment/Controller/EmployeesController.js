/// <reference path="Views/modal.html" />
/// <reference path="LocalStorageService.js" />
/// <reference path="MyApp.js" />

app.controller('EmployeesController', function ($scope, getLocalStorage, $uibModal, $rootScope, $location) {
    
    //Read the Employee List from LocalStorage
    $scope.employees = getLocalStorage.getEmployees();

    $rootScope.$on('REFRESH', function () {
        $scope.employees = getLocalStorage.getEmployees();
    })

    $scope.Clicked = function () {
        $location.path("/Admin");
    }

    $scope.addEmployee = function () {
        
        var EmployeesArr = {};

        var modalInstance = $uibModal.open({
            templateUrl: 'Views/modal.html',
            controller: 'saveModalController',
            resolve: {
                emp: EmployeesArr
            }
        });
      
        $scope.userName = '';
        $scope.age = '';
        $scope.designation = '';
        $scope.dob = '';
        $scope.mobile = '';
        $scope.Email = '';
        $scope.address = '';       
    };

    //Delete Employee - Using AngularJS splice to remove the emp row from the Employee list
        $scope.deleteEmployee = function (emp) {
        $scope.employees.splice($scope.employees.indexOf(emp), 1);
        getLocalStorage.updateEmployees($scope.employees);
    };

        $scope.updateEmployees = function (employee) {

        var modalInstance = $uibModal.open({
            templateUrl: 'Views/modal.html',
            controller: 'modalController',
            resolve: {
                emp: employee
            }
        });
    };
});



