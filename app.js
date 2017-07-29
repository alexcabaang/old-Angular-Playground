// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', function () {

});

var things = [1,2,3, 'Alex', function(){alert("Hello Alex")}];

console.log(things);
things[4]();
