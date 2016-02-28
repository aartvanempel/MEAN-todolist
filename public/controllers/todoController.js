angular.module('todoController', [])

  .controller('todoCtrl', function($scope, $http, todoFactory) {
    $scope.todoData = {};

    function getTodos() {
      todoFactory.get()
      .success(function(data) {
        $scope.todos = data;
      });
    } getTodos(); // fire

    $scope.createTodo = function() {
      todoFactory.create($scope.todoData)
      .success(function(data) {
        $scope.todos = data;
      });
    }

    $scope.deleteTodo = function(id) {
      todoFactory.delete(id)
      .success(function(data) {
        $scope.todos = data;
      });
    }

    $scope.checkTodo = function(id) {
      todoFactory.updateTodoCheck(id)
    }

    $scope.updateTodo = function(id) {
      todoFactory.update(id, $scope.todoData)
      .success(function(data) {
        $scope.todos = data;
        getTodos();
      });
    }

  });
