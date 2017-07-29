// MODULE
var angularApp = angular.module('angularApp', ['ngMessages', 'ngResource']);

// CONTROLLERS
angularApp.controller('mainController', function ($scope, $log, $filter, $resource) {

    //    console.log($scope);
    //    console.log($log);
    //
    //    $log.log("Hello");
    //    $log.warn("Warning");
    //    $log.info("This is an info...");
    //    $log.error("Error...");

    //    $scope.name = 'Alex';
    //    $scope.formattedname = $filter('uppercase')($scope.name);
    //
    //    $log.info($scope.name);
    //    $log.info($scope.formattedname);
      
    console.log($resource);
});
