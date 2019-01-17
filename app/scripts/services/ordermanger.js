'use strict';

/**
 * @ngdoc service
 * @name udaciMealsApp.orderManger
 * @description
 * # orderManger
 * Service in the udaciMealsApp.
 */
angular.module('udaciMealsApp')
  .service('orderManger', function () {
    let activeDay = "Monday";
    let orderSelection = {
      Monday:{
        breakfast:'',
        lunch:'',
        dinner:''
      },
      Tuesday:{
        breakfast:'',
        lunch:'',
        dinner:''
      },
      Wednesday:{
        breakfast:'',
        lunch:'',
        dinner:''
      },
      Thursday:{
        breakfast:'',
        lunch:'',
        dinner:''
      },
      Friday:{
        breakfast:'',
        lunch:'',
        dinner:''
      }
    };

  this.getActiveDay =()=>{
    return activeDay;
  };

  this.setActiveDay = (day)=>{
    this.activeDay=day;
  };

  this.getOrderSelection=()=>{
    return orderSelection;
  }

  this.setOrderSelection = (meal , menuItem)=>{
    orderSelection[activeDay][meal]=menuItem;
  };

  this.clearOrderSelection = (day,meal)=>{
    orderSelection[day][meal]="";
  };

  });
