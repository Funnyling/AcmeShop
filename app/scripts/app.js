'use strict';

/**
 * @ngdoc overview
 * @name acmeshopApp
 * @description
 * # acmeshopApp
 *
 * Main module of the application.
 */
angular
  .module('acmeshopApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
