'use strict';

describe('Service: BusinessCardParser', function () {

  // load the service's module
  beforeEach(module('businessCardParserApp'));

  // instantiate service
  var BusinessCardParser;
  beforeEach(inject(function (_BusinessCardParser_) {
    BusinessCardParser = _BusinessCardParser_;
  }));

  it('should do something', function () {
    expect(!!BusinessCardParser).toBe(true);
  });

});
