'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the udaciMealsApp
 */
angular.module('udaciMealsApp')
  .controller('MenuCtrl',['foodFinder' ,'orderManger', function (menu , orderManger) {
    this.items = menu.getMenu();

    this.incrementRating=(item)=>{
      item.rating = ((item.rating*10) + 1)/10;
      if(item.rating>5){
        item.rating=5.0;
      }
    };

    this.decrementRating=(item)=>{
      item.rating = ((item.rating*10) - 1)/10;
      if(item.rating<0){
        item.rating=0.0;
      }
    };
    
    this.choseItem=(meal , menuItem)=>{
      console.log(meal +" "+ menuItem);

      orderManger.setOrderSelection(meal,menuItem);
    }
  }]);
