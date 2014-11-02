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

// events
$(function() {
    $(document).click(function() {
        $(".wrapper-dropdown").removeClass("active");
    });

    $(".wrapper-dropdown").on("click", function() {
        $(this).toggleClass("active");
        return false;
    });
});