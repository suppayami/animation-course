var app = angular.module('app', ['ngRoute']);

app.controller("ProjectsController", function($scope, $timeout, $document) {
    $document.ready(function() {
        $(".projects-block").css("width", $(window).width() - 324 - 48 - 48);

        $(window).resize(function() {
            $(".projects-block").css("width", $(window).width() - 324 - 48 - 48);
            $(".project-block").each(function() {
                var width = $(this).find(".main").width();
                var height = $(this).find(".main").height();

                $(this).find(".members").css("height", height - 60);
                // $(this).find(".task").css("top", height);
                $(this).find(".task").css("width", width - 64);
                $(this).find(".task").css("left", 32);
            });
        });

        $(".project-block").each(function() {
            var width = $(this).find(".main").width();
            var height = $(this).find(".main").height();

            $(this).find(".members").css("height", height - 60);
            // $(this).find(".task").css("top", height);
            $(this).find(".task").css("width", width - 64);
            $(this).find(".task").css("left", 32);

            // $(this).css("height", height + $(this).find(".task").height() + 32);
        });
    });
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