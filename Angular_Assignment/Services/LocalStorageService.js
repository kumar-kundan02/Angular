

var storageService = angular.module('storageService', []);
storageService.factory('getLocalStorage', function () {
    var employeeList = {};
    return {
        list: employeeList,
        updateEmployees: function (EmployeesArr) {
            if (window.localStorage && EmployeesArr) {
                //Local Storage to add Data
                localStorage.setItem("employees", angular.toJson(EmployeesArr));
            }
            employeeList = EmployeesArr;

        },
        getEmployees: function () {
            //Get data from Local Storage
            employeeList = angular.fromJson(localStorage.getItem("employees"));
            return employeeList ? employeeList : [];
        }
    };

});