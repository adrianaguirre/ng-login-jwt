'use strict';

/**
 * @ngdoc directive
 * @name ngLoginJwtApp.directive:sameAs
 * @description
 * # sameAs
 */
angular.module('ngLoginJwtApp').directive('validateEquals', function () {
    return {
        require: 'ngModel',

        // Use link to get access to various dom elements
        link   : function (scope, element, attrs, ngModelController) {


            // A function to make comparison.
            // Set elements class to isValid or valid depending on if it matches or not
            function validateEqual(value) {
                // Check elements value against the supplied value.
                // The confirmed password against the initial password.
                // TODO: spike $eval
                // TODO: spike $setValidity

                var valid = (value === scope.$eval(attrs.validateEquals));
                ngModelController.$setValidity('equal', valid);
                return valid ? value : undefined;

            }

            // Comparison occurs whenever the control reads the value form the dom and when the value changes.
            // The first time it is loaded and on changes thereafter.

            // Register validateEquals as middleware with the $parsers and $formatters pipeline
            // TODO: spike $parsers
            // TODO: spike $formatters
            ngModelController.$parsers.push(validateEqual);
            ngModelController.$formatters.push(validateEqual);

            // In order to trigger the formatter, we need to set up callback using watch
            // TODO: spike $watch
            // TODO: spike $setViewValue
            // TODO: spike $viewValue
            scope.$watch(attrs.validateEquals, function(){
                ngModelController.$setViewValue(ngModelController.$viewValue);
            })

        }
    };
});
