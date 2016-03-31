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
		return [
			{
				section: 'JJ',
				classroom: 'H555',
				type: 'Lab',
				day: '1',
				beginTime: '11:30',
				endTime: '14:00',
				course: 'SOEN 346'
			},
			{
				section: 'HH',
				classroom: 'H321',
				type: 'Lecture',
				day: '13'
				beginTime: '11:30',
				endTime: '14:00',
				course: 'SOEN 341'
			}
		]
	},
	
	getSectionsFromCourse: function(course) {
		return [
			{
				section: 'JJ',
				classroom: 'H555',
				type: 'Lecture',
				day: '1',
				beginTime: '11:30',
				endTime: '14:00',
				course: 'SOEN 346'
			},
			{
				section: 'HH',
				classroom: 'H321',
				type: 'Lecture',
				day: '13'
				beginTime: '11:30',
				endTime: '14:00',
				course: 'SOEN 346'
			}
		]
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
		return [
			{
				schedule: [
					{
						section: 'JJ',
						classroom: 'H555',
						type: 'Lab',
						day: '1',
						beginTime: '11:30',
						endTime: '14:00',
						course: 'SOEN 346'
					},
					{
						section: 'HH',
						classroom: 'MB S2.051',
						type: 'Lecture',
						day: '24',
						beginTime: '11:30',
						endTime: '12:45',
						course: 'SOEN 341'
					}
				]
			},
			{
				schedule: [
					{
						section: 'JJ',
						classroom: 'H555',
						type: 'Tutorial',
						day: '5',
						beginTime: '20:00',
						endTime: '22:00',
						course: 'COMP 249'
					},
					{
						section: 'JJ',
						classroom: 'H555',
						type: 'Lecture',
						day: '13',
						beginTime: '08:00',
						endTime: '09:45',
						course: 'ENGR 371'
					}
				]
			}
		]
	},
	
	addCourse: function(course) {
		if(course.number=='SOEN 341') {
			return false;
		}
		else
			return true;
	},
	
	addSection: function(section) {
		
	},
	
	removeCourse: function(courseID) {
		
	},
	
	removeSection: function(courseID, sectionID) {
		
	},
	
	editCourse: function(oldCourse, newCourse) {
		
	},
	
	editSection: function(courseID, oldSection, newSection) {
		
	},
	
	editPreferences: function(newPrefs) {
		
	},
	
	editNeededCourses: function(newList) {
		
	},
	
	editTakenCourses: function(newList) {
		
	},
	
	editUsername: function(newUsername) {
		if(newUsername=='taken')
			return false;
		else {
			console.log('username edited to ' + newUsername);
			return true;
		}
	},
	
	editEmail: function(newEmail) {
		console.log('email edited to ' + newEmail);
	},
	
	editPassword: function(newPassword) {
		console.log('password edited to ' + newPassword);
	},
	
	getEmail: function() {
		return 'imaguy@email.ca';
	}
};

var realServerBridge = {
	register: function(username, email, password) {
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/register",
			dataType: "json",
			data:    {"username":username, "email":email, "password":password },
			async: false,
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
			dataType: "text",
			data:    {username:username, password:password},
			async: false,
			success: function(data) {
				console.log(data);
				if(data.success) {
					return true;
				}
				else {
					console.log('Bad username and/or password');
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
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/courses",
			dataType: "json",
			async: false,
			success: function(data) {
				return data.courses;
			},
			error:   function(jqXHR, textStatus, errorThrown) {
				alert("Error, status = " + textStatus + ", " +
					"error thrown: " + errorThrown
				);
			}
		});
	},
	
	getSections: function() {
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/sections",
			dataType: "json",
			async: false,
			success: function(data) {
				return data.sections;
			},
			error:   function(jqXHR, textStatus, errorThrown) {
				alert("Error, status = " + textStatus + ", " +
					"error thrown: " + errorThrown
				);
			}
		});
	},
	
	getSectionsFromCourse: function(courseID) {
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/sections:"+courseID,
			dataType: "json",
			async: false,
			data:    courseID,
			success: function(data) {
				return data.sections;
			},
			error:   function(jqXHR, textStatus, errorThrown) {
				alert("Error, status = " + textStatus + ", " +
					"error thrown: " + errorThrown
				);
			}
		});
	},
	
	getUserPrefs: function() {
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/userprefs",
			dataType: "json",
			async: false,
			success: function(data) {
				return data;
			},
			error:   function(jqXHR, textStatus, errorThrown) {
				alert("Error, status = " + textStatus + ", " +
					"error thrown: " + errorThrown
				);
			}
		});
	},
	
	getNeededCourses: function() {
		var username = cookieHandler.getCookie('username');
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/needed",
			dataType: "json",
			async: false,
			data: username,
			success: function(data) {
				return data.courses
			},
			error:   function(jqXHR, textStatus, errorThrown) {
				alert("Error, status = " + textStatus + ", " +
					"error thrown: " + errorThrown
				);
			}
		});
	},
	
	getTakenCourses: function() {
		var username = cookieHandler.getCookie('username');
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/taken",
			dataType: "json",
			async: false,
			data: username,
			success: function(data) {
				return data.courses
			},
			error:   function(jqXHR, textStatus, errorThrown) {
				alert("Error, status = " + textStatus + ", " +
					"error thrown: " + errorThrown
				);
			}
		});
	},
	
	generateSchedule: function() {
		var username = cookieHandler.getCookie('username');
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/scheduler",
			dataType: "json",
			async: false,
			data: username,
			success: function(data) {
				return data
			},
			error:   function(jqXHR, textStatus, errorThrown) {
				alert("Error, status = " + textStatus + ", " +
					"error thrown: " + errorThrown
				);
			}
		});
	},
	
	addCourse: function(course) {
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/addcourse",
			dataType: "json",
			data: course,
			success: function(data) {
				return data.success
			},
			error:   function(jqXHR, textStatus, errorThrown) {
				alert("Error, status = " + textStatus + ", " +
					"error thrown: " + errorThrown
				);
			}
		});
	},
	
	addSection: function() {
		//TODO: decide on section format
	},
	
	removeCourse: function(courseID) {
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/removecourse",
			dataType: "json",
			data: courseID,
			success: function(data) {
				console.log('Course removed');
			},
			error:   function(jqXHR, textStatus, errorThrown) {
				alert("Error, status = " + textStatus + ", " +
					"error thrown: " + errorThrown
				);
			}
		});
	},
	
	removeSection: function(courseID, sectionID) {
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/removesection",
			dataType: "json",
			data: {'course':courseID, 'section':sectionID},
			success: function(data) {
				console.log('Section removed');
			},
			error:   function(jqXHR, textStatus, errorThrown) {
				alert("Error, status = " + textStatus + ", " +
					"error thrown: " + errorThrown
				);
			}
		});
	},
	
	editCourse: function(oldCourse, newCourse) {
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/editcourse",
			dataType: "json",
			data: {'old':oldCourse, 'new':newCourse},
			success: function(data) {
				console.log('Course edited');
			},
			error:   function(jqXHR, textStatus, errorThrown) {
				alert("Error, status = " + textStatus + ", " +
					"error thrown: " + errorThrown
				);
			}
		});
	},
	
	editSection: function(courseID, oldSection, newSection) {
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/editsection",
			dataType: "json",
			data: {'course':courseID, 'old':oldSection, 'new':newSection},
			success: function(data) {
				console.log('Section edited');
			},
			error:   function(jqXHR, textStatus, errorThrown) {
				alert("Error, status = " + textStatus + ", " +
					"error thrown: " + errorThrown
				);
			}
		});
	},
	
	editPreferences: function(newPrefs) {
		var username = cookieHandler.getCookie('username');
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/editpreferences",
			dataType: "json",
			data: {'username':username, 'new':newPrefs},
			success: function(data) {
				console.log('Preferences edited');
			},
			error:   function(jqXHR, textStatus, errorThrown) {
				alert("Error, status = " + textStatus + ", " +
					"error thrown: " + errorThrown
				);
			}
		});
	},
	
	editNeededCourses: function(newList) {
		var username = cookieHandler.getCookie('username');
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/editneededcourses",
			dataType: "json",
			data: {'username':username, 'new':newList},
			success: function(data) {
				console.log('Needed Courses edited');
			},
			error:   function(jqXHR, textStatus, errorThrown) {
				alert("Error, status = " + textStatus + ", " +
					"error thrown: " + errorThrown
				);
			}
		});
	},
	
	editTakenCourses: function(newList) {
		var username = cookieHandler.getCookie('username');
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/edittakencourses",
			dataType: "json",
			data: {'username':username, 'new':newList},
			success: function(data) {
				console.log('Taken Courses edited');
			},
			error:   function(jqXHR, textStatus, errorThrown) {
				alert("Error, status = " + textStatus + ", " +
					"error thrown: " + errorThrown
				);
			}
		});
	},
	
	editUsername: function(newUsername) {
		var username = cookieHandler.getCookie('username');
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/editusername",
			dataType: "json",
			data: {'old':username, 'new':newUsername},
			success: function(data) {
				if(data.success) {
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
	
	editEmail: function(newEmail) {
		var username = cookieHandler.getCookie('username');
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/editemail",
			dataType: "json",
			data: {'username':username, 'new':newEmail},
			success: function(data) {
				console.log('Email edited');
			},
			error:   function(jqXHR, textStatus, errorThrown) {
				alert("Error, status = " + textStatus + ", " +
					"error thrown: " + errorThrown
				);
			}
		});
	},
	
	editPassword: function(newPassword) {
		var username = cookieHandler.getCookie('username');
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/editpassword",
			dataType: "json",
			data: {'username':username, 'new':newPassword},
			success: function(data) {
				console.log('Password edited');
			},
			error:   function(jqXHR, textStatus, errorThrown) {
				alert("Error, status = " + textStatus + ", " +
					"error thrown: " + errorThrown
				);
			}
		});
	},
	
	getEmail: function() {
		var username = cookieHandler.getCookie('username');
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/email",
			dataType: "json",
			async: false,
			data: {'username':username},
			success: function(data) {
				return data;
			},
			error:   function(jqXHR, textStatus, errorThrown) {
				alert("Error, status = " + textStatus + ", " +
					"error thrown: " + errorThrown
				);
			}
		});
	}
};