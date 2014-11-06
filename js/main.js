var app = angular.module('app', ['ngRoute', 'ngAnimate']);

app.controller("ProjectsController", function($scope, $timeout, $document, $location) {
    $scope.isChange = false;
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
                }, 300);

                setTimeout(function() {
                    selector.find(".members").animate({
                        maxWidth: "0",
                        opacity: 0
                    }, 300);
                }, 50);

                setTimeout(function() {
                    selector.find(".row-1").animate({
                        maxHeight: "32px"
                    }, 300);
                    selector.find(".description").animate({
                        maxHeight: "0"
                    }, 300);

                    selector.toggleClass("active");
                }, 375);
            } else {
                selector.toggleClass("active");
                setTimeout(function() {
                    selector.find(".row-1").animate({
                        maxHeight: height + "px"
                    }, 300);
                    selector.find(".description").animate({
                        maxHeight: height + "px"
                    }, 300);
                }, 50);

                setTimeout(function() {
                    selector.find(".members").animate({
                        maxWidth: members + "px",
                        opacity: 1
                    }, 300);
                }, 500);

                setTimeout(function() {
                    selector.find(".task").animate({
                        maxHeight: task + "px",
                        opacity: 1
                    }, 300);
                }, 400);
            }
        };

        setTimeout(function() {
            fuckProject($("#project1"));
            $scope.fullyLoad = true;
        }, 1550);

        $(".project-block .main .header").click(function() {
            fuckProject($(this).parent().parent().parent().parent());
        });

        $scope.$on("$locationChangeStart", function (event, newUrl, oldUrl) {
            var baseLen = $location.absUrl().length - $location.url().length;
            $(".project-block").each(function() {
                if ($(this).hasClass("active")) {
                    fuckProject($(this));
                }
            });

            setTimeout(function() {
                $(".project-block").each(function() {
                    $(this).addClass("fadeOutRight");
                });
            }, 675);

            setTimeout(function() {
                $("#profile").addClass("fadeOutLeft");
            }, 675);

            $timeout(function() {
                $scope.isChange = true;
                $location.path(newUrl.substring(baseLen));
                return;
            }, 1800);

            if ($scope.isChange == false)
                event.preventDefault();
        });
    });
});

app.controller("CreateController", function($scope, $document, $location) {
    $scope.phasesNumber = 1;
    $scope.getNumber = function(num) {
        return new Array(num);
    }
});

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl : '/template/projects.html',
            controller  : 'ProjectsController'
        })
        .when('/create', {
            templateUrl : '/template/new_project.html',
            controller  : 'CreateController'
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