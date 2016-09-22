'use strict';

angular.module('chattyApp')
  .factory('messageService', function ( $http ) {
    return {
      getMessages: function () {
        return $http.get('http://localhost:8989/api/messages');
      },

      addMessage: function ( message ) {
        return $http.post('http://localhost:8989/api/messages', { message: message });
      }
    };
  });
