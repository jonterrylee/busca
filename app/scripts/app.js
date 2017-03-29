'use strict';

/**
 * @ngdoc overview
 * @name businessCardParserApp
 * @description
 * # businessCardParserApp
 *
 * Main module of the application.
 */
angular
  .module('businessCardParserApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
