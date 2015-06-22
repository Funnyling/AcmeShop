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
    'ui.router'
  ])
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        views: {
          content: {
            controller: 'mainController',
            templateUrl: 'views/main.html'
          }
        }
      })
      .state('about', {
        url: '/about',
        views: {
          content: {
            controller: 'aboutCtrl',
            templateUrl: 'views/about.html'
          }
        }

      });
  }]);
