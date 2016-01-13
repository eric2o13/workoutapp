angular.module('WorkoutApp').controller('ListCtrl',function($scope, $filter, excercises){

	$scope.excercises = excercises;
	$scope.training = {};

	/*
		
		Voorbeeld van een actial chest workout
		
********
james123

		- Heavy Inclined Dumbbell Presses - 2 sets 8 - 10 reps
		- Weighted Dips - 1 sets of 12 reps
		- One arm Dumbbell Press - 3 sets  of 10 sets
		- Lateral shuffle pushups - 3 sets of 30 seconds
		- 3D Chest chiselers 3 sets of 12 reps
		
		Rules:

		- Min 10 sets - Max 14 sets.
	*/

	var Training = function( workouttype ){
		
		var maximumExcercises = 4;

		this.musclesworked = [];
		this.intensity = 1 || 2 || 3;
		this.excercises = ( function(){

			var filteredArray = excercises.filter( $scope.excercises.list, workouttype );
			var shuffledArray = $scope.shuffle( filteredArray );
			var selectedExcercises = [];
			
			for ( var x = 0, excercise; x < shuffledArray.length; x++ ) {

				excercise = shuffledArray[x];
				selectedExcercises.push(excercise);
				if (x === maximumExcercises - 1) {
					return selectedExcercises;
				}

			}

			return selectedExcercises;

		})();

		var excercisesArray = this.excercises;
		var primaryMuscles = [];
		var secondaryMuscles = [];

		$.each(excercisesArray, function(i){
			
			var excercise = excercisesArray[i];

			for (var x = 0; x < excercise.targets[0].length; x++ ) {
				//alleen pushen if unique?
				//of is het eventueel handig om een rating bij te houden?
				//we kunnen ze later toch gewoon filteren.
				primaryMuscles.push(excercise.targets[0][x]);
			}

			for (var y = 0; y < excercise.targets[1].length; y++ ) {
				secondaryMuscles.push(excercise.targets[1][y]);
			}

		});

		this.musclesworked.push(primaryMuscles);
		this.musclesworked.push(secondaryMuscles);

	};

	$scope.createNewTraining = function(workout){

		if (workout) {
			console.log( new Training(workout) );
		} else {
			$scope.training = new Training(this.newWorkout);
			console.log($scope.training);
		}

	};

	$scope.shuffle = function(array) {

	  var currentIndex = array.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;

	};

	var initialize = (function(){

		$scope.training = new Training("Chest");
		console.log($scope);
		console.log(excercises);

	})();

});