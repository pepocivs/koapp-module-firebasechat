(function() {
  'use strict';

  angular
    .module('koapp-Module-Firebasechat', [])
    .controller('koapp-Module-FirebasechatController', loadFunction);

  loadFunction.$inject = ['$scope', 'structureService', '$location'];

  function loadFunction($scope, structureService, $location) {
    // Register upper level modules
    structureService.registerModule($location, $scope, 'koapp-Module-Firebasechat');
    // --- Start koapp-Module-FirebasechatController content ---
    console.info('Hi! from koapp-Module-FirebasechatController');
    // --- End koapp-Module-FirebasechatController content ---
  }
}());
