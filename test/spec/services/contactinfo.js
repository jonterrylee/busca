'use strict';

describe('Service: ContactInfo', function () {

  // load the service's module
  beforeEach(module('businessCardParserApp'));

  // instantiate service
  var ContactInfo;
  beforeEach(inject(function (_ContactInfo_) {
    ContactInfo = _ContactInfo_;
  }));

  it('should do something', function () {
    expect(!!ContactInfo).toBe(true);
  });

});
