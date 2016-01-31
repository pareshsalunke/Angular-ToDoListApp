var app = angular.module('todo', []);
    app.controller('ToDoCtrl', ['$scope', function($scope) {
        
        $scope.tasklist = []; //Array to hold all the tasks 
        $scope.priority = 'normal';
        
        /*Invoked when a task is added*/
        $scope.addTask = function() {
            
            if(event.keyCode == 13 && $scope.taskName) {
                $scope.tasklist.push({"name": $scope.taskName, "completed": false, "priority": $scope.priority});   
                $scope.taskName = "";
                $scope.priority = 'normal';
             }
        }
        
        $scope.deleteTask = function(index) {
            $scope.tasklist.splice(index, 1);
        }

    }]);