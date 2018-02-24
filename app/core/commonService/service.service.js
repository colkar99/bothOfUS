'use strict';

angular.
  module('commonService').
  service('commonServiceSerivice', ['$http',
    function($http) {
      var vm =this;
      // return $resource('phones/:phoneId.json', {}, {
      //   query: {
      //     method: 'GET',
      //     params: {phoneId: 'phones'},
      //     isArray: true
      //   }
      // });

        this.getList =  function () {
          debugger
          return $http.get("http://www.opendatamalta.org/ckan/dataset/1d5df898-1481-42cf-85a5-673c6cdec65e/resource/73e13022-0ae6-445e-9bb5-d3d91f154a7b/download/restaurants.json").then(function(response) {
                           return response;
              });
        };
        this.getEvents =  function () {
          debugger
          return $http.get("http://www.opendatamalta.org/ckan/dataset/dfdefba9-745e-4618-bddd-fbd179e910c8/resource/90f81009-fbc9-41ef-b031-fe3ae8bef03b/download/events.json").then(function(response) {
                           return response;
              });
        };

    }
  ]);
