var PreferencesPage = React.createClass({
	getInitialState: function() {
		/*cookieManager.removeCookie('taken');
		cookieManager.removeCookie('needed');
		cookieManager.removeCookie('prefs');*/
		return {
			classDialogOpen: false,
			editingDialogOpen: false,
			replaceConfirmDialogOpen: false,
			editingIndex:0,
			replaceIndex: 0,
			editing: false,
			dialogMode: 1,
			neededCourses: [],
			takenCourses: [],
			courses: [],
			courseLoad: 5,
			day: 'None',
			time: 'Any',
			courseLoadHelp: ''
		}
	},

	render: function() {
		if(this.state.editingDialogOpen) {
			var editingCourse={};
			if(this.state.dialogMode==1&&this.state.takenCourses.length>0) {
				editingCourse=this.state.takenCourses[this.state.editingIndex];
			}
			else if(this.state.neededCourses.length>0) {
				editingCourse=this.state.neededCourses[this.state.editingIndex];
			}
		}
		if(this.state.replaceConfirmDialogOpen) {
			var editingCourse={};
			var confirmMessage='';
			var replaceFunction=this.replaceTaken;
			if(this.state.dialogMode==1&&this.state.takenCourses.length>0) {
				editingCourse=this.state.takenCourses[this.state.replaceIndex];
				confirmMessage='The course ' + editingCourse.number + ' that you are trying to add to your needed course list was found in the taken courses list. If we added it, it would have to be removed from the taken courses list. Do you wish to do this?'
				if(this.state.editing)
					replaceFunction=this.replaceTakenEdit;
			}
			else if(this.state.neededCourses.length>0) {
				editingCourse=this.state.neededCourses[this.state.replaceIndex];
				replaceFunction=this.replaceNeeded;
				if(this.state.editing)
					replaceFunction=this.replaceNeededEdit;
				confirmMessage='The course ' + editingCourse.number + ' that you are trying to add to your taken course list was found in the needed courses list. If we added it, it would have to be removed from the needed courses list. Do you wish to do this?'
			}
		}
		return (
			<div>
				{this.state.classDialogOpen? <ClassDialog mode={this.state.dialogMode} close={this.closeClassDialog} addNeededCourse={this.addNeededCourse} addTakenCourse={this.addTakenCourse} courses={this.state.courses}/>: null}
				{this.state.editingDialogOpen? <EditingDialog mode={this.state.dialogMode} close={this.closeEditingDialog} courses={this.state.courses} course={editingCourse} edit={this.editCourse}/>: null}
				{this.state.replaceConfirmDialogOpen? <ConfirmationDialog close={this.closeReplaceConfirmDialog} confirm={replaceFunction} reject={this.closeReplaceConfirmDialog} message={confirmMessage}/>: null}
				<Preferences courseLoad={this.state.courseLoad} day={this.state.day} time={this.state.time} courseLoad={this.state.courseLoad} courseLoadHelp={this.state.courseLoadHelp} courseLoadValid={this.state.courseLoadValid} onTimeChange={this.onTimeChange} onClassesChange={this.onClassesChange} onDayChange={this.onDayChange}/>
				<Classes binder={this} openDialog={this.openClassDialog} takenCourses={this.state.takenCourses} neededCourses={this.state.neededCourses} removeTakenCourse={this.removeTakenCourse} removeNeededCourse={this.removeNeededCourse} editNeededCourse={this.startEditNeededCourse} editTakenCourse={this.startEditTakenCourse} generateClassList={this.generateClassList}/>
				<br/>
				<div style={{textAlign:'center'}}><RBS.Button onClick={this.generateSchedule} bsStyle='primary'>Build Schedule</RBS.Button></div>
			</div>
		)
	},
	
	componentDidMount: function() {
		var cookies=this.loadCookies();
		this.setState({
			neededCourses: cookies.needed,
			takenCourses: cookies.taken,
			courseLoad: cookies.preferences.courseLoad,
			day: cookies.preferences.day,
			time: cookies.preferences.time
		});
	},
	
	loadCookies: function() {
		var username=cookieManager.getCookie('username');
		if(username=='') {
			this.props.changePage(0);
		}
		var self=this;
		var takenCourses=cookieManager.getCookie('taken');
		if(takenCourses=='') {
			takenCourses=[];
			setTimeout(function() {
				serverBridge.getTakenCourses(function(data){
					self.setState({
						takenCourses: data
					});
					cookieManager.addCookie('taken', JSON.stringify(data), 7);
				});
			}, 10);
		}
		else {
			takenCourses = JSON.parse(takenCourses);
		}
		
		var neededCourses=cookieManager.getCookie('needed');
		if(neededCourses=='') {
			neededCourses=[];
			setTimeout(function() {
				serverBridge.getNeededCourses(function(data){
					self.setState({
						neededCourses: data
					});
					cookieManager.addCookie('needed', JSON.stringify(data), 7);
				});
			}, 10);
		}
		else {
			neededCourses = JSON.parse(neededCourses);
		}
		
		var prefs = cookieManager.getCookie('prefs');
		if(prefs=='') {
			prefs={
				courseLoad: 5,
				day: 'None',
				time: 'Any'
			}
			setTimeout(function() {
				serverBridge.getUserPrefs(function(data) {
					console.log('prefs ' + data);
					var prefs = {
						courseLoad: data.courseload,
						day: data.dayoff,
						time: data.preferredTime
					};
					self.setState({
						courseLoad: data.courseload,
						day: data.dayoff,
						time: data.preferredTime
					});
					cookieManager.addCookie('prefs', JSON.stringify(prefs), 7);
				});
			}, 10);
		}
		else {
			prefs = JSON.parse(prefs);
		}
		
		setTimeout(function() {
			serverBridge.getCourses(function(data){
				console.log(data);
				self.setState({
					courses: JSON.parse(data)
				})
			});
		}, 10);


		
		return {needed: neededCourses, taken: takenCourses, preferences: prefs};
	},
	
	generateSchedule: function() {
		this.props.changePage(3);
	},

	openClassDialog: function(mode) {
		this.setState({
			classDialogOpen: true,
			dialogMode: mode,
			editing: false
		})
	},

	closeClassDialog: function() {
		this.setState({
			classDialogOpen: false
		})
	},
	
	openEditingDialog: function(mode, index) {
		this.setState({
			editingDialogOpen: true,
			dialogMode: mode,
			editingIndex: index,
			editing: true
		})
	},

	closeEditingDialog: function() {
		this.setState({
			editingDialogOpen: false
		})
	},
	
	checkInNeeded: function(courseCode) {
		for(var i=0; i<this.state.neededCourses.length; i++) {
			if(this.state.neededCourses[i].number==courseCode) {
				return i;
			}
		}
		return -1;
	},
	
	checkInTaken: function(courseCode) {
		for(var i=0; i<this.state.takenCourses.length; i++) {
			if(this.state.takenCourses[i].number==courseCode) {
				return i;
			}
		}
		return -1;
	},
	
	replaceTaken: function() {
		var course = this.state.takenCourses[this.state.editingIndex];
		var courses = React.addons.update(this.state.takenCourses, {});
		courses.splice(this.editingIndex, 1);
		this.setState({
			takenCourses: courses
		})
		serverBridge.editTakenCourses(JSON.stringify(courses));
		if(courses.length>0) {
			cookieManager.addCookie('taken', JSON.stringify(courses), 7);
		}
		else {
			cookieManager.removeCookie('taken');
		}
		
		courses = React.addons.update(this.state.neededCourses, {});
		courses.push(course);
		this.setState({
			neededCourses: courses,
			replaceConfirmDialogOpen: false
		});
		cookieManager.addCookie('needed', JSON.stringify(courses), 7);
		serverBridge.editNeededCourses(JSON.stringify(courses));
	},
	
	replaceNeeded: function() {
		var course = this.state.neededCourses[this.state.editingIndex];
		var courses = React.addons.update(this.state.neededCourses, {});
		courses.splice(this.editingIndex, 1);
		this.setState({
			neededCourses: courses,
			replaceConfirmDialogOpen: false
		})
		serverBridge.editNeededCourses(JSON.stringify(courses));
		if(courses.length>0) {
			cookieManager.addCookie('needed', JSON.stringify(courses), 7);
		}
		else {
			cookieManager.removeCookie('needed');
		}
		
		courses = React.addons.update(this.state.takenCourses, {});
		courses.push(course);
		this.setState({
			takenCourses: courses
		});
		cookieManager.addCookie('taken', JSON.stringify(courses), 7);
		serverBridge.editTakenCourses(JSON.stringify(courses));
	},
	
	replaceNeededEdit: function() {
		var course = this.state.neededCourses[this.state.editingIndex];
		var courses = React.addons.update(this.state.neededCourses, {});
		courses.splice(this.editingIndex, 1);
		this.setState({
			neededCourses: courses,
			replaceConfirmDialogOpen: false
		})
		serverBridge.editNeededCourses(JSON.stringify(courses));
		if(courses.length>0) {
			cookieManager.addCookie('needed', JSON.stringify(courses), 7);
		}
		else {
			cookieManager.removeCookie('needed');
		}
		
		courses = React.addons.update(this.state.takenCourses, {});
		courses[this.state.editingIndex]=course;
		this.setState({
			takenCourses: courses,
			editingDialogOpen: false
		});
		cookieManager.addCookie('taken', JSON.stringify(courses), 7);
		serverBridge.editTakenCourses(JSON.stringify(courses));
	},
	
	replaceTakenEdit: function() {
		var course = this.state.takenCourses[this.state.editingIndex];
		var courses = React.addons.update(this.state.takenCourses, {});
		courses.splice(this.editingIndex, 1);
		this.setState({
			takenCourses: courses,
			replaceConfirmDialogOpen: false
		})
		serverBridge.editTakenCourses(JSON.stringify(courses));
		if(courses.length>0) {
			cookieManager.addCookie('taken', JSON.stringify(courses), 7);
		}
		else {
			cookieManager.removeCookie('taken');
		}
		
		courses = React.addons.update(this.state.neededCourses, {});
		courses[this.state.editingIndex]=course;
		this.setState({
			neededCourses: courses,
			editingDialogOpen: false
		});
		cookieManager.addCookie('needed', JSON.stringify(courses), 7);
		serverBridge.editNeededCourses(JSON.stringify(courses));
	},
	
	addNeededCourse: function(course) {
		var check=this.checkInTaken(course.number);
		if(check==-1) {
			var courses = React.addons.update(this.state.neededCourses, {});
			courses.push(course);
			this.setState({
				neededCourses: courses
			});
			cookieManager.addCookie('needed', JSON.stringify(courses), 7);
			serverBridge.editNeededCourses(JSON.stringify(courses));
		}
		else {
			this.setState({
				replaceIndex: check,
				replaceConfirmDialogOpen: true,
				dialogMode: 1
			})
		}
	},
	
	addTakenCourse: function(course) {
		var check=this.checkInNeeded(course.number);
		if(check==-1) {
			var courses = React.addons.update(this.state.takenCourses, {});
			courses.push(course);
			this.setState({
				takenCourses: courses
			});
			cookieManager.addCookie('taken', JSON.stringify(courses), 7);
			serverBridge.editTakenCourses(JSON.stringify(courses));
		}
		else {
			this.setState({
				replaceIndex: check,
				replaceConfirmDialogOpen: true,
				dialogMode: 2
			})
		}
	},
	
	removeNeededCourse: function(number) {
		var courses = React.addons.update(this.state.neededCourses, {});
		var index=-1;
		for(var i=0; i<courses.length; i++) {
			if(courses[i].number==number)
			{
				index=i;
				break;
			}
		}
		if(index!=-1) {
			courses.splice(i, 1);
			this.setState({
				neededCourses: courses
			})
			serverBridge.editNeededCourses(JSON.stringify(courses));
			if(courses.length>0) {
				cookieManager.addCookie('needed', JSON.stringify(courses), 7);
			}
			else {
				cookieManager.removeCookie('needed');
			}
		}
	},
	
	removeTakenCourse: function(number) {
		var courses = React.addons.update(this.state.takenCourses, {});
		var index=-1;
		for(var i=0; i<courses.length; i++) {
			if(courses[i].number==number)
			{
				index=i;
				break;
			}
		}
		if(index!=-1) {
			courses.splice(i, 1);
			this.setState({
				takenCourses: courses
			})
			serverBridge.editTakenCourses(JSON.stringify(courses));
			if(courses.length>0) {
				cookieManager.addCookie('taken', JSON.stringify(courses), 7);
			}
			else {
				cookieManager.removeCookie('taken');
			}
		}
	},
	
	startEditNeededCourse: function(number) {
		var courses = React.addons.update(this.state.neededCourses, {});
		var index=-1;
		for(var i=0; i<courses.length; i++) {
			if(courses[i].number==number)
			{
				index=i;
				break;
			}
		}
		if(index!=-1) {
			this.openEditingDialog(0, index);
		}
	},
	
	startEditTakenCourse: function(number) {
		var courses = React.addons.update(this.state.takenCourses, {});
		var index=-1;
		for(var i=0; i<courses.length; i++) {
			if(courses[i].number==number)
			{
				index=i;
				break;
			}
		}
		if(index!=-1) {
			this.openEditingDialog(1, index)
		}
	},
	
	editCourse: function(course) {
		if(this.state.dialogMode==1) {
			var check=this.checkInNeeded(course.number);
			if(check==-1) {
				var courses = React.addons.update(this.state.takenCourses, {});
				courses[this.state.editingIndex]=course;
				this.setState({
					takenCourses: courses,
					editingDialogOpen: false
				});
				cookieManager.addCookie('taken', JSON.stringify(courses), 7);
				serverBridge.editTakenCourses(JSON.stringify(courses));
			}
			else {
				this.setState({
					replaceIndex: check,
					replaceConfirmDialogOpen: true,
					dialogMode: 2
				})
			}
		}
		else {
			var check=this.checkInTaken(course.number);
			if(check==-1) {
				var courses = React.addons.update(this.state.neededCourses, {});
				courses[this.state.editingIndex]=course;
				this.setState({
					neededCourses: courses,
					editingDialogOpen: false
				});
				cookieManager.addCookie('needed', JSON.stringify(courses), 7);
				serverBridge.editNeededCourses(JSON.stringify(courses));
			}
			else {
				this.setState({
					replaceIndex: check,
					replaceConfirmDialogOpen: true,
					dialogMode: 1
				})
			}
		}
	},
	
	onClassesChange: function(value) {
		var validation=undefined;
		var help='';
		if(isNaN(value)) {
			validation='error';
			help='Course load must be a number';
		}
		else if(Number(value)<1||Number(value)>7){
			validation='error';
			help='Only course loads between 1 and 7 are permitted';
		}
		if(validation!='error') {
			var prefs = {
				courseLoad: value,
				day: this.state.day,
				time: this.state.time
			}
			cookieManager.addCookie('prefs', JSON.stringify(prefs), 7);
			serverBridge.editPreferences(prefs);
		}
		this.setState({
			courseLoad: value,
			courseLoadHelp: help,
			courseLoadValid: validation
		})
	},
	
	onTimeChange: function(value) {
		var prefs = {
			courseLoad: this.state.courseLoad,
			day: this.state.day,
			time: value
		}
		cookieManager.addCookie('prefs', JSON.stringify(prefs), 7);
		serverBridge.editPreferences(prefs);
		this.setState({
			time: value
		})
	},
	
	onDayChange: function(value) {
		var prefs = {
			courseLoad: this.state.courseLoad,
			day: value,
			time: this.state.time
		}
		cookieManager.addCookie('prefs', JSON.stringify(prefs), 7);
		serverBridge.editPreferences(prefs);
		this.setState({
			day: value
		})
	},
	
	generateClassList: function(semesters) {
		var needed=[];
		var taken=[];
		if(semesters==0) {
			needed=[
				{name: 'Mathematics for Computer Science', number: 'COMP 232'},
				{name: 'Object-Oriented Programming I', number: 'COMP 248'},
				{name: 'Professional Practice & Responsibility', number: 'ENGR 201'},
				{name: 'Applied Ordinary Differential Equations', number: 'ENGR 213'},
				{name: 'Object-Oriented Programming II', number: 'COMP 249'},
				{name: 'Applied Advanced Calculus', number: 'ENGR 233'},
				{name: 'System Hardware', number: 'SOEN 228'},
				{name: 'Introduction to Web Applications', number: 'SOEN 287'},
				{name: 'Principles of Programming Languages', number: 'COMP 348'},
				{name: 'Data Structures and Algorithms', number: 'COMP 352'},
				{name: 'Technical Writing and Communication', number: 'ENCS 282'},
				{name: 'Sustainable Development and Environmental Stewardship', number: 'ENGR 202'},
				{name: 'Operating Systems', number: 'COMP 346'},
				{name: 'Principles of Electrical Engineering', number: 'ELEC 275'},
				{name: 'Probability and Statistics in Engineering', number: 'ENGR 371'},
				{name: 'Introduction to Formal Methods for Software Engineering', number: 'SOEN 331'},
				{name: 'Software Process', number: 'SOEN 341'},
				{name: 'Introduction to Theoretical Computer Science', number: 'SOEN 335'},
				{name: 'Software Requirements and Specifications', number: 'SOEN 342'},
				{name: 'Software Architecture and Design I', number: 'SOEN 343'},
				{name: 'Management Measurement and Quality Control', number: 'SOEN 384'},
				{name: 'Numerical Methods in Engineering', number: 'ENGR 391'},
				{name: 'Software Architecture and Design II', number: 'SOEN 344'},
				{name: 'Software Testing, Verification and Quality Assurance', number: 'SOEN 345'},
				{name: 'User Interface Design', number: 'SOEN 357'},
				{name: 'Software Engineering Team Design Project', number: 'SOEN 390'},
				{name: 'Capstone Software Engineering Design Project', number: 'SOEN 490'},
				{name: 'Engineering Management Principles and Economics', number: 'ENGR 301'},
				{name: 'Information Systems Security', number: 'SOEN 321'},
				{name: 'Impact of Technology on Society', number: 'ENGR 392'}
			];
		}
		else if(semesters==1) {
			taken=[
				{name: 'Mathematics for Computer Science', number: 'COMP 232'},
				{name: 'Object-Oriented Programming I', number: 'COMP 248'},
				{name: 'Professional Practice & Responsibility', number: 'ENGR 201'},
				{name: 'Applied Ordinary Differential Equations', number: 'ENGR 213'}
			];
			needed=[
				{name: 'Object-Oriented Programming II', number: 'COMP 249'},
				{name: 'Applied Advanced Calculus', number: 'ENGR 233'},
				{name: 'System Hardware', number: 'SOEN 228'},
				{name: 'Introduction to Web Applications', number: 'SOEN 287'},
				{name: 'Principles of Programming Languages', number: 'COMP 348'},
				{name: 'Data Structures and Algorithms', number: 'COMP 352'},
				{name: 'Technical Writing and Communication', number: 'ENCS 282'},
				{name: 'Sustainable Development and Environmental Stewardship', number: 'ENGR 202'},
				{name: 'Operating Systems', number: 'COMP 346'},
				{name: 'Principles of Electrical Engineering', number: 'ELEC 275'},
				{name: 'Probability and Statistics in Engineering', number: 'ENGR 371'},
				{name: 'Introduction to Formal Methods for Software Engineering', number: 'SOEN 331'},
				{name: 'Software Process', number: 'SOEN 341'},
				{name: 'Introduction to Theoretical Computer Science', number: 'SOEN 335'},
				{name: 'Software Requirements and Specifications', number: 'SOEN 342'},
				{name: 'Software Architecture and Design I', number: 'SOEN 343'},
				{name: 'Management Measurement and Quality Control', number: 'SOEN 384'},
				{name: 'Numerical Methods in Engineering', number: 'ENGR 391'},
				{name: 'Software Architecture and Design II', number: 'SOEN 344'},
				{name: 'Software Testing, Verification and Quality Assurance', number: 'SOEN 345'},
				{name: 'User Interface Design', number: 'SOEN 357'},
				{name: 'Software Engineering Team Design Project', number: 'SOEN 390'},
				{name: 'Capstone Software Engineering Design Project', number: 'SOEN 490'},
				{name: 'Engineering Management Principles and Economics', number: 'ENGR 301'},
				{name: 'Information Systems Security', number: 'SOEN 321'},
				{name: 'Impact of Technology on Society', number: 'ENGR 392'}
			];
		}
		else if(semesters==2) {
			taken=[
				{name: 'Mathematics for Computer Science', number: 'COMP 232'},
				{name: 'Object-Oriented Programming I', number: 'COMP 248'},
				{name: 'Professional Practice & Responsibility', number: 'ENGR 201'},
				{name: 'Applied Ordinary Differential Equations', number: 'ENGR 213'},
				{name: 'Object-Oriented Programming II', number: 'COMP 249'},
				{name: 'Applied Advanced Calculus', number: 'ENGR 233'},
				{name: 'System Hardware', number: 'SOEN 228'},
				{name: 'Introduction to Web Applications', number: 'SOEN 287'}
			];
			needed=[
				{name: 'Principles of Programming Languages', number: 'COMP 348'},
				{name: 'Data Structures and Algorithms', number: 'COMP 352'},
				{name: 'Technical Writing and Communication', number: 'ENCS 282'},
				{name: 'Sustainable Development and Environmental Stewardship', number: 'ENGR 202'},
				{name: 'Operating Systems', number: 'COMP 346'},
				{name: 'Principles of Electrical Engineering', number: 'ELEC 275'},
				{name: 'Probability and Statistics in Engineering', number: 'ENGR 371'},
				{name: 'Introduction to Formal Methods for Software Engineering', number: 'SOEN 331'},
				{name: 'Software Process', number: 'SOEN 341'},
				{name: 'Introduction to Theoretical Computer Science', number: 'SOEN 335'},
				{name: 'Software Requirements and Specifications', number: 'SOEN 342'},
				{name: 'Software Architecture and Design I', number: 'SOEN 343'},
				{name: 'Management Measurement and Quality Control', number: 'SOEN 384'},
				{name: 'Numerical Methods in Engineering', number: 'ENGR 391'},
				{name: 'Software Architecture and Design II', number: 'SOEN 344'},
				{name: 'Software Testing, Verification and Quality Assurance', number: 'SOEN 345'},
				{name: 'User Interface Design', number: 'SOEN 357'},
				{name: 'Software Engineering Team Design Project', number: 'SOEN 390'},
				{name: 'Capstone Software Engineering Design Project', number: 'SOEN 490'},
				{name: 'Engineering Management Principles and Economics', number: 'ENGR 301'},
				{name: 'Information Systems Security', number: 'SOEN 321'},
				{name: 'Impact of Technology on Society', number: 'ENGR 392'}
			];
		}
		else if(semesters==3) {
			taken=[
				{name: 'Mathematics for Computer Science', number: 'COMP 232'},
				{name: 'Object-Oriented Programming I', number: 'COMP 248'},
				{name: 'Professional Practice & Responsibility', number: 'ENGR 201'},
				{name: 'Applied Ordinary Differential Equations', number: 'ENGR 213'},
				{name: 'Object-Oriented Programming II', number: 'COMP 249'},
				{name: 'Applied Advanced Calculus', number: 'ENGR 233'},
				{name: 'System Hardware', number: 'SOEN 228'},
				{name: 'Introduction to Web Applications', number: 'SOEN 287'},
				{name: 'Principles of Programming Languages', number: 'COMP 348'},
				{name: 'Data Structures and Algorithms', number: 'COMP 352'},
				{name: 'Technical Writing and Communication', number: 'ENCS 282'},
				{name: 'Sustainable Development and Environmental Stewardship', number: 'ENGR 202'}
			];
			needed=[
				{name: 'Operating Systems', number: 'COMP 346'},
				{name: 'Principles of Electrical Engineering', number: 'ELEC 275'},
				{name: 'Probability and Statistics in Engineering', number: 'ENGR 371'},
				{name: 'Introduction to Formal Methods for Software Engineering', number: 'SOEN 331'},
				{name: 'Software Process', number: 'SOEN 341'},
				{name: 'Introduction to Theoretical Computer Science', number: 'SOEN 335'},
				{name: 'Software Requirements and Specifications', number: 'SOEN 342'},
				{name: 'Software Architecture and Design I', number: 'SOEN 343'},
				{name: 'Management Measurement and Quality Control', number: 'SOEN 384'},
				{name: 'Numerical Methods in Engineering', number: 'ENGR 391'},
				{name: 'Software Architecture and Design II', number: 'SOEN 344'},
				{name: 'Software Testing, Verification and Quality Assurance', number: 'SOEN 345'},
				{name: 'User Interface Design', number: 'SOEN 357'},
				{name: 'Software Engineering Team Design Project', number: 'SOEN 390'},
				{name: 'Capstone Software Engineering Design Project', number: 'SOEN 490'},
				{name: 'Engineering Management Principles and Economics', number: 'ENGR 301'},
				{name: 'Information Systems Security', number: 'SOEN 321'},
				{name: 'Impact of Technology on Society', number: 'ENGR 392'}
			];
		}
		else if(semesters==4) {
			taken=[
				{name: 'Mathematics for Computer Science', number: 'COMP 232'},
				{name: 'Object-Oriented Programming I', number: 'COMP 248'},
				{name: 'Professional Practice & Responsibility', number: 'ENGR 201'},
				{name: 'Applied Ordinary Differential Equations', number: 'ENGR 213'},
				{name: 'Object-Oriented Programming II', number: 'COMP 249'},
				{name: 'Applied Advanced Calculus', number: 'ENGR 233'},
				{name: 'System Hardware', number: 'SOEN 228'},
				{name: 'Introduction to Web Applications', number: 'SOEN 287'},
				{name: 'Principles of Programming Languages', number: 'COMP 348'},
				{name: 'Data Structures and Algorithms', number: 'COMP 352'},
				{name: 'Technical Writing and Communication', number: 'ENCS 282'},
				{name: 'Sustainable Development and Environmental Stewardship', number: 'ENGR 202'},
				{name: 'Operating Systems', number: 'COMP 346'},
				{name: 'Principles of Electrical Engineering', number: 'ELEC 275'},
				{name: 'Probability and Statistics in Engineering', number: 'ENGR 371'},
				{name: 'Introduction to Formal Methods for Software Engineering', number: 'SOEN 331'},
				{name: 'Software Process', number: 'SOEN 341'}
			];
			needed=[
				{name: 'Introduction to Theoretical Computer Science', number: 'SOEN 335'},
				{name: 'Software Requirements and Specifications', number: 'SOEN 342'},
				{name: 'Software Architecture and Design I', number: 'SOEN 343'},
				{name: 'Management Measurement and Quality Control', number: 'SOEN 384'},
				{name: 'Numerical Methods in Engineering', number: 'ENGR 391'},
				{name: 'Software Architecture and Design II', number: 'SOEN 344'},
				{name: 'Software Testing, Verification and Quality Assurance', number: 'SOEN 345'},
				{name: 'User Interface Design', number: 'SOEN 357'},
				{name: 'Software Engineering Team Design Project', number: 'SOEN 390'},
				{name: 'Capstone Software Engineering Design Project', number: 'SOEN 490'},
				{name: 'Engineering Management Principles and Economics', number: 'ENGR 301'},
				{name: 'Information Systems Security', number: 'SOEN 321'},
				{name: 'Impact of Technology on Society', number: 'ENGR 392'}
			];
		}
		else if(semesters==5) {
			taken=[
				{name: 'Mathematics for Computer Science', number: 'COMP 232'},
				{name: 'Object-Oriented Programming I', number: 'COMP 248'},
				{name: 'Professional Practice & Responsibility', number: 'ENGR 201'},
				{name: 'Applied Ordinary Differential Equations', number: 'ENGR 213'},
				{name: 'Object-Oriented Programming II', number: 'COMP 249'},
				{name: 'Applied Advanced Calculus', number: 'ENGR 233'},
				{name: 'System Hardware', number: 'SOEN 228'},
				{name: 'Introduction to Web Applications', number: 'SOEN 287'},
				{name: 'Principles of Programming Languages', number: 'COMP 348'},
				{name: 'Data Structures and Algorithms', number: 'COMP 352'},
				{name: 'Technical Writing and Communication', number: 'ENCS 282'},
				{name: 'Sustainable Development and Environmental Stewardship', number: 'ENGR 202'},
				{name: 'Operating Systems', number: 'COMP 346'},
				{name: 'Principles of Electrical Engineering', number: 'ELEC 275'},
				{name: 'Probability and Statistics in Engineering', number: 'ENGR 371'},
				{name: 'Introduction to Formal Methods for Software Engineering', number: 'SOEN 331'},
				{name: 'Software Process', number: 'SOEN 341'},
				{name: 'Introduction to Theoretical Computer Science', number: 'SOEN 335'},
				{name: 'Software Requirements and Specifications', number: 'SOEN 342'},
				{name: 'Software Architecture and Design I', number: 'SOEN 343'},
				{name: 'Management Measurement and Quality Control', number: 'SOEN 384'},
				{name: 'Numerical Methods in Engineering', number: 'ENGR 391'}
			];
			needed=[
				{name: 'Software Architecture and Design II', number: 'SOEN 344'},
				{name: 'Software Testing, Verification and Quality Assurance', number: 'SOEN 345'},
				{name: 'User Interface Design', number: 'SOEN 357'},
				{name: 'Software Engineering Team Design Project', number: 'SOEN 390'},
				{name: 'Capstone Software Engineering Design Project', number: 'SOEN 490'},
				{name: 'Engineering Management Principles and Economics', number: 'ENGR 301'},
				{name: 'Information Systems Security', number: 'SOEN 321'},
				{name: 'Impact of Technology on Society', number: 'ENGR 392'}
			];
		}
		else if(semesters==6) {
			taken=[
				{name: 'Mathematics for Computer Science', number: 'COMP 232'},
				{name: 'Object-Oriented Programming I', number: 'COMP 248'},
				{name: 'Professional Practice & Responsibility', number: 'ENGR 201'},
				{name: 'Applied Ordinary Differential Equations', number: 'ENGR 213'},
				{name: 'Object-Oriented Programming II', number: 'COMP 249'},
				{name: 'Applied Advanced Calculus', number: 'ENGR 233'},
				{name: 'System Hardware', number: 'SOEN 228'},
				{name: 'Introduction to Web Applications', number: 'SOEN 287'},
				{name: 'Principles of Programming Languages', number: 'COMP 348'},
				{name: 'Data Structures and Algorithms', number: 'COMP 352'},
				{name: 'Technical Writing and Communication', number: 'ENCS 282'},
				{name: 'Sustainable Development and Environmental Stewardship', number: 'ENGR 202'},
				{name: 'Operating Systems', number: 'COMP 346'},
				{name: 'Principles of Electrical Engineering', number: 'ELEC 275'},
				{name: 'Probability and Statistics in Engineering', number: 'ENGR 371'},
				{name: 'Introduction to Formal Methods for Software Engineering', number: 'SOEN 331'},
				{name: 'Software Process', number: 'SOEN 341'},
				{name: 'Introduction to Theoretical Computer Science', number: 'SOEN 335'},
				{name: 'Software Requirements and Specifications', number: 'SOEN 342'},
				{name: 'Software Architecture and Design I', number: 'SOEN 343'},
				{name: 'Management Measurement and Quality Control', number: 'SOEN 384'},
				{name: 'Numerical Methods in Engineering', number: 'ENGR 391'},
				{name: 'Software Architecture and Design II', number: 'SOEN 344'},
				{name: 'Software Testing, Verification and Quality Assurance', number: 'SOEN 345'},
				{name: 'User Interface Design', number: 'SOEN 357'},
				{name: 'Software Engineering Team Design Project', number: 'SOEN 390'}
			];
			needed=[
				{name: 'Capstone Software Engineering Design Project', number: 'SOEN 490'},
				{name: 'Engineering Management Principles and Economics', number: 'ENGR 301'},
				{name: 'Information Systems Security', number: 'SOEN 321'},
				{name: 'Impact of Technology on Society', number: 'ENGR 392'}
			];
		}
		else if(semesters==7) {
			taken=[
				{name: 'Mathematics for Computer Science', number: 'COMP 232'},
				{name: 'Object-Oriented Programming I', number: 'COMP 248'},
				{name: 'Professional Practice & Responsibility', number: 'ENGR 201'},
				{name: 'Applied Ordinary Differential Equations', number: 'ENGR 213'},
				{name: 'Object-Oriented Programming II', number: 'COMP 249'},
				{name: 'Applied Advanced Calculus', number: 'ENGR 233'},
				{name: 'System Hardware', number: 'SOEN 228'},
				{name: 'Introduction to Web Applications', number: 'SOEN 287'},
				{name: 'Principles of Programming Languages', number: 'COMP 348'},
				{name: 'Data Structures and Algorithms', number: 'COMP 352'},
				{name: 'Technical Writing and Communication', number: 'ENCS 282'},
				{name: 'Sustainable Development and Environmental Stewardship', number: 'ENGR 202'},
				{name: 'Operating Systems', number: 'COMP 346'},
				{name: 'Principles of Electrical Engineering', number: 'ELEC 275'},
				{name: 'Probability and Statistics in Engineering', number: 'ENGR 371'},
				{name: 'Introduction to Formal Methods for Software Engineering', number: 'SOEN 331'},
				{name: 'Software Process', number: 'SOEN 341'},
				{name: 'Introduction to Theoretical Computer Science', number: 'SOEN 335'},
				{name: 'Software Requirements and Specifications', number: 'SOEN 342'},
				{name: 'Software Architecture and Design I', number: 'SOEN 343'},
				{name: 'Management Measurement and Quality Control', number: 'SOEN 384'},
				{name: 'Numerical Methods in Engineering', number: 'ENGR 391'},
				{name: 'Software Architecture and Design II', number: 'SOEN 344'},
				{name: 'Software Testing, Verification and Quality Assurance', number: 'SOEN 345'},
				{name: 'User Interface Design', number: 'SOEN 357'},
				{name: 'Software Engineering Team Design Project', number: 'SOEN 390'},
				{name: 'Information Systems Security', number: 'SOEN 321'}
			];
			needed=[
				{name: 'Capstone Software Engineering Design Project', number: 'SOEN 490'},
				{name: 'Engineering Management Principles and Economics', number: 'ENGR 301'},
				{name: 'Impact of Technology on Society', number: 'ENGR 392'}
			];
		}
		else if(semesters>=8) {
			taken=[
				{name: 'Mathematics for Computer Science', number: 'COMP 232'},
				{name: 'Object-Oriented Programming I', number: 'COMP 248'},
				{name: 'Professional Practice & Responsibility', number: 'ENGR 201'},
				{name: 'Applied Ordinary Differential Equations', number: 'ENGR 213'},
				{name: 'Object-Oriented Programming II', number: 'COMP 249'},
				{name: 'Applied Advanced Calculus', number: 'ENGR 233'},
				{name: 'System Hardware', number: 'SOEN 228'},
				{name: 'Introduction to Web Applications', number: 'SOEN 287'},
				{name: 'Principles of Programming Languages', number: 'COMP 348'},
				{name: 'Data Structures and Algorithms', number: 'COMP 352'},
				{name: 'Technical Writing and Communication', number: 'ENCS 282'},
				{name: 'Sustainable Development and Environmental Stewardship', number: 'ENGR 202'},
				{name: 'Operating Systems', number: 'COMP 346'},
				{name: 'Principles of Electrical Engineering', number: 'ELEC 275'},
				{name: 'Probability and Statistics in Engineering', number: 'ENGR 371'},
				{name: 'Introduction to Formal Methods for Software Engineering', number: 'SOEN 331'},
				{name: 'Software Process', number: 'SOEN 341'},
				{name: 'Introduction to Theoretical Computer Science', number: 'SOEN 335'},
				{name: 'Software Requirements and Specifications', number: 'SOEN 342'},
				{name: 'Software Architecture and Design I', number: 'SOEN 343'},
				{name: 'Management Measurement and Quality Control', number: 'SOEN 384'},
				{name: 'Numerical Methods in Engineering', number: 'ENGR 391'},
				{name: 'Software Architecture and Design II', number: 'SOEN 344'},
				{name: 'Software Testing, Verification and Quality Assurance', number: 'SOEN 345'},
				{name: 'User Interface Design', number: 'SOEN 357'},
				{name: 'Software Engineering Team Design Project', number: 'SOEN 390'},
				{name: 'Capstone Software Engineering Design Project', number: 'SOEN 490'},
				{name: 'Engineering Management Principles and Economics', number: 'ENGR 301'},
				{name: 'Information Systems Security', number: 'SOEN 321'},
				{name: 'Impact of Technology on Society', number: 'ENGR 392'}
			];
		}
		this.setState({
			neededCourses: needed,
			takenCourses: taken
		});
		cookieManager.addCookie('taken', JSON.stringify(taken), 7);
		cookieManager.addCookie('needed', JSON.stringify(needed), 7);
		setTimeout(function() {
			serverBridge.editTakenCourses(JSON.stringify(taken));
		}, 10);
		serverBridge.editNeededCourses(JSON.stringify(needed));
	}
});

var Preferences = React.createClass({
	render: function() {
		return (
			<div>
				<h3 id="title3">Preferences</h3>
				 <div className="Grid">
					<RBS.Grid fluid={true} style={{width:'40%', backgroundColor:'#34495e', borderRadius: '15px'}}>
						<RBS.Row>
							<div className="CPS">
								<InputElement label='Classes per semester' value={this.props.courseLoad} onChange={this.props.onClassesChange} help={this.props.courseLoadHelp} bsStyle={this.props.courseLoadValid}/>
							</div>
						</RBS.Row>
						<RBS.Row>
							<SelectElement label='Desired day off' value={this.props.day} placeholder='None' data={['None','Monday','Tuesday','Wednesday', 'Thursday', 'Friday']} onChange={this.props.onDayChange}/>
						</RBS.Row>
						<RBS.Row>
							<SelectElement label='Preferred time of day' value={this.props.time} placeholder='Any' data={['Any', 'Mornings', 'Afternoons', 'Evenings']} onChange={this.props.onTimeChange}/>
						</RBS.Row>
					</RBS.Grid>
				 </div>
			</div>
		)
	},
	
	onClassesChange: function(value) {
		this.setState({
			classes: value
		})
	},
	
	onTimeChange: function(value) {
		this.setState({
			time: value
		})
	},
	
	onDayChange: function(value) {
		this.setState({
			day: value
		})
	}
});

var Classes = React.createClass({
	getInitialState: function() {
		return {
			semesters: '',
			semestersHelp: '',
			confirmDialogOpen: false
		}
	},
	
	render: function() {
		return (
			<div>
				{this.state.confirmDialogOpen? <ConfirmationDialog close={this.closeConfirmDialog} confirm={this.generateClassList} reject={this.closeConfirmDialog} message='Are you sure you wish to generate the course lists? This will overwrite your current lists based on your number of semesters and the recommended course sequence'/>: null}
				<h3 id="title3">Classes</h3>
					<div className="Grid">
						<RBS.Grid fluid={true} style={{width:'40%', backgroundColor:'#34495e', paddingTop:'10px', borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}}>
							<RBS.Row>
								<RBS.Col md={2}/>
								<InputElement label='Semesters Taken' help={this.state.semestersHelp} bsStyle={this.state.semestersValid} value={this.state.semesters} onChange={this.onSemestersChange} label_md={2} input_md={4}/>
								<RBS.Col md={2}><RBS.Button onClick={this.checkGenerateClassList}>Generate course list</RBS.Button></RBS.Col>
							</RBS.Row>
						</RBS.Grid>
					</div>
				<TakenClasses openDialog={this.props.openDialog} courses={this.props.takenCourses} remove={this.props.removeTakenCourse} binder={this.props.binder} editCourse={this.props.editTakenCourse}/>
				<NeededClasses openDialog={this.props.openDialog} courses={this.props.neededCourses} remove={this.props.removeNeededCourse} binder={this.props.binder} editCourse={this.props.editNeededCourse}/>
			</div>
		)
	},
	
	onSemestersChange: function(value) {
		var validation = undefined;
		var help='';
		if((isNaN(value)||Number(value)<0||Number(value)!==parseInt(value, 10))&&value!='') {
			validation='error';
			help='Must be a positive integer';
		}
		this.setState({
			semesters: value,
			semestersValid: validation,
			semestersHelp: help
		})
	},
	
	closeConfirmDialog: function() {
		this.setState({
			confirmDialogOpen: false
		});
	},
	
	openConfirmDialog: function() {
		this.setState({
			confirmDialogOpen: true
		});
	},
	
	checkGenerateClassList: function() {
		if(!isNaN(this.state.semesters)&&this.state.semesters!=''&&this.state.semesters>=0&&Number(this.state.semesters)===parseInt(this.state.semesters, 10)) {
			this.openConfirmDialog();
		}
	},
	
	generateClassList:  function() {
		this.props.generateClassList(this.state.semesters);
		this.closeConfirmDialog();
	}
});

var TakenClasses = React.createClass({
	getInitialState: function() {
		return {
			expanded: false
		}
	},
	
	render: function() {
		var header = 'Courses Taken (showing 3 of ' + this.props.courses.length + ')';
		if(this.state.expanded || this.props.courses.length<=3) {
			header = 'Courses Taken (showing ' + this.props.courses.length + ' of ' + this.props.courses.length + ')';
		}
		if(this.state.expanded) {
			var courses = this.props.courses;
			var image = 'Images/compress.png';
		}
		else {
			var image = 'Images/expand.png';
			var courses = [];
			if(this.props.courses.length>0) {
				courses.push(this.props.courses[0]);
			}
			if(this.props.courses.length>1) {
				courses.push(this.props.courses[1]);
			}
			if(this.props.courses.length>2) {
				courses.push(this.props.courses[2]);
			}
		}
		return (
			<div style={{width:'40%', backgroundColor:'#34495e', marginLeft:'30%'}}>
				<RBS.Table striped bordered hover style={{backgroundColor:'white', width:'98%', marginLeft:'1%'}}>
					<thead onClick={this.expand}>
						<tr>
							<th colSpan={3}>{header}<img src={image} style={{height: '15px', width: '15px'}}/></th>
						</tr>
					</thead>
					<CourseList courses={courses} remove={this.props.remove} binder={this.props.binder} editCourse={this.props.editCourse}/>
				</RBS.Table>
				<div style={{textAlign:'center'}}><RBS.Button onClick={this.openDialog}>Add Class</RBS.Button></div>
				<br/>
			</div>
		)
	},
	
	openDialog: function() {
		this.props.openDialog(1);
	},
	
	expand: function() {
		var expanded = (!this.state.expanded);
		this.setState({
			expanded: expanded
		});
	}
});

var NeededClasses = React.createClass({
	getInitialState: function() {
		return {
			expanded: false
		}
	},
	
	render: function() {
		var header = 'Courses Needed (showing 3 of ' + this.props.courses.length + ')';
		if(this.state.expanded || this.props.courses.length<=3) {
			header = 'Courses Needed (showing ' + this.props.courses.length + ' of ' + this.props.courses.length + ')';
		}
		if(this.state.expanded) {
			var courses = this.props.courses;
			var image = 'Images/compress.png';
		}
		else {
			var image = 'Images/expand.png';
			var courses = [];
			if(this.props.courses.length>0) {
				courses.push(this.props.courses[0]);
			}
			if(this.props.courses.length>1) {
				courses.push(this.props.courses[1]);
			}
			if(this.props.courses.length>2) {
				courses.push(this.props.courses[2]);
			}
		}
		return (
			<div style={{width:'40%', backgroundColor:'#34495e', marginLeft:'30%', paddingBottom:'10px'}}>
				<RBS.Table striped bordered hover style={{backgroundColor:'white', width:'98%', marginLeft:'1%', borderBottomLeftRadius: '15px'}}>
					<thead onClick={this.expand}>
						<tr>
							<th colSpan={3}>{header}<img src={image} style={{height: '15px', width: '15px'}}/></th>
						</tr>
					</thead>
					<CourseList courses={courses} remove={this.props.remove} binder={this.props.binder} editCourse={this.props.editCourse}/>
				</RBS.Table>
				<div style={{textAlign:'center'}}><RBS.Button onClick={this.openDialog}>Add Class</RBS.Button></div>
			</div>
		)
	},
	
	openDialog: function() {
		this.props.openDialog(2);
	},
	
	expand: function() {
		var expanded = (!this.state.expanded);
		this.setState({
			expanded: expanded
		});
	}
});

var CourseList = React.createClass({
	componentWillMount: function() {
		this.keys=0;
	},
	
	render: function() {
		return (
			<tbody>
				<tr>
					<td style={{width: '40%'}}>Class Name</td>
					<td style={{width: '40%'}}>Course Number</td>
					<td style={{width: '20%'}}></td>
				</tr>
				{this.props.courses.map(function(course) {
					return (
						<Course key={this.keys++} name={course.name} number={course.number} remove={this.props.remove.bind(this.props.binder, course.number)} edit={this.props.editCourse.bind(this.props.binder, course.number)}/>
					)
				}, this)}
			</tbody>
		)
	}
});

var Course = React.createClass({
	render: function() {
		return (
			<tr><td>{this.props.name}</td>
			<td>{this.props.number}</td>
			<td><img onClick={this.props.edit} src="Images/edit.png" title="Edit Course" style={{height: '15px', width: '15px'}}/>&nbsp;&nbsp;
			<img onClick={this.props.remove} src="Images/delete.png" title="Remove Course" style={{height: '15px', width: '15px'}}/></td></tr>
		)
	}
});