angular.module('todoService', [])

  .factory('todoFactory', function($http) {
    return {
      get: function() {
        return $http.get('/todos');
      },
      create: function(newTodo) {
        return $http.post('/todos', newTodo);
      },
      delete: function(id) {
        return $http.delete('/todos/' + id);
      },
      updateTodoCheck: function(id) {
        return $http.put('/todos_check/' + id);
      },
      update: function(id, newText) {
        return $http.put('/todos/' + id, newText);
      }
    }
  });
