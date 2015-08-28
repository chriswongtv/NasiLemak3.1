angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopup, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/invite.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  $scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Confirm',
     template: 'Are you sure you want to redeem this reward?'
   });
   confirmPopup.then(function(res) {
     if(res) {
      document.getElementsByTagName('canvas')[0].style.height="200px";
      /*document.getElementsByTagName('canvas')[0].style.position="absolute";
      document.getElementsByTagName('canvas')[0].style.z-index="9999";
      document.getElementsByTagName('canvas')[0].style.margin-top="100px";*/
      var start = 100;
var mid = 145;
var end = 250;
var width = 22;
var leftX = start;
var leftY = start;
var rightX = mid + 2;
var rightY = mid - 3;
var animationSpeed = 5;

var ctx = document.getElementsByTagName('canvas')[0].getContext('2d');
ctx.lineWidth = width;
ctx.strokeStyle = 'rgba(39, 174, 96, 1)';

for (i = start; i < mid; i++) {
    var drawLeft = window.setTimeout(function () {
        ctx.beginPath();
        ctx.moveTo(start, start);
        ctx.lineTo(leftX, leftY);
        ctx.lineCap = 'round';
        ctx.stroke();
        leftX++;
        leftY++;
    }, 1 + (i * animationSpeed) / 3);
}

for (i = mid; i < end; i++) {
    var drawRight = window.setTimeout(function () {
        ctx.beginPath();
        ctx.moveTo(leftX + 2, leftY - 3);
        ctx.lineTo(rightX, rightY);
        ctx.stroke();
        rightX++;
        rightY--;
    }, 1 + (i * animationSpeed) / 3);
}
       console.log('You are sure');
     } else {
       console.log('You are not sure');
     }
   });
 };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    document.getElementsByTagName("i").style.class = "icon ion-android-done";
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
