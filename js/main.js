var app = angular.module('app', ['ngRoute']);

app.controller("ProjectsController", function($scope, $timeout, $document) {
    $scope.fullyLoad = false;
    $document.ready(function() {
        $(".projects-block").css("width", $(window).width() - 324 - 48 - 48);

        $(window).resize(function() {
            $(".projects-block").css("width", $(window).width() - 324 - 48 - 48);
            $(".project-block").each(function() {
                var width = $(this).find(".main").width();
                var height = $(this).find(".main").height();

                $(this).find(".members").css("height", height - 60);
                $(this).find(".task").css("width", width - 64);
                $(this).find(".task").css("left", 32);
            });
        });

        $(".project-block").each(function() {
            $(this).find(".description").toggleClass("max-height");
            $(this).find(".row-1").toggleClass("max-height");
            var width = $(this).find(".main").width();
            var height = $(this).find(".row-1").height();
            $(this).find(".description").toggleClass("max-height");
            $(this).find(".row-1").toggleClass("max-height");

            $(this).find(".members").css("height", height - 60);
            $(this).find(".task").css("width", width - 64);
            $(this).find(".task").css("left", 32);
        });

        var fuckProject = function(selector) {
            selector.find(".description").toggleClass("max-height");
            selector.find(".row-1").toggleClass("max-height");
            var width = selector.find(".main").width();
            var height = selector.find(".row-1").height();
            selector.find(".description").toggleClass("max-height");
            selector.find(".row-1").toggleClass("max-height");

            selector.find(".members").toggleClass("max-width");
            selector.find(".task").toggleClass("max-height");
            var members = selector.find(".members").width();
            var task = selector.find(".task").height();
            selector.find(".members").toggleClass("max-width");
            selector.find(".task").toggleClass("max-height");

            var expanded = selector.hasClass("active");
            if (expanded) {
                selector.find(".task").animate({
                    maxHeight: "0",
                    opacity: 0
                }, 500);

                setTimeout(function() {
                    selector.find(".members").animate({
                        maxWidth: "0",
                        opacity: 0
                    }, 500);
                }, 150);

                setTimeout(function() {
                    selector.find(".row-1").animate({
                        maxHeight: "32px"
                    }, 500);
                    selector.find(".description").animate({
                        maxHeight: "0"
                    }, 500);

                    selector.toggleClass("active");
                }, 750);
            } else {
                selector.toggleClass("active");
                setTimeout(function() {
                    selector.find(".row-1").animate({
                        maxHeight: height + "px"
                    }, 500);
                    selector.find(".description").animate({
                        maxHeight: height + "px"
                    }, 500);
                }, 150);

                setTimeout(function() {
                    selector.find(".members").animate({
                        maxWidth: members + "px",
                        opacity: 1
                    }, 500);
                }, 850);

                setTimeout(function() {
                    selector.find(".task").animate({
                        maxHeight: task + "px",
                        opacity: 1
                    }, 500);
                }, 700);
            }
        };

        setTimeout(function() {
            fuckProject($("#project1"));
            $scope.fullyLoad = true;
        }, 1550);

        $(".project-block .main .header").click(function() {
            fuckProject($(this).parent().parent().parent().parent());
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