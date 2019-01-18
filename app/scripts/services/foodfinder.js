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
        "description":'Smoth rich coconut ice cream with hot creamy choclate syrup',
        "calories":"500 per serving",
        "reviews":["Best Ice cream EVERRR !", "I can't have enough of it "]
      },
      {
        "id":"bbq-chicken-ramen",
        "name":"BBQ Chicken Ramen",
        "img":"bbq-chicken-ramen.jpg",
        "rating":4.4,
        "description":'hot fresh ramen noodels with tender BBQ chicken',
        "calories":"400 per serving",
        "reviews":["I enjoy the mix of flavours in this dish", "Too spicey for me"]
      },
      {
        "id":"beef-steak-soft-tacos",
        "name":"Beef Steak Soft Tacos",
        "img":"beef-steak-soft-tacos.jpg",
        "rating":3.9,
        "description":'strong flavour beef steak with soft tacos',
        "calories":"600 per serving",
        "reviews":["The steak was nice but the shell was mah", "Need more flavours!"]
      }
    ]
    this.getMenu=()=>{
      return menu;
    }

    this.getMenuID = (itemId)=>{
     return  menu.find((menuItem)=>{
        if(menuItem.id==itemId){
          return menuItem;
        }
      });
    }
  });
