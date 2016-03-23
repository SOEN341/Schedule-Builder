var mockServerBridge = {
	getCourses: function() {
		return [
			{
				name: 'Object Oriented Programming 1',
				code: 'COMP 248'
			},
			{
				name: 'Object Oriented Programming 2',
				code: 'COMP 249'
			}
		]
	},
	
	getSections: function(course) {
		
	},
	
	getNeededCourses: function() {
		return [{name: 'Data Structures and Algorithms', number: 'COMP 352'}];
	},
	
	getTakenCourses: function() {
		return [{name: 'Object Oriented 1', number: 'COMP 248'}, {name: 'Object Oriented 2', number: 'COMP 249'}];
	}
};

var realServerBridge = {
	
};