var app = angular.module('myApp', []);
app.controller('nameController', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});

app.controller('addressController',function($scope){
    $scope.address="c408, Vista wonder , Hadapasar Pune-411028";
});