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
				courseId: '1',
				name: 'Object Oriented Programming 1',
				courseCode: 'COMP 248',
				semester: 'Fall',
				description: 'Introduction to programming. Basic data types, variables, expressions, assignments, control flow. Classes, objects, methods.',
				credits: '3',
			},
			{
				courseId: '2',
				name: 'Object Oriented Programming 2',
				courseCode: 'COMP 249',
				semester: 'Winter',
				description: 'Introduction to programming. Basic data types, variables, expressions, assignments, control flow. Classes, objects, methods.',
				credits: '3'
			}
		]);*/
		response('[{"courseId":"1","name":"Object Oriented Programming 1","courseCode":"COMP 248","semester":"Fall","description":"Introduction to programming. Basic data types, variables, expressions, assignments, control flow. Classes, objects, methods.","credits":"3"},{"courseId":"2","name":"Object Oriented Programming 2","courseCode":"COMP 249","semester":"Winter","description":"Introduction to programming. Basic data types, variables, expressions, assignments, control flow. Classes, objects, methods.","credits":"3"}]');
	},
	
	getSections: function(response) {
		response([
			{
				section: 'JJ',
				sectionId: '1',
				classroom: 'H555',
				semester: 'Winter',
				type: 'Lecture',
				dayOffered: '1',
				beginTime: '11:30',
				endTime: '14:00',
				courseCode: 'SOEN 346',
				courseId: '1',
				sectionNum: '1'
			},
			{
				section: 'HH',
				sectionId: '2',
				classroom: 'H321',
				semester: 'Winter',
				type: 'Lecture',
				dayOffered: '13',
				beginTime: '11:30',
				endTime: '14:00',
				courseCode: 'SOEN 346',
				courseId: '1',
				sectionNum: '1'
			}
		]);
	},
	
	getSectionsFromCourse: function(course, response) {
		response([
			{
				section: 'JJ',
				sectionId: '1',
				classroom: 'H555',
				semester: 'Winter',
				type: 'Lecture',
				dayOffered: '1',
				beginTime: '11:30',
				endTime: '14:00',
				courseCode: 'SOEN 346',
				courseId: '1',
				sectionNum: '1'
			},
			{
				section: 'HH',
				sectionId: '2',
				classroom: 'H321',
				semester: 'Winter',
				type: 'Lecture',
				dayOffered: '13',
				beginTime: '11:30',
				endTime: '14:00',
				courseCode: 'SOEN 346',
				courseId: '1',
				sectionNum: '1'
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
	
	addCourse: function(course, response) {
		if(course.courseCode=='SOEN 341') {
			response({success: 'false', courseId: '5'});
		}
		else
			response({success: 'true', courseId: '5'});
	},
	
	addSection: function(section, response) {
		if(section.section=='QQ') {
			response({success: 'false', sectionId: '5'});
		}
		else
			response({success: 'true', sectionId: '5'});
	},
	
	removeCourse: function(courseID) {
		console.log('course ' + courseID + ' removed');
	},
	
	removeSection: function(courseID, sectionID) {
		console.log('Section ' + sectionID + ' removed from course ' + courseID);
	},
	
	editCourse: function(course, response) {
		if(course.courseCode=='SOEN 341') {
			response({success: 'false', courseID: '5'});
		}
		else
			response({success: 'true', courseID: '5'});
	},
	
	editSection: function(section, response) {
		if(section.section=='QQ') {
			response({success: 'false', sectionId: '5'});
		}
		else
			response({success: 'true', sectionId: '5'});
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
	
	editEmail: function(newEmail, reponse) {
		if(newEmail=='taken') {
			response({success:'false', username:'', email:newEmail});
		}
		else {
			response({success:'true', username:'', email:newEmail});
			console.log('email edited to ' + newEmail);
		}
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
			url:     linkProvider.getLink()+"/register",
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
			url:     linkProvider.getLink()+"/login",
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
			url:     linkProvider.getLink()+"/courses",
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
			url:     linkProvider.getLink()+"/sections",
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
	
	getSectionsFromCourse: function(course, response) {
		$.ajax({
			type:    "POST",
			url:     linkProvider.getLink()+"/sectioncourse",
			dataType: "json",
			async: false,
			data:    {'courseId':course.courseId},
			success: response,
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
			url:     linkProvider.getLink()+"/userprefs",
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
			url:     linkProvider.getLink()+"/needed",
			dataType: "json",
			async: false,
			data: { username: username },
			success: function(data) {
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
			url:     linkProvider.getLink()+"/taken",
			dataType: "json",
			async: false,
			data: { username: username },
			success: function(data) {
				response(data.List);
			},
			error:   function(jqXHR, textStatus, errorThrown) {
				alert("Error, status = " + textStatus + ", " +
					"error thrown: " + errorThrown
				);
			}
		});
	},
	
	generateSchedule: function() {
		var username = cookieManager.getCookie('username');
		$.ajax({
			type:    "POST",
			url:     linkProvider.getLink()+"/scheduler",
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
	
	addCourse: function(course, response) {
		$.ajax({
			type:    "POST",
			url:     linkProvider.getLink()+"/addadmincourse",
			dataType: "json",
			data: {json: JSON.stringify(course)},
			success: response,
			error:   function(jqXHR, textStatus, errorThrown) {
				alert("Error, status = " + textStatus + ", " +
					"error thrown: " + errorThrown
				);
			}
		});
	},
	
	addSection: function(section, response) {
		$.ajax({
			type:    "POST",
			url:     linkProvider.getLink()+"/addadminsection",
			dataType: "json",
			data: {json: JSON.stringify(section)},
			success: response,
			error:   function(jqXHR, textStatus, errorThrown) {
				alert("Error, status = " + textStatus + ", " +
					"error thrown: " + errorThrown
				);
			}
		});
	},
	
	removeCourse: function(courseId) {
		$.ajax({
			type:    "POST",
			url:     linkProvider.getLink()+"/removeadmincourse",
			dataType: "text",
			data: {'courseId': courseId},
			success: function(data) {
				//console.log('Course removed');
			},
			error:   function(jqXHR, textStatus, errorThrown) {
				alert("Error, status = " + textStatus + ", " +
					"error thrown: " + errorThrown
				);
			}
		});
	},
	
	removeSection: function(courseId, sectionId) {
		$.ajax({
			type:    "POST",
			url:     linkProvider.getLink()+"/removeadminsection",
			dataType: "json",
			data: {'sectionId':sectionId},
			success: function(data) {
				//console.log('Section removed');
			},
			error:   function(jqXHR, textStatus, errorThrown) {
				alert("Error, status = " + textStatus + ", " +
					"error thrown: " + errorThrown
				);
			}
		});
	},
	
	editCourse: function(course, response) {
		$.ajax({
			type:    "POST",
			url:     linkProvider.getLink()+"/editcourse",
			dataType: "json",
			data: {json: JSON.stringify(course)},
			success: response,
			error:   function(jqXHR, textStatus, errorThrown) {
				alert("Error, status = " + textStatus + ", " +
					"error thrown: " + errorThrown
				);
			}
		});
	},
	
	editSection: function(section, response) {
		$.ajax({
			type:    "POST",
			url:     linkProvider.getLink()+"/editsection",
			dataType: "json",
			data: {json: JSON.stringify(section)},
			success: response,
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
			url:     linkProvider.getLink()+"/editpreferences",
			dataType: "json",
			data: {'username':username, 'cload':newPrefs.courseLoad, 'dayoff':newPrefs.day, 'preftime':newPrefs.time},
			success: function(data) {
				//console.log('Preferences edited');
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
			url:     linkProvider.getLink()+"/editneededcourses",
			dataType: "json",
			data: {'username':username, 'json':'{\"List\":'+newList+'}'},
			success: function(data) {
				//console.log('Needed Courses edited');
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
			url:     linkProvider.getLink()+"/edittakencourses",
			dataType: "json",
			data: {'username':username, 'json':'{\"List\":'+newList+'}'},
			success: function(data) {
				//console.log('Taken Courses edited');
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
			url:     linkProvider.getLink()+"/editusername",
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
	
	editEmail: function(newEmail, response) {
		var username = cookieManager.getCookie('username');
		$.ajax({
			type:    "POST",
			url:     linkProvider.getLink()+"/editemail",
			dataType: "json",
			data: {'old':username, 'new':newEmail},
			success: response,
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
			url:     linkProvider.getLink()+"/editpassword",
			dataType: "json",
			data: {'old':username, 'new':newPassword},
			success: function(data) {
				//console.log('Password edited');
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
			url:     linkProvider.getLink()+"/email",
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