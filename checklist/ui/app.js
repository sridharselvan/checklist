var app = angular.module('ChecklistApp', []);

app.controller('ChecklistController', function($scope, $http) {
  $scope.tasks = [];
  $scope.newTask = '';

  // Fetch tasks from the backend
  $scope.getTasks = function() {
    $http.get('http://localhost:5000/tasks').then(function(res) {
      $scope.tasks = res.data;
    });
  };

  // Add a new task
  $scope.addTask = function() {
    if ($scope.newTask.trim()) {
      $http.post('http://localhost:5000/tasks', { title: $scope.newTask }).then(function() {
        $scope.getTasks();
      });
      $scope.newTask = '';  // Reset input field
    }
  };

  // Mark task as done
  $scope.toggleDone = function(task) {
    task.done = !task.done;
    $http.put(`http://localhost:5000/tasks/${$scope.tasks.indexOf(task)}`, { done: task.done }).then(function() {
      $scope.getTasks();
    });
  };

  // Delete a task
  $scope.deleteTask = function(index) {
    $http.delete(`http://localhost:5000/tasks/${index}`).then(function() {
      $scope.getTasks();
    });
  };

  // Initial load of tasks
  $scope.getTasks();
});
