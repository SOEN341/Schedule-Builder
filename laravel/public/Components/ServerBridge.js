var mockServerBridge = {
	register: function(username, email, password, response) {
		if(username=='taken'||username=='Taken')
			response({success: 'false', username: username, password: password});
		else
			response({success: 'true', username: username, password: password});
	},
	
	login: function(username, password, response) {
		if(username=='user'&&password=='password1') {
			response({success: 'true', username: username, isAdmin: 'false'});
		}
		else if(username=='Jason'&&password=='password1') {
			response({success: 'true', username: username, isAdmin: 'true'});
		}
		else
			response({success: 'false', username: username, error: 'usernamenotfound'});
	},
	
	getCourses: function(response) {
		/*response([
			{
				courseID: '1',
				name: 'Object Oriented Programming 1',
				courseCode: 'COMP 248',
				semester: 'Fall',
				description: 'Introduction to programming. Basic data types, variables, expressions, assignments, control flow. Classes, objects, methods.',
				credits: '3',
			},
			{
				courseID: '2',
				name: 'Object Oriented Programming 2',
				courseCode: 'COMP 249',
				semester: 'Winter',
				description: 'Introduction to programming. Basic data types, variables, expressions, assignments, control flow. Classes, objects, methods.',
				credits: '3'
			}
		]);*/
		response('[{"courseID":"1","name":"Object Oriented Programming 1","courseCode":"COMP 248","semester":"Fall","description":"Introduction to programming. Basic data types, variables, expressions, assignments, control flow. Classes, objects, methods.","credits":"3"},{"courseID":"2","name":"Object Oriented Programming 2","courseCode":"COMP 249","semester":"Winter","description":"Introduction to programming. Basic data types, variables, expressions, assignments, control flow. Classes, objects, methods.","credits":"3"}]');
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
				day: '13',
				beginTime: '11:30',
				endTime: '14:00',
				course: 'SOEN 341'
			}
		]
	},
	
	getSectionsFromCourse: function(course, response) {
		response([
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
				day: '13',
				beginTime: '11:30',
				endTime: '14:00',
				course: 'SOEN 346'
			}
		]);
	},
	
	getUserPrefs: function(response) {
		response({
			courseload: 5,
			dayoff: 'Monday',
			preferredTime: 'Any'
		});
	},
	
	getNeededCourses: function(response) {
		response([{name: 'Data Structures and Algorithms', number: 'COMP 352'}]);
	},
	
	getTakenCourses: function(response) {
		response([{name: 'Object Oriented 1', number: 'COMP 248'}, {name: 'Object Oriented 2', number: 'COMP 249'}]);
	},
	
	generateSchedule: function(response) {
		response([
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
		]);
	},
	
	generateCourseSequence: function(schedule, response) {
		response([
			{
				courseID: '1',
				semester: 'Fall',
				year: '3',
				name: 'Object Oriented Programming 1',
				courseCode: 'COMP 248'
			},
			{
				courseID: '2',
				name: 'Object Oriented Programming 2',
				courseCode: 'COMP 249',
				semester: 'Fall',
				year: '1'
			},
			{
				courseID: '2',
				name: 'Object Oriented Programming 2',
				courseCode: 'COMP 249',
				semester: 'Fall',
				year: '2'
			},
			{
				courseID: '2',
				name: 'Object Oriented Programming 2',
				courseCode: 'COMP 249',
				semester: 'Winter',
				year: '1'
			},
			{
				courseID: '2',
				name: 'Object Oriented Programming 2',
				courseCode: 'COMP 249',
				semester: 'Winter',
				year: '2'
			},
			{
				courseID: '2',
				name: 'Object Oriented Programming 2',
				courseCode: 'COMP 249',
				semester: 'Winter',
				year: '3'
			},
			{
				courseID: '2',
				name: 'Object Oriented Programming 2',
				courseCode: 'COMP 249',
				semester: 'Winter',
				year: '2'
			},
			{
				courseID: '2',
				name: 'Object Oriented Programming 2',
				courseCode: 'COMP 249',
				semester: 'Winter',
				year: '1'
			},
			{
				courseID: '2',
				name: 'Object Oriented Programming 2',
				courseCode: 'COMP 249',
				semester: 'Winter',
				year: '3'
			}
		]);
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
	
	editUsername: function(newUsername, response) {
		if(newUsername=='taken')
			response({result:'false', username: 'user'});
		else {
			console.log('username edited to ' + newUsername);
			response({result:'true', username: 'user'});
		}
	},
	
	editEmail: function(newEmail) {
		console.log('email edited to ' + newEmail);
	},
	
	editPassword: function(newPassword) {
		console.log('password edited to ' + newPassword);
	},
	
	getEmail: function(response) {
		response({email:'imaguy@email.ca', username:'user', result:'good'});
	},
	
	sendPasswordEmail: function(username, response) {
		if(username=='nahh')
			response({success:'false'});
		else
			response({success:'true'});
	},
	
	resetPasswordFromEmail: function(username, code, password, response) {
		if(code=='ye') {
			response({success:'true'});
		}
		else {
			response({success:'false'});
		}
	}
};

var realServerBridge = {
	register: function(username, email, password, response) {
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/register",
			dataType: "json",
			data:    {"username":username, "email":email, "password":password },
			async: false,
			success: response,
			error:   function(jqXHR, textStatus, errorThrown) {
				alert("Error, status = " + textStatus + ", " +
					"error thrown: " + errorThrown
				);
			}
		});
	},
	
	login: function(username, password, response) {
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/login",
			dataType: "json",
			data:    {username:username, password:password},
			async: false,
			success: response,
			error:   function(jqXHR, textStatus, errorThrown) {
				alert("Error, status = " + textStatus + ", " +
					"error thrown: " + errorThrown
				);
			}
		});
	},
	
	getCourses: function(response) {
		var username = cookieManager.getCookie('username');
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/courses",
			dataType: "text",
			async: false,
			data: {username: username},
			success: response,
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
	
	getUserPrefs: function(response) {
		var username = cookieManager.getCookie('username');
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/userprefs",
			dataType: "json",
			async: false,
			data: { username: username },
			success: response,
			error:   function(jqXHR, textStatus, errorThrown) {
				alert("Error, status = " + textStatus + ", " +
					"error thrown: " + errorThrown
				);
			}
		});
	},
	
	getNeededCourses: function(response) {
		var username = cookieManager.getCookie('username');
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/needed",
			dataType: "json",
			async: false,
			data: { username: username },
			success: function(data) {
				console.log(data);
				response(data.List);
			},
			error:   function(jqXHR, textStatus, errorThrown,ts) {
				alert("Error, status = " + textStatus + ", " +
					"error thrown: " + errorThrown +
					ts.responseText
				);
			}
		});
	},
	
	getTakenCourses: function(response) {
		var username = cookieManager.getCookie('username');
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/taken",
			dataType: "json",
			async: false,
			data: { username: username },
			success: function(data) {
			console.log(data);
				response(data.List);
			},
			error:   function(jqXHR, textStatus, errorThrown) {
				alert("Error, status = " + textStatus + ", " +
					"error thrown: " + errorThrown
				);
				console.log(errorThrown);
			}
		});
	},
	
	generateSchedule: function() {
		var username = cookieManager.getCookie('username');
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/scheduler",
			dataType: "json",
			async: false,
			data: { username: username },
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
		var username = cookieManager.getCookie('username');
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/editpreferences",
			dataType: "json",
			data: {'username':username, 'cload':newPrefs.courseLoad, 'dayoff':newPrefs.day, 'preftime':newPrefs.time},
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
		var username = cookieManager.getCookie('username');
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/editneededcourses",
			dataType: "json",
			data: {'username':username, 'json':'{\"List\":'+newList+'}'},
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
		var username = cookieManager.getCookie('username');
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/edittakencourses",
			dataType: "json",
			data: {'username':username, 'json':'{\"List\":'+newList+'}'},
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
	
	editUsername: function(newUsername, response) {
		var username = cookieManager.getCookie('username');
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/editusername",
			dataType: "json",
			data: {'old':username, 'new':newUsername},
			success: response,
			error:   function(jqXHR, textStatus, errorThrown) {
				alert("Error, status = " + textStatus + ", " +
					"error thrown: " + errorThrown
				);
			}
		});
	},
	
	editEmail: function(newEmail) {
		var username = cookieManager.getCookie('username');
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/editemail",
			dataType: "json",
			data: {'old':username, 'new':newEmail},
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
		var username = cookieManager.getCookie('username');
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/editpassword",
			dataType: "json",
			data: {'old':username, 'new':newPassword},
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
	
	getEmail: function(response) {
		var username = cookieManager.getCookie('username');
		$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/email",
			dataType: "json",
			async: false,
			data: {'username':username},
			success: response,
			error:   function(jqXHR, textStatus, errorThrown) {
				alert("Error, status = " + textStatus + ", " +
					"error thrown: " + errorThrown
				);
			}
		});
	}
};