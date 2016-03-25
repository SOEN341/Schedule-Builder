var mockServerBridge = {
	register: function(username, email, password) {
		if(username=='taken')
			return false;
		else
			return true;
	},
	
	getCourses: function() {
		return [
			{
				name: 'Object Oriented Programming 1',
				number: 'COMP 248'
			},
			{
				name: 'Object Oriented Programming 2',
				number: 'COMP 249'
			}
		]
	},
	
	getSections: function() {
		
	},
	
	getSectionsFromCourse: function(course) {
		//What format are sections? What info do we store on a section?
	},
	
	getUserPrefs: function() {
		return {
			classes: 5,
			day: 'Monday',
			time: 'Any'
		}
	},
	
	getNeededCourses: function() {
		return [{name: 'Data Structures and Algorithms', number: 'COMP 352'}];
	},
	
	getTakenCourses: function() {
		return [{name: 'Object Oriented 1', number: 'COMP 248'}, {name: 'Object Oriented 2', number: 'COMP 249'}];
	},
	
	
};

var realServerBridge = {
	register: function(username, email, password) {
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/register",
			dataType: "json",
			data:    {"username":username, "email":email, "password":password },
			success: function(data) {
				 //return data
				 if(data.result.localeCompare('registered') == 0) {
					return true;
				 }
				 else {
				 	return false;
				 }
			},
			error:   function(jqXHR, textStatus, errorThrown) {
				alert("Error, status = " + textStatus + ", " +
					"error thrown: " + errorThrown
				);
			}
		});
	}
};