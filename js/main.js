var app = angular.module('app', ['ngRoute']);

app.controller("ProjectsController", function($scope, $timeout) {

});

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl : '/template/projects.html',
            controller  : 'ProjectsController'
        });
});