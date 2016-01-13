angular.module('WorkoutApp').factory('excercises',function() {

	var Excercise = function( id, realid, name, targets, movement, recommended ){

		this.id = id;
		this.realid = realid; //referer to original data
		this.name = name;
		this.targets = targets;
		this.movement = movement;
		this.recommended = recommended;

	};

	var excercises = {};

	excercises.data = {

		0 : {
			name: 'Bench press',
			targets: [ ['Chest','Traps'],['Triceps'] ],
			variations: ["Inclined", "Declined"],
			recommended: {
				reps: 12,
				sets: 3,
				weight: 50,
				rest: 90
			}
		},
		
		1 : {
			name: 'Pull ups',
			targets: [ ['Traps','Forearms'],['Lats'] ],
			variations: [],
			recommended: {
				reps: 12,
				sets: 3,
				weight: 0,
				rest: 90
			}
		},
		
		2 : {
			name: 'Dips',
			targets: [ ['Chest'],['Triceps','Traps'] ],
			variations: [],
			recommended: {
				reps: 12,
				sets: 3,
				weight: 0,
				rest: 90
			}			
		},
		
		3 : {
			name: 'Arnold press',
			targets: [['Shoulders'],[]],
			variations: [],
			recommended: {
				reps: 12,
				sets: 3,
				weight: 15,
				rest: 90
			}			
		},
		
		4: {
			name: 'Squats',
			targets: [ ['Hamstrings', 'Quads', 'Glutes'],['Core'] ],
			variations: ["Front", "Crush Grip Dumbbell Goblet"],
			recommended: {
				reps: 12,
				sets: 3,
				weight: 40,
				rest: 90
			}
		},

		5: {
			name: 'Dumbbell press',
			targets: [ ['Chest'],['Traps','Triceps'] ],
			variations: ['Inclined', 'Single Arm', 'Resistance band'],
			recommended: {
				reps: 12,
				sets: 3,
				weight: 17.5,
				rest: 90
			}			
		},

		6: {
			name: 'Cable crossovers',
			targets: [ ['Chest'],[] ],
			variations: [],
			recommended: {
				reps: 12,
				sets: 3,
				weight: 0,
				rest: 90
			}			
		},

		7: {
			name: 'Farmers carries',
			targets: [ ["Traps", "Forearms"], ["Shoulders", "Core", 'Hamstrings', 'Quads', 'Glutes'] ],
			variations: ["Single arm"],
			recommended: {
				reps: '45s',
				sets: 3,
				weight: 80,
				rest: 90
			}			
		},

		8: {
			name: 'Bicep curls',
			targets: [['Biceps', 'Forearms'], []],
			variations: ['Resistance band', 'Concentration'],
			recommended: {
				reps: 12,
				sets: 3,
				weight: 15,
				rest: 60
			}			
		},

		9: {
			name: 'Deadlift',
			targets: [['Lats'],['Core', 'Hamstrings', 'Quads', 'Glutes']],
			variations: ['Romanian', 'Stiff legged'],
			recommended: {
				reps: 12,
				sets: 3,
				weight: 70,
				rest: 90
			}
		},

		10: {
			name: 'Bent over rows',
			targets: [ ['Lats', 'Traps'], ['Biceps'] ],
			variations: [],
			recommended: {
				reps: 12,
				sets: 3,
				weight: 40,
				rest: 90
			}			
		},

		11: {
			name: 'Push ups',
			targets: [["Chest"], ["Traps", "Triceps"]],
			variations: [ "Lateral shuffle", "Hannibal", "Resistance band"],
			recommended: {
				reps: 25,
				sets: 2,
				weight: 0,
				rest: 60
			}			
		},

		12: {
			name: 'Dumbbell shrugs',
			targets: [ ['Traps'],['Shoulders']],
			variations: [],
			recommended: {
				reps: 25,
				sets: 2,
				weight: 30,
				rest: 60
			}			
		},

		13: {
			name: 'Shadow boxing',
			targets: [['Technique', 'Cardio'],[]],
			variations: ['Resistance band'],
			recommended: {
				reps: 25,
				sets: 2,
				weight: 0,
				rest: 60
			}			
		},

		14: {
			name: 'Dumbbell Step ups',
			targets: [['Hamstrings', 'Quads', 'Calves', 'Glutes'], ['Core','Traps']],
			variations: [],
			recommended: {
				reps: 25,
				sets: 2,
				weight: 0,
				rest: 60
			}			
		},

		15: {
			name: 'Calves raises',
			targets: [['Calves'],[]],
			variations: [],
			recommended: {
				reps: 25,
				sets: 2,
				weight: 0,
				rest: 60
			}			
		},

		16: {
			name: 'Military presses',
			targets: [['Shoulders'],['Traps']],
			variations: [],
			recommended: {
				reps: 25,
				sets: 2,
				weight: 0,
				rest: 60
			}			
		}

	};

	excercises.list = (function(){

		var id = 0,
		list = [];

		$.each(excercises.data, function(i){

			var name = excercises.data[i].name,
			variations = [],
			targets = [[],[]],
			movement = (excercises.data[i].targets[1].length > 0 || excercises.data[i].targets[0].length > 1) ? "Compound" : "Isolation",
			recommended = excercises.data[i].recommended;
			id++;

			for (var x = 0; x < excercises.data[i].targets[0].length; x++ ) {
				if ($.inArray(excercises.data[i].targets[0][x], targets[0]) === -1) {
					targets[0].push(excercises.data[i].targets[0][x]);
				}
			}

			for (var c = 0; c < excercises.data[i].targets[1].length; c++ ) {
				if ($.inArray(excercises.data[i].targets[1][c], targets[1]) === -1) {
					targets[1].push(excercises.data[i].targets[1][c]);
				}
			}
			
			list.push( new Excercise( id, i, name, targets, movement, recommended ) );

			for (var y = 0, variationname; y < excercises.data[i].variations.length; y++ ) {
				id++;
				variationname = excercises.data[i].variations[y] + ' ' + name;
				list.push( new Excercise( id, i, variationname, targets, movement ) );
			}

		});

		return list;

	})();

	excercises.filter = function (input, filtervalue) {

		var filteredInput =[];

		angular.forEach(input, function(excercise){
			angular.forEach(excercise.targets[0], function(value, key){
				if (value === filtervalue) {
					filteredInput.push(excercise);
				}
			});
		});

		return filteredInput;

	};

	return excercises;

});