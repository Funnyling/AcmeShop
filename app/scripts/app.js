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
  .module('acmeShopApp', [
    'ngResource',
    'ui.router',
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
            controller: 'aboutController',
            templateUrl: 'views/about.html'
          }
        }

      });
  }]);
