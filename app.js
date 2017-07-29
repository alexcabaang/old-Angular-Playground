// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', function ($scope) {
    $scope.name = 'Jane Doe';
    $scope.occupation = 'Coder';
    $scope.getname = function() {
        return 'John Doe';
    }
    console.log($scope);
});



