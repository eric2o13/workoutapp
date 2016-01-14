angular.module('WorkoutApp').controller('ListCtrl',function($scope, $filter, excercises){

	$scope.excercises = excercises;
	$scope.training = {};

	var Training = function( workouttype ){
		
		var setWarmingUp = function(){

			/*
				
				switch (chest) {
					warmup = getAppropriateWarmup();
				}

				hoe bepaal je dat een bepaalde oefeninge geschikt is
				als warming up...

				- idealiter bodyweight of resistance band
				
				verder zetten we em op 
				- high reps / low weight
				
				en dan zijn we er?
				
			*/
			
			var filteredArray = excercises.filter( $scope.excercises.list, workouttype ),
			returnedArray = excercises.selectWarmupFrom(filteredArray);
			
			return returnedArray;

		};

		this.workout = [];
		this.workout.warmingup = setWarmingUp();
		this.workout.mainworkout = [];
		this.workout.coolingdown = [];
		this.intensity = 1 || 2 || 3;
		this.excercises = ( function(){

			var maximumExcercises = 4;
			var filteredArray = excercises.filter( $scope.excercises.list, workouttype );
			var shuffledArray = excercises.shuffle( filteredArray );
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
	};

	$scope.createNewTraining = function(workout){

		if (workout) {

			console.log( new Training(workout) );

		} else {

			$scope.training = new Training(this.newWorkout);
			console.log($scope.training);

		}

	};

	var initialize = (function(){

		$scope.training = new Training("Chest");
		console.log($scope);
		console.log(excercises);

	})();

});