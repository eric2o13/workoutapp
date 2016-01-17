angular.module('WorkoutApp').factory('excercises',function() {

	var Excercise = function( id, name, targets, recommended, details ){

		this.id = id;
		this.name = name;
		this.targets = targets;
		this.recommended = recommended;
		this.details = details;
		this.movement = (function(){

			var movement = (targets.primary.length > 2 || targets.secondary.length > 0 ) ? "Compound" : "Isolation";
			return movement;

		})();

	};

	var excercises = {};

	excercises.data = {

		0 : {
			name: 'Flat bench press',
			targets: { 
				primary: [ 'chest' ],
				secondary: [ 'lats', 'triceps']
			},
			recommended: {
				reps: 12,
				sets: 3,
				rest: 60,
				weight: 50
			},
			details: {
				video: 'http://youtu.be',
				description: 'This is a classic excercise practiced by every weightlifter out there.'
			}
		},

		1 : {
			name: 'Inclined bench press',
			targets: { 
				primary: [ 'chest' ],
				secondary: [ 'lats', 'triceps']
			},
			recommended: {
				reps: 12,
				sets: 3,
				rest: 60,
				weight: 50
			},
			details: {
				video: 'http://youtu.be',
				description: 'This is a classic excercise practiced by every weightlifter out there.'
			}
		},

		2 : {
			name: 'Pull ups',
			targets: { 
				primary: [ 'traps', 'forearms' ],
				secondary: [ 'lats']
			},
			recommended: {
				reps: 15,
				sets: 3,
				rest: 60,
				weight: 0
			},
			details: {
				video: 'http://youtu.be',
				description: 'This is a classic excercise practiced by every weightlifter out there.'
			}
		},

		3 : {
			name: 'Dips',
			targets: { 
				primary: [ 'chest'],
				secondary: [ 'triceps', 'lats']
			},
			recommended: {
				reps: 15,
				sets: 3,
				rest: 60,
				weight: 0
			},
			details: {
				video: 'http://youtu.be',
				description: 'This is a classic excercise practiced by every weightlifter out there.'
			}
		},

		4 : {
			name: 'Dumbell pullovers',
			targets: { 
				primary: [ 'chest'],
				secondary: [ 'triceps','back', 'lats']
			},
			recommended: {
				reps: 12,
				sets: 3,
				rest: 60,
				weight: 20
			},
			details: {
				video: 'http://youtu.be',
				description: 'This is a classic excercise practiced by every weightlifter out there.'
			}
		},		

		5 : {
			name: 'Arnold presses',
			targets: { 
				primary: [ 'shoulders'],
				secondary: [ 'back']
			},
			recommended: {
				reps: 12,
				sets: 3,
				rest: 60,
				weight: 20
			},
			details: {
				video: 'http://youtu.be',
				description: 'This is a classic excercise practiced by every weightlifter out there.'
			}
		},		

		6 : {
			name: 'Squats',
			targets: { 
				primary: [ 'hamstrings', 'thighs', 'glutes'],
				secondary: [ 'core']
			},
			recommended: {
				reps: 10,
				sets: 3,
				rest: 60,
				weight: 40
			},
			details: {
				video: 'http://youtu.be',
				description: 'This is a classic excercise practiced by every weightlifter out there.'
			}
		},		

		7 : {
			name: 'Front squats',
			targets: { 
				primary: [ 'hamstrings', 'thighs', 'glutes'],
				secondary: [ 'core']
			},
			recommended: {
				reps: 10,
				sets: 3,
				rest: 60,
				weight: 40
			},
			details: {
				video: 'http://youtu.be',
				description: 'This is a classic excercise practiced by every weightlifter out there.'
			}
		},		

		8 : {
			name: 'Crushed grip goblat squats',
			targets: { 
				primary: [ 'thighs', 'hamstrings', 'glutes'],
				secondary: [ 'core']
			},
			recommended: {
				reps: 15,
				sets: 3,
				rest: 30,
				weight: 0
			},
			details: {
				video: 'http://youtu.be',
				description: 'This is a classic excercise practiced by every weightlifter out there.'
			}
		},		

		9 : {
			name: 'Lunges',
			targets: { 
				primary: [ 'hamstrings', 'thighs', 'glutes'],
				secondary: [ 'core']
			},
			recommended: {
				reps: 25,
				sets: 3,
				rest: 30,
				weight: 0
			},
			details: {
				video: 'http://youtu.be',
				description: 'This is a classic excercise practiced by every weightlifter out there.'
			}
		},

		10 : {
			name: 'Inclined dumbbell presses',
			targets: { 
				primary: [ 'chest', 'triceps', 'lats'],
				secondary: [ 'core']
			},
			recommended: {
				reps: 12,
				sets: 3,
				rest: 30,
				weight: 0
			},
			details: {
				video: 'https://www.youtube.com/embed/CTB_Jb_UvII',
				description: 'Execute with resistance band'
			}
		},

		11 : {
			name: 'One arm inclined dumbbell presses',
			targets: { 
				primary: [ 'chest', 'triceps', 'lats'],
				secondary: [ 'core']
			},
			recommended: {
				reps: 12,
				sets: 3,
				rest: 30,
				weight: 0
			},
			details: {
				video: 'http://youtu.be',
				description: 'Execute with resistance band'
			}
		},

		12 : {
			name: 'Cable crossovers',
			targets: { 
				primary: [ 'chest'],
				secondary: [ 'shoulders', 'forearms']
			},
			recommended: {
				reps: 25,
				sets: 3,
				rest: 30,
				weight: 0
			},
			details: {
				video: 'http://youtu.be',
				description: 'This is a classic excercise practiced by every weightlifter out there.'
			}
		},

		13 : {
			name: 'Farmers carries',
			targets: { 
				primary: [ 'traps', 'forearms'],
				secondary: [ 'shoulders', 'lats', 'core', 'back']
			},
			recommended: {
				seconds: 60,
				sets: 3,
				rest: 90,
				weight: 80
			},
			details: {
				video: 'http://youtu.be',
				description: 'This is a classic excercise practiced by every weightlifter out there.'
			}
		},

		14 : {
			name: 'One arm farmers carries',
			targets: { 
				primary: [ 'traps', 'forearms'],
				secondary: [ 'shoulders', 'lats', 'core', 'back']
			},
			recommended: {
				seconds: 60,
				sets: 3,
				rest: 90,
				weight: 40
			},
			details: {
				video: 'http://youtu.be',
				description: 'This is a classic excercise practiced by every weightlifter out there.'
			}
		},

		15 : {
			name: 'Bicep curls',
			targets: { 
				primary: [ 'biceps', 'forearms'],
				secondary: []
			},
			recommended: {
				reps: 12,
				sets: 3,
				rest: 90,
				weight: 40
			},
			details: {
				video: 'http://youtu.be',
				description: 'Variaties: Resistance band, Concentration, Standing barbell, Dead hang, Free moving concentration'
			}
		},

		16 : {
			name: 'Deadlift',
			targets: { 
				primary: [ 'lats', 'back', 'lowerback'],
				secondary: ['hamstrings', 'glutes']
			},
			recommended: {
				reps: 10,
				sets: 3,
				rest: 90,
				weight: 60
			},
			details: {
				video: 'http://youtu.be',
				description: 'This is a classic excercise practiced by every weightlifter out there.'
			}
		},
		
		17 : {
			name: 'Romanian deadlift',
			targets: { 
				primary: [ 'lats', 'back', 'lowerback'],
				secondary: ['hamstrings', 'glutes']
			},
			recommended: {
				reps: 12,
				sets: 3,
				rest: 90,
				weight: 60
			},
			details: {
				video: 'http://youtu.be',
				description: 'This is a classic excercise practiced by every weightlifter out there.'
			}		
		},

		18: {
			name: 'Bent over rows',
			targets: { 
				primary: [ 'lats', 'traps', 'back'],
				secondary: ['biceps']
			},
			recommended: {
				reps: 12,
				sets: 3,
				rest: 90,
				weight: 60
			},
			details: {
				video: 'http://youtu.be',
				description: 'This is a classic excercise practiced by every weightlifter out there.'
			}		
		},

		19: {
			name: 'Push ups',
			targets: { 
				primary: [ 'chest' ],
				secondary: ['lats', 'triceps', 'shoulders' ]
			},
			recommended: {
				reps: 25,
				sets: 3,
				rest: 90,
				weight: 0
			},
			details: {
				video: 'http://youtu.be',
				description: 'This is a classic excercise practiced by every weightlifter out there.'
			}		
		}		

	};

	excercises.list = (function(){

		var list = [];
		var excercise;

		$.each(excercises.data, function(index){

			excercise = excercises.data[index];
			list.push( new Excercise( index, excercise.name, excercise.targets, excercise.recommended, excercise.details ) );

		});

		return list;

	})();

	/* old data puur ter referentie voor oefeningen.
	excercises.data = {

		0 : {
			name: 'Bench press',
			targets: [ ['Chest'],['Traps','Triceps'] ],
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
				weight: 50,
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
			variations: ['Resistance band', 'Concentration', 'Standing barbell', 'Dead hang', 'Free moving concentration'],
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
		},

		17: {
			name: 'Alternating Band Curl-Upper Cuts',
			targets: [['Biceps'],[]],
			variations: [],
			recommended: {
				reps: 25,
				sets: 2,
				weight: 0,
				rest: 60
			}			
		}

	};
	*/

	excercises.filter = function (input, filtervalue) {

		var filteredInput =[];

		angular.forEach(input, function(excercise){
			angular.forEach(excercise.targets.primary, function(value, key){
				if (value === filtervalue) {
					filteredInput.push(excercise);
				}
			});
		});

		return filteredInput;

	};

	excercises.shuffle = function(array) {

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

	excercises.selectWarmupFrom = function(input){

		var filteredInput =[];
		var warmup, bodyweightexcercise, highrepexcercise;

		angular.forEach(input, function(excercise){
			angular.forEach(excercise.recommended, function(value, key){
				
				bodyweightexcercise = (key === "weight" && value === 0);
				highrepexcercise = (key === "reps" && value > 20);

				if ( bodyweightexcercise || highrepexcercise ) {
					if ($.inArray(excercise, filteredInput) === -1) {
						filteredInput.push(excercise);
					}
				}

			});
		});

		return filteredInput;		

	};

	return excercises;

});