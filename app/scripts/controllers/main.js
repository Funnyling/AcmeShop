'use strict';

/**
 * @ngdoc function
 * @name acmeshopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the acmeshopApp
 */
angular.module('acmeshopApp')
  .controller('mainController', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
