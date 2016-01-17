angular.module('WorkoutApp').controller('DetailCtrl', ['$scope','excercises','$routeParams', function($scope, excercises, $routeParams ) {

	$scope.excercises = excercises;
	$scope.excercise = excercises.list[$routeParams.excersiceId];

	var initialize = (function(){

		console.log($scope.excercise);

		if (typeof $scope.excercise.details.video != undefined) {
			
			$scope.video = $scope.excercise.details.video;
			var youtubeid = $scope.video.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
			if(youtubeid != null) {
			   $scope.youtubeid = youtubeid[1];
			}

		}


	})();

}]);