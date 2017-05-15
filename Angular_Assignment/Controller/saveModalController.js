/// <reference path="MyApp.js" />

app.controller('saveModalController', function ($scope, emp, $uibModalInstance, getLocalStorage, $rootScope) {
    $scope.employee = emp;
    $scope.employees = [];
    $scope.isSave = false;

    $scope.close = function () {
        $uibModalInstance.dismiss();
    }

    $scope.save = function () {
        if ($scope.employee.mobile == '' || $scope.employee.userName == '' || $scope.employee.age == '' || $scope.employee.designation == '' || $scope.employee.dob == '' || $scope.employee.Email == '' || $scope.employee.address == ''||
            $scope.employee.mobile == undefined || $scope.employee.userName == undefined || $scope.employee.age == undefined || $scope.employee.designation == undefined || $scope.employee.dob == undefined || $scope.employee.Email == undefined || $scope.employee.address == undefined) {
            alert("All fields are mandatory !!");
            return;
        }
        var temp = getLocalStorage.getEmployees();
        temp.push({ 'userName': $scope.employee.userName, 'age': $scope.employee.age, 'designation': $scope.employee.designation, 'dob': $scope.employee.dob, 'mobile': $scope.employee.mobile, 'Email': $scope.employee.Email, 'address': $scope.employee.address });
        getLocalStorage.updateEmployees(temp);
        $scope.close();
        $rootScope.$broadcast('REFRESH');
    }
});