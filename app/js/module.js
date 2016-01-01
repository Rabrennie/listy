import _ from 'lodash';

const module = angular.module('Listy', ['ui.router']);

module.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/start');

  $stateProvider

      .state('start', {
        url: '/start',
        templateUrl: './partials/add-list.html',
        controller: 'List'
      })

      .state('choose', {
        url: '/choose',
        templateUrl: './partials/choose.html',
        controller: 'List'
      })

      .state('result', {
        url: '/result',
        templateUrl: './partials/result.html',
        controller: 'List'
      });

});
module.run(($rootScope) => $rootScope._ = _);

export default module;
