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

    var ContactInfo = function(name, phoneNumber, emailAddress) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.emailAddress = emailAddress;
    };

    ContactInfo.prototype.getName = function() {
      return this.name;
    };

    ContactInfo.prototype.getPhoneNumber = function() {
      return this.phoneNumber;
    };

    ContactInfo.prototype.getEmailAddress = function() {
      return this.emailAddress;
    };

    
    return ContactInfo;
    
  });
