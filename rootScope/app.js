var app = angular.module('myApp', []);

app.run(function($rootScope){
    $rootScope.example="this is $rootScope";
});
app.controller('nameController', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});

app.controller('addressController',function($scope){
    $scope.address="c408, Vista wonder , Hadapasar Pune-411028";
});