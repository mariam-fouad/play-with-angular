'use strict';

describe('Service: orderManger', function () {

  // load the service's module
  beforeEach(module('udaciMealsApp'));

  // instantiate service
  var orderManger;
  beforeEach(inject(function (_orderManger_) {
    orderManger = _orderManger_;
  }));

  it('should do something', function () {
    expect(!!orderManger).toBe(true);
  });

});
