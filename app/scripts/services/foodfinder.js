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
    const menu=[
      {
        "id":"coconut-chocolate-icecream",
        "name":"Coconut Chocolate Ice cream",
        "img":"coconut-chocolate-icecream.jpg",
        "rating":4.9,
        "description":'Smoth rich coconut ice cream with hot creamy choclate syrup'
      },
      {
        "id":"bbq-chicken-ramen",
        "name":"BBQ Chicken Ramen",
        "img":"bbq-chicken-ramen.jpg",
        "rating":4.4,
        "description":'hot fresh ramen noodels with tender BBQ chicken'
      },
      {
        "id":"beef-steak-soft-tacos",
        "name":"Beef Steak Soft Tacos",
        "img":"beef-steak-soft-tacos.jpg",
        "rating":3.9,
        "description":'strong flavour beef steak with soft tacos'
      }
    ]
    this.getMenu=()=>{
      return menu;
    }

    this.getMenuID = (itemId)=>{
      let menutoReturn;
      menu.forEach((menuItem)=>{
        if(menuItem.id==itemId){
          menutoReturn = menuItem;
        }
      });
      return menutoReturn;
    }
  });
