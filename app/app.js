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
    .when("/adduser", {
      templateUrl : "views/adduser.htm",
      controller : "userCtrl"
    })
    .when("/sale", {
      templateUrl : "views/sale.htm",
      controller : "appCtrl"
    })
    .when("/products", {
      templateUrl : "views/products.htm",
      controller : "appCtrl"
    })
    .when("/customers", {
      templateUrl : "views/customers.htm",
      controller : "appCtrl"
    })
    .when("/suppliers", {
      templateUrl : "views/suppliers.htm",
      controller : "appCtrl"
    });
  });