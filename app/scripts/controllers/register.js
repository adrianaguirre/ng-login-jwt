'use strict';

/**
 * @ngdoc function
 * @name ngLoginJwtApp.controller:RegisterController
 * @description
 * # RegisterController
 * Controller of the ngLoginJwtApp
 */

angular.module('ngLoginJwtApp').controller(
    'RegisterController', function($scope, $rootScope, $http, alert) {
        $scope.submit = function() {

            var url = '/';
            var user = {};

            $http.post(url, user).success(
                function(res) {
                    alert('warning', 'OK!', 'Thanks for registering!');
                }
            ).error(
                function(err) {
                    alert('warning', 'Oops!', 'Could not register!');
                }
            );
        };
    }
);
