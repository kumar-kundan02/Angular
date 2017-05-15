/// <reference path="MyApp.js" />

app.controller('modalController', function ($scope, emp, $uibModalInstance, getLocalStorage) {
    $scope.employee = emp;
    $scope.employees = [];
    $scope.isSave = true;

    $scope.close = function () {
        $uibModalInstance.dismiss();
    }

    $scope.update = function () {


        var currentEmployees = getLocalStorage.getEmployees();

        for (var i = 0 ; i < currentEmployees.length ; i++) {
            if (emp.mobile == currentEmployees[i].mobile) {
                currentEmployees.splice(2, 1, $scope.employee);
            }
        }

        $scope.close();
    }


    console.log(emp);

});