import './directives/sol-vibrate';
import 'angular';
export default angular.module('ui.mediaBar', ['services', 'solVibrate'])
    .directive('mediaBar', [function() {
        var definitions = {
            restrict: 'E',
            templateUrl: '/html/panel-switcher/media-bar.html',
            replace: true,
            scope: true,
            controller: function($scope, $element, $attrs, $transclude) {
                $scope.switch = function(elId, name) {
                    var curPanels = document.querySelectorAll('.media-panel .current-panel'),
                        curLabel = $element[0].querySelector('.active'),
                        newLabel = $element[0].querySelector('[data-name="' + name + '"]');
                    Array.prototype.forEach.call(curPanels, function(el) {
                        el.classList.remove('current-panel');
                    });

                    document.getElementById(elId).classList.add('current-panel');

                    if (curLabel)
                        curLabel.classList.remove('active');
                    if (newLabel)
                        newLabel.querySelector('.title').classList.add('active');
                };

                setTimeout(function() {
                    $scope.switch('media-panel-related', 'related');
                }, 10);
            }

        };

        return definitions;
    }]);
