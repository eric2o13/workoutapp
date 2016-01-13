angular.module('WorkoutApp').factory('filterExercises',function() {

	var filterExercises = {};

	return function (input, filtervalue) {

		var filteredInput =[];

		angular.forEach(input, function(excercise){
			angular.forEach(excercise.targets, function(value, key){
				if (value === filtervalue) {
					filteredInput.push(excercise);
				}
			});
		});

		return filteredInput;

	};

});