angular.module('WorkoutApp').controller('DetailCtrl',function($scope){

	var DATA = 	{

		name: 'Bench press',
		targets: ['Chest', 'Triceps'],
		variations: ["Inclined", "Declined"],
		movement: "Compound"

	};

	$scope.workout = {};

	var initialize = (function(){

		Object.keys(DATA).forEach(function(key) {
		    $scope.workout[key] = DATA[key];
		});

	})();

});