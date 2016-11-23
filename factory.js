angular.module('factoria', ['firebase'])
  .factory('chat', chatFn);

  chatFn.$inject = ['$firebase'];
  function chatFn($firebase) {
		// var ref = new Firebase('https://chat-c38f0.firebaseio.com');
    firebase.initializeApp({
        apiKey      : 'AIzaSyB6_N6pO3lMrPir9FQIUv_ObROPuZeFG24',
        authDomain  : 'chat-c38f0.firebaseapp.com',
        databaseURL : 'https://chat-c38f0.firebaseio.com',
        storageBucket: '.appspot.com',
        messagingSenderId : 71625992814
      });

    // function getConfig(scope) {
    //   return {
    //     apiKey      : scope.apiKey,
    //     authDomain  : scope.projectId + '.firebaseapp.com',
    //     databaseURL : 'https://' + scope.databaseName + '.firebaseio.com',
    //     storageBucket: scope.databaseName + '.appspot.com',
    //     messagingSenderId : scope.senderId
    //   };
    // }

		// var messages = $firebase(ref.child('chat')).$asArray();
    function getAll() {
      firebase.database().ref('chat').once('value').then(function(data) {
          return data;
      });
    }


    function create(message) {
      return messages.push(message);
    }

    function get(messageId) {
      return $firebase(collection.child(messageId)).$asObject();
    }

    function deleteFn(message) {
      return messages.pop(message);
    }

		var chat = {
			all    : getAll,
			create : create,
			get    : get,
			delete : deleteFn
		};

		return chat;


	}
