'use strict';

/**
 * @ngdoc service
 * @name businessCardParserApp.ContactInfo
 * @description
 * # ContactInfo
 * Factory in the businessCardParserApp.
 */
angular.module('businessCardParserApp')
  .factory('ContactInfo', function () {

    // Private
    var name, phoneNumber, emailAddress;

    // Constructor
    var ContactInfo = function(_name, _phoneNumber, _emailAddress) {
        name = _name;
        phoneNumber = _phoneNumber;
        emailAddress = _emailAddress;
    };


    // Pubic API
    ContactInfo.prototype.getName = function() {
      return name;
    };

    ContactInfo.prototype.getPhoneNumber = function() {
      return phoneNumber;
    };

    ContactInfo.prototype.getEmailAddress = function() {
      return emailAddress;
    };
    
    return ContactInfo;
    
  });
