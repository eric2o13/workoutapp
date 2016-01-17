angular.module('WorkoutApp').directive('excerciseVideo', function($sce) {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			video:'='
		},
		templateUrl: 'directive/excercise-video/excercise-video.html',
		link: function(scope, element, attrs, fn) {
	        scope.$watch('video', function (youtubeid) {
          		if (youtubeid) {
	               scope.url = $sce.trustAsResourceUrl("https://www.youtube.com/" + youtubeid);
	           }
	        });

		}
	};
});

