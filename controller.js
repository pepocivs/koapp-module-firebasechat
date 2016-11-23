(function() {
  'use strict';

  angular
    .module('firebasechat', ['firebase'])
    .controller('firebasechatController', loadFunction);

  loadFunction.$inject = ['$scope', 'structureService', '$location', 'chat'];
  function loadFunction($scope, structureService, $location, chat) {

    structureService.registerModule($location, $scope, 'firebasechat');


    $scope.user          = 'Guest';
    $scope.messages      = chat.all;
    $scope.insertMessage = chat.create;
    console.log(chat.all);
    applyScope();


    // var scope = $scope.firebasechat.modulescope;
    //
    // // Initialize default application.
    // firebase.initializeApp(getConfig(scope));
    //
    // var collection = firebase.database().ref('chat');
    //
    // collection.once('value').then(function(data) {
    //   $scope.chats = data.val();
    //   console.log($scope.chats);
    //   applyScope();
    // });
    //
    // function getConfig(scope) {
    //   return {
    //     apiKey      : scope.apiKey,
    //     authDomain  : scope.projectId + '.firebaseapp.com',
    //     databaseURL : 'https://' + scope.databaseName + '.firebaseio.com',
    //     storageBucket: scope.databaseName + '.appspot.com',
    //     messagingSenderId : scope.senderId
    //   };
    // }

    function applyScope() {
      if (!$scope.$$phase) {
        $scope.$apply();
      }
    }
  }
}());
