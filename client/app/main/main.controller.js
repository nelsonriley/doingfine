'use strict';

angular.module('doingFineApp')
  .controller('MainCtrl', function ($scope, $http, socket) {

    // THIS IS KEPT FOR REFERENCE ON HOW TO IMPLEMENT SOCKET.IO FUNCTIONALITY IN
    // THE CONTROLLER

    // $http.get('/api/things').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
    //   socket.syncUpdates('thing', $scope.awesomeThings);
    // });
    //
    // $scope.addThing = function() {
    //   if($scope.newThing === '') {
    //     return;
    //   }
    //   $http.post('/api/things', { name: $scope.newThing });
    //   $scope.newThing = '';
    // };
    //
    // $scope.deleteThing = function(thing) {
    //   $http.delete('/api/things/' + thing._id);
    // };
    //
    // $scope.$on('$destroy', function () {
    //   socket.unsyncUpdates('thing');
    // });
  });
