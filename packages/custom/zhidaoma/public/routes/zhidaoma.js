'use strict';

angular.module('mean.zhidaoma').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('zhidaoma example page', {
      url: '/zhidaoma/example',
      templateUrl: 'zhidaoma/views/index.html'
    });
  }
]);
