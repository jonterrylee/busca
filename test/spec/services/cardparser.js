'use strict';

describe('Service: cardParser', function () {

  // load the service's module
  beforeEach(module('businessCardParserApp'));

  // instantiate service
  var cardParser;
  beforeEach(inject(function (_cardParser_) {
    cardParser = _cardParser_;
  }));

  it('should do something', function () {
    expect(!!cardParser).toBe(true);
  });

});
