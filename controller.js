(function() {
  'use strict';

  angular
    .module('firebasechat', ['firebase'])
    .controller('firebasechatController', loadFunction);

  loadFunction.$inject = ['$scope', 'structureService', '$location', 'firechat'];
  function loadFunction($scope, structureService, $location, firechat) {

    structureService.registerModule($location, $scope, 'firebasechat');

    $scope.message = {
      'userName': 'Guest',
      'message': ''
    }
    $scope.insertMessage = insertMessage;

    firechat.setFirebase($scope);
    $scope.messages = firechat.getAll;
    applyScope();


    function insertMessage() {
      firechat.add($scope)
    }

    function applyScope() {
      if (!$scope.$$phase) {
        $scope.$apply();
      }
    }
  }
}());
