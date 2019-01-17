'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the udaciMealsApp
 */
angular.module('udaciMealsApp')
  .controller('MenuCtrl', function () {
    this.items =[
      {
        id:"coconut-chocolate-icecream",
        name:"Coconut Chocolate Ice cream",
        img:"coconut-chocolate-icecream.jpg",
        rating:4.9
      },
      {
        id:"bbq-chicken-ramen",
        name:"BBQ Chicken Ramen",
        img:"bbq-chicken-ramen.jpg",
        rating:4.4
      },
      {
        id:"beef-steak-soft-tacos",
        name:"Beef Steak Soft Tacos",
        img:"beef-steak-soft-tacos.jpg",
        rating:3.9
      }
    ];
    
  });
