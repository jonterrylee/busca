'use strict';

/**
 * @ngdoc service
 * @name businessCardParserApp.BusinessCardParser
 * @description
 * # BusinessCardParser
 * Service in the businessCardParserApp.
 */
angular.module('businessCardParserApp')
  .service('BusinessCardParser', function (ContactInfo, $sanitize) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getContactInfo = function(ocrData) {

    	var tokenizedData = tokenizeData(ocrData);
    	
    	var email = parseEmail(tokenizedData);
    	var phone = parsePhoneNumber(tokenizedData);
    	var name = parseName(tokenizedData, email);

    	var contactInfo = new ContactInfo(name, phone, email);

    	return contactInfo;

    };

  
    /**
     * Tokenize and sanitizes the data
     *
     * @param  {ocrData}  OCR Text Data
     * @return {tokens}
     */
    function tokenizeData(ocrData) {

    	var sanitizedData = $sanitize(ocrData.split(/\r?\n/));

    	return sanitizedData.split(',');
    }

  	/**
     * Parses text for phone number
     *
     * @param  {tokenizedData}  OCR Text Data Array
     * @return {phone}
     */
    function parsePhoneNumber(tokenizedData) {

    	// matches any non number
    	var re = /[^0-9]/g;

    	for (var i in tokenizedData) {

    		// remove non numberic chars
    		var possiblePhone = tokenizedData[i].replace(re, '');

    		// usually phone number is before fax
    		// could look for hint (tel, phone, fax, etc.)
    		if (possiblePhone.length >= 10) {
    			return possiblePhone;
    		}
    	}
    }

    /**
     * Parses texts for email address
     *
     * @param  {tokenizedData}  OCR Text Data Array
     * @return {email}
     */
    function parseEmail(tokenizedData) {

    	// w+ (any word occurance)
    	// match period - if there
    	// w+ (any word occurance)
    	// match @
    	// w+
    	// match symbol
    	// w 2-3 times
    	var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    	
    	for (var i in tokenizedData) {
    	  if (re.test(tokenizedData[i])) {
    	  	return tokenizedData[i].match(re)[0];
    	  }
    	}
    }


    /**
     * Parses text for name
     *
     * @param  {tokenizedData}  OCR Text Data Array
     * @return {name}
     */
    function parseName(tokenizedData, email) {
    	var possibleName = '';

    	if (email !== undefined) {
    		possibleName = email.substring(0, email.indexOf('@'));
    	}

    	// test if name could be in email
    	for (var i in tokenizedData) {
    		// tokenize name
    		var token = tokenizedData[i].split(/\s+/);

    		for (var j in token) {
	    		if (possibleName.toLowerCase().indexOf(token[j].toLowerCase()) > -1) {
	    			return tokenizedData[i];
	    		}
    		}
    	}

    }

  });
