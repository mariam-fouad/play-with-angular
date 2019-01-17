'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the udaciMealsApp
 */
angular.module('udaciMealsApp')
  .controller('MenuCtrl',['foodFinder' ,  function (menu) {
    this.items = "";
    
    menu.getMenu().then((data)=>{
      this.items=data;
    })

    

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
    
  }]);
