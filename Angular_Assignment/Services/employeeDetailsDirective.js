/// <reference path="../MyApp.js" />



app.directive("employeeDetails", function () {

    return {
        restrict: 'E',
        templateUrl: '/Views/employeeDetails.html',
        scope: {
            employees: '=info',
            update: '&',
            deleteEmployee: '&delete'
        }
    }
})