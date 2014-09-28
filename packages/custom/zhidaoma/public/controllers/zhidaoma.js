'use strict';

angular.module('mean.zhidaoma').controller('ZhidaomaController', ['$scope', 'Global', 'Zhidaoma',
  function($scope, Global, Zhidaoma) {
    $scope.global = Global;
    $scope.package = {
      name: 'zhidaoma'
    };
  }
]);
