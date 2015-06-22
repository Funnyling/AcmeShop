'use strict';

/**
 * @ngdoc function
 * @name acmeshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the acmeshopApp
 */
angular.module('acmeshopApp')
  .controller('aboutController', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
