'use strict';

/**
 * @ngdoc service
 * @name ngLoginJwtApp.alert
 * @description
 * # alert
 * Service in the ngLoginJwtApp.
 */
angular.module ('ngLoginJwtApp').service (
    'alert', function ($rootScope, $timeout) {
        // AngularJS will instantiate a singleton by calling "new" on this function

        var alertTimeout;

        return function (type, title, message, timeoout) {

            $rootScope.alert = {
                hasBeenShow : true,
                show        : true,
                type        : type,
                message     : message,
                title       : title
            };

            $timeout.cancel (alertTimeout);

            alertTimeout = $timeout (
                function () {
                    $rootScope.alert.show = false;
                }, timeout || 2000
            );

        }
    }
);
