'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:ItemCtrl
 * @description
 * # ItemCtrl
 * Controller of the udaciMealsApp
 */
angular.module('udaciMealsApp')
  .controller('ItemCtrl', ['$stateProvider','foodFinder',function ($stateProvider,foodFinder) {
    this.itemData = foodFinder.getMenuID($stateProvider.id);
  }]);
