'use strict';

/**
 * @ngdoc function
 * @name businessCardParserApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the businessCardParserApp
 */
angular.module('businessCardParserApp')
  .controller('MainCtrl', function (BusinessCardParser, $http) {

    var self = this;

    this.cardInfo = '';
    this.businessCards = [];

    // Get example data
    $http({
      method: 'GET',
      url: '/assets/mikesmith.txt'
    }).then(function successCallback(response) {
        self.businessCards.push(response.data);
    });

    $http({
      method: 'GET',
      url: '/assets/lisahaung.txt'
    }).then(function successCallback(response) {
        self.businessCards.push(response.data);
    });

    $http({
      method: 'GET',
      url: '/assets/arthurwilson.txt'
    }).then(function successCallback(response) {
        self.businessCards.push(response.data);
    });

    
    // parses the text of the card information
    this.parseCard = function (ocrData) {
      this.contactInfo = BusinessCardParser.getContactInfo(ocrData);
    };

  });
