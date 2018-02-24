'use strict';

angular.
  module('homePage').
  component('homePage', {
    templateUrl: 'HomePage/homePage.template.html',
    controller: ['commonServiceSerivice','$scope','NgMap',
      function PhoneListController(commonServiceSerivice,$scope,NgMap) {
        var vm = this;
         var mapView = false;
         var listView = false;
         var Eventview = false;
         var moLat = '';
         var moLon = '';
         var moName = '';
        var restaurant;
        var eventsList;
        $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyC9Xg0gNa2p-FbJweovH6kZOwAiU_5zQu8";
        // this.phones = commonServiceSerivice.query();
        this.orderProp = 'age';
        commonServiceSerivice.getList().then(function(response) {
          debugger
          $scope.restaurant = response.data.restaurants.restaurant;
        })
        commonServiceSerivice.getEvents().then(function(response){
          debugger
          $scope.eventsList = response.data.EventList;
        })

        NgMap.getMap().then(function(map) {
          // console.log(map.getCenter());
          // console.log('markers', map.markers);
          // console.log('shapes', map.shapes);
        });

        $scope.listViewFun = function(){
          debugger
         $scope.listView = true;
         $scope.Eventview = false;
         $scope.mapView = false;
        }
        $scope.mapViewFun = function(){
          debugger
         $scope.listView = false;
         $scope.Eventview = false;
         $scope.mapView = true;
        }
        $scope.eventViewFun = function(){
          debugger
         $scope.listView = false;
         $scope.Eventview = true;
         $scope.mapView = false;
        }
        $scope.modelMap = function(res){
          debugger
          $scope.moLat = res.latitude;
          $scope.moLon = res.longitude;
          $scope.moName = res.name;

        }
      }
    ]
  });
