'use strict';

/**
 * @ngdoc service
 * @name udaciMealsApp.foodFinder
 * @description
 * # foodFinder
 * Service in the udaciMealsApp.
 */
angular.module('udaciMealsApp')
  .service('foodFinder', function () {
    this.menu=[
      {
        "id":"coconut-chocolate-icecream",
        "name":"Coconut Chocolate Ice cream",
        "img":"coconut-chocolate-icecream.jpg",
        "rating":4.9
      },
      {
        "id":"bbq-chicken-ramen",
        "name":"BBQ Chicken Ramen",
        "img":"bbq-chicken-ramen.jpg",
        "rating":4.4
      },
      {
        "id":"beef-steak-soft-tacos",
        "name":"Beef Steak Soft Tacos",
        "img":"beef-steak-soft-tacos.jpg",
        "rating":3.9
      }
    ]
    this.getMenu=()=>{
      return this.menu;
    }
  });
