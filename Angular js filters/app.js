var app=angular.module('myApp',[]);

app.controller('filterController',function($scope){
    $scope.Phones=[{name:'samsung',purchaseDate:'23/07/1993',numberOfPhones:14,purchasedBy:'shashi',price:50000},
    {name:'apple',purchaseDate:'23/07/1991',numberOfPhones:38,purchasedBy:'ravi',price:9000},
    {name:'Asus',purchaseDate:'23/07/1985',numberOfPhones:12,purchasedBy:'papat',price:89000}];





});