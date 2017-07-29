// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', function ($scope) {
    console.log($scope);
});

var searchPeople = function(firstname, $scope, lastname, height, occupation) {
    return 'Jane Doe';
}

console.log(angular.injector().annotate(searchPeople));

