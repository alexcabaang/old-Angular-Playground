// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', function ($scope) {    
});

var searchPeople = function(firstname,lastname, height,age, occupation) {
    return 'Jane Doe';
}

//console.log(searchPeople);

var searchPeopleString = searchPeople.toString();
console.log(searchPeopleString);

