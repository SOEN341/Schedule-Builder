var mockServerBridge = {
	register: function(username, email, password) {
		if(username=='taken')
			return false;
		else
			return true;
	},
	
	login: function(username, password) {
		if(username=='user'&&password=='pass') {
			return true;
		}
		else
			return false;
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
	
	generateSchedule: function() {
		//TODO: return format to be decided
	},
	
	addCourse: function(course) {
		if(course.number=='SOEN 341') {
			return false;
		}
		else
			return true;
	},
	
	addSection: function() {
		//TODO: decide on section format
	},
	
	removeCourse: function(courseID) {
		
	},
	
	removeSection: function(courseID, sectionID) {
		
	},
	
	editCourse: function(oldCourse, newCourse) {
		
	},
	
	editSection: function(courseID, oldSection, newSection) {
		
	},
	
	editPreferences: function(oldPrefs, newPrefs) {
		
	},
	
	editNeededCourses: function(oldList, newList) {
		
	},
	
	editTakenCourses: function(oldList, newList) {
		
	},
	
	editUsername: function(oldUsername, newUsername) {
		if(newUsername=='taken')
			return false;
		else
			return true;
	},
	
	editEmail: function(oldEmail, newEmail) {
		
	},
	
	editPassword: function(oldEmail, newEmail) {
		
	}
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
	},
	
	login: function(username, password) {
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/login",
			dataType: "json",
			data:    {"username":username, "password":password},
			success: function(data) {
				if(data.result.localeCompare('good') == 0) {
					return true;
				}
				else {
					alert('Bad username and/or password');
					return false;
				}
			},
			error:   function(jqXHR, textStatus, errorThrown) {
				alert("Error, status = " + textStatus + ", " +
					"error thrown: " + errorThrown
				);
			}
		});
	},
	
	getCourses: function() {
		
	},
	
	getSections: function() {
		
	},
	
	getSectionsFromCourse: function(course) {
		//What format are sections? What info do we store on a section?
	},
	
	getUserPrefs: function() {
		
	},
	
	getNeededCourses: function() {
		
	},
	
	getTakenCourses: function() {
		
	},
	
	generateSchedule: function() {
		//TODO: return format to be decided
	},
	
	addCourse: function(course) {
		
	},
	
	addSection: function() {
		//TODO: decide on section format
	},
	
	removeCourse: function(courseID) {
		
	},
	
	removeSection: function(courseID, sectionID) {
		
	},
	
	editCourse: function(oldCourse, newCourse) {
		
	},
	
	editSection: function(courseID, oldSection, newSection) {
		
	},
	
	editPreferences: function(oldPrefs, newPrefs) {
		
	},
	
	editNeededCourses: function(oldList, newList) {
		
	},
	
	editTakenCourses: function(oldList, newList) {
		
	},
	
	editUsername: function(oldUsername, newUsername) {
		
	},
	
	editEmail: function(oldEmail, newEmail) {
		
	},
	
	editPassword: function(oldEmail, newEmail) {
		
	}
};