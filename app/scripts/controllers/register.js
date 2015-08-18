'use strict';

/**
 * @ngdoc function
 * @name ngLoginJwtApp.controller:RegisterController
 * @description
 * # RegisterController
 * Controller of the ngLoginJwtApp
 */

angular.module ('ngLoginJwtApp').controller (
    'RegisterController', function ($scope, $http) {
        $scope.submit = function () {

            var url = "/";
            var user = {};

            $http.post (url, user).success (
                function (res) {
                    console.log ('res');
                }
            ).error (
                function (err) {
                    console.log ('err');
                }
            )
        }
    }
);
