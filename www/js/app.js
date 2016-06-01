// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers']);

app.controller('CameraCtrl', function($scope, $cordovaCamera, $ionicLoading, CloudinaryService) {
  $scope.pictureUrl = "http://placehold.it/300x300";
  $scope.hide = true;
  $scope.takePicture = function() {
    var options = {
      // quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      // allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      // targetWidth: 300,
      // targetHeight: 300,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
      correctOrientation:true
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      $scope.pictureUrl = "data:image/jpeg;base64," + imageData;
      $scope.hide = false;
    }, function(err) {
      // error
    });
  };

  $scope.uploadPicture = function() {
    CloudinaryService.uploadImage($scope.pictureUrl).then(
      function(result) {
        $scope.b = 'result: '+JSON.stringify(result);
        var url = result.secure_url || '';
        var urlSmall;
        
        $scope.detect_faces = result.secure_url;

        if(result && result.eager[0]) urlSmall = result.eager[0].secure_url || '';

        // Do something with the results here.

        $cordovaCamera.cleanup();
      },
      function(err) {
        $scope.c = 'error: '+JSON.stringify(err);
        // Do something with the error here
        $cordovaCamera.cleanup();
      });
  };



});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});

app.factory('CloudinaryService', function($q, $ionicLoading, $cordovaFileTransfer, $ionicPlatform) {
  return {
    uploadImage: function(imageURI) {

      var deferred = $q.defer();

        // Add the Cloudinary "upload preset" name to the headers
        var uploadOptions = {
          params : { 'upload_preset': "fxaqvmzv", gravity: "faces:center", crop: "crop"},
          // transformation: {width: 400, height: 400, gravity: "face", radius: "max", crop: "crop"}
        };

        $cordovaFileTransfer
          // Your Cloudinary URL will go here
          .upload("https://api.cloudinary.com/v1_1/omfaer/image/upload", imageURI, uploadOptions)

          .then(function(result) {

            // Let the user know the upload is completed
            $ionicLoading.show({template : 'Upload Completed', duration: 1000});

            // Result has a "response" property that is escaped
            // FYI: The result will also have URLs for any new images generated with
            // eager transformations
            var response = JSON.parse(decodeURIComponent(result.response));
            deferred.resolve(response);

          }, function(err) {

            $ionicLoading.show({template : 'Upload Failed', duration: 3000});
            deferred.reject(err);

          }, function (progress) {

            $ionicLoading.show({template : 'Uploading Photo'});

          });

      return deferred.promise;
    }
  }
});
