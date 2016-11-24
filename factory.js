angular.module('factoria', ['firebase'])
  .factory('firechat', firechat);

  firechat.$inject = ['$firebaseArray'];
  function firechat($firebaseArray) {

    firebase.initializeApp({
      apiKey      : 'AIzaSyB6_N6pO3lMrPir9FQIUv_ObROPuZeFG24',
      authDomain  : 'chat-c38f0.firebaseapp.com',
      databaseURL : 'https://chat-c38f0.firebaseio.com',
      storageBucket: '.appspot.com',
      messagingSenderId : 71625992814
    });

    // apiKey      : $scope.apiKey,
    // authDomain  : $scope.projectId + '.firebaseapp.com',
    // databaseURL : 'https://' + $scope.databaseName + '.firebaseio.com',
    // storageBucket: $scope.databaseName + '.appspot.com',
    // messagingSenderId : $scope.senderId

    var ref = firebase.database().ref('messages');
    var messages = $firebaseArray(ref);

    function add(scope) {
      return messages.$add({
        userName: scope.message.userName,
        message: scope.message.message
      });
    }

		var functions = {
			getAll   : messages,
			add      : add
		};

		return functions;

	}
