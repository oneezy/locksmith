angular.module("angular-carousel").directive("rnCarouselControls",[function(){return{restrict:"A",replace:!0,scope:{items:"=",index:"="},link:function(n){n.prev=function(){n.index>0&&n.index--},n.next=function(){n.index<n.items.length-1&&n.index++}},templateUrl:"carousel-controls.html"}}]),angular.module("angular-carousel").run(["$templateCache",function(n){n.put("carousel-controls.html",'<div class="rn-carousel-controls">\n  <span class="rn-carousel-control rn-carousel-control-prev" ng-click="prev()" ng-if="index > 0"></span>\n  <span class="rn-carousel-control rn-carousel-control-next" ng-click="next()" ng-if="index < items.length - 1"></span>\n</div>')}]);