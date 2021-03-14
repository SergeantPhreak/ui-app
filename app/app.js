var app = angular.module("angularApp", ['ngRoute','ngCookies']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "views/home.htm",
      controller : "homeCtrl"
    })
    .when("/login", {
      templateUrl : "views/login.htm",
      controller : "userCtrl"
    })
    .when("/register", {
      templateUrl : "views/register.htm",
      controller : "userCtrl"
    });
  });