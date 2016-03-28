var PreferencesPage = React.createClass({
	getInitialState: function() {
		var cookies=this.loadCookies();
		return {
			classDialogOpen: false,
			editingDialogOpen: false,
			editingIndex:0,
			dialogMode: 1,
			neededCourses: cookies.needed,
			takenCourses: cookies.taken,
			courses: serverBridge.getCourses(),
			courseLoad: cookies.preferences.classes,
			day: cookies.preferences.day,
			time: cookies.preferences.time
		}
	},

	render: function() {
		var editingCourse={};
		if(this.state.dialogMode==1&&this.state.takenCourses.length>0) {
			console.log('edit taken course ' + this.state.editingIndex);
			editingCourse=this.state.takenCourses[this.state.editingIndex];
		}
		else if(this.state.neededCourses.length>0) {
			console.log('edit needed course ' + this.state.editingIndex);
			editingCourse=this.state.neededCourses[this.state.editingIndex];
		}
		
		return (
			<div>
				{this.state.classDialogOpen? <ClassDialog mode={this.state.dialogMode} close={this.closeClassDialog} addNeededCourse={this.addNeededCourse} addTakenCourse={this.addTakenCourse} courses={this.state.courses}/>: null}
				{this.state.editingDialogOpen? <EditingDialog mode={this.state.dialogMode} close={this.closeEditingDialog} courses={this.state.courses} course={editingCourse} edit={this.editCourse}/>: null}
				<Preferences courseLoad={this.state.courseLoad} day={this.state.day} time={this.state.time}/>
				<Classes binder={this} openDialog={this.openClassDialog} takenCourses={this.state.takenCourses} neededCourses={this.state.neededCourses} removeTakenCourse={this.removeTakenCourse} removeNeededCourse={this.removeNeededCourse} editNeededCourse={this.startEditNeededCourse} editTakenCourse={this.startEditTakenCourse}/>
				<br/>
				<div style={{textAlign:'center'}}><RBS.Button onClick={this.generateSchedule} bsStyle='primary'>Build Schedule</RBS.Button></div>
			</div>
		)
	},
	
	loadCookies: function() {
		var username=cookieManager.getCookie('username');
		if(username=='') {
			this.props.changePage(0);
		}
		var takenCourses=cookieManager.getCookie('taken');
		if(takenCourses=='') {
			takenCourses = serverBridge.getTakenCourses();
			cookieManager.addCookie('taken', JSON.stringify(takenCourses), 7);
		}
		else {
			takenCourses = JSON.parse(takenCourses);
		}
		
		var neededCourses=cookieManager.getCookie('needed');
		if(neededCourses=='') {
			neededCourses = serverBridge.getNeededCourses();
			cookieManager.addCookie('needed', JSON.stringify(neededCourses), 7);
		}
		else {
			neededCourses = JSON.parse(neededCourses);
		}
		
		var prefs = cookieManager.getCookie('prefs');
		if(prefs=='') {
			prefs = serverBridge.getUserPrefs();
			cookieManager.addCookie('prefs', JSON.stringify(prefs), 7);
		}
		else {
			prefs = JSON.parse(prefs);
		}
		
		return {needed: neededCourses, taken: takenCourses, preferences: prefs};
	},
	
	generateSchedule: function() {
		//Uncomment this when the schedule page actually exists
		//this.props.changePage(3);
	},

	openClassDialog: function(mode) {
		this.setState({
			classDialogOpen: true,
			dialogMode: mode
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
			editingIndex: index
		})
	},

	closeEditingDialog: function() {
		this.setState({
			editingDialogOpen: false
		})
	},
	
	addNeededCourse: function(course) {
		var courses = React.addons.update(this.state.neededCourses, {});
		courses.push(course);
		this.setState({
			neededCourses: courses
		});
		cookieManager.addCookie('needed', JSON.stringify(courses), 7);
		serverBridge.editNeededCourses(courses);
	},
	
	addTakenCourse: function(course) {
		var courses = React.addons.update(this.state.takenCourses, {});
		courses.push(course);
		this.setState({
			takenCourses: courses
		});
		cookieManager.addCookie('taken', JSON.stringify(courses), 7);
		serverBridge.editTakenCourses(courses);
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
			serverBridge.editNeededCourses(courses);
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
			serverBridge.editTakenCourses(courses);
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
		if(this.state.mode==1) {
			var courses = React.addons.update(this.state.takenCourses, {});
			courses[this.state.editingIndex]=course;
			this.setState({
				takenCourses: courses,
				editingDialogOpen: false
			});
			cookieManager.addCookie('taken', JSON.stringify(courses), 7);
			serverBridge.editTakenCourses(courses);
		}
		else {
			var courses = React.addons.update(this.state.neededCourses, {});
			courses[this.state.editingIndex]=course;
			this.setState({
				neededCourses: courses,
				editingDialogOpen: false
			});
			cookieManager.addCookie('needed', JSON.stringify(courses), 7);
			serverBridge.editNeededCourses(courses);
		}
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

var ClassDialog = React.createClass({
	getInitialState: function() {
		return {
			name: '',
			number: ''
		}
	},
	
	render:function() {
		var type='Needed';
		if(this.props.mode==1) {
			type='Taken';
		}
		return (
			<RBS.Modal show={true} onHide={this.props.close}>
				<RBS.Modal.Header closeButton>
					<RBS.Modal.Title>Add {type} Course</RBS.Modal.Title>
				</RBS.Modal.Header>
				<RBS.Modal.Body>
					<RBS.Grid fluid={true}>
						<RBS.Row>
							<TypeaheadInput label='Course Number' onChange={this.numberChange} value={this.state.number} data={this.props.courses} type='number' key={1}/>
						</RBS.Row>
						<RBS.Row>
							<InputElement label='Course Name' onChange={this.nameChange} value={this.state.name} data={this.props.courses} key={2}/>
						</RBS.Row>
					</RBS.Grid>
				</RBS.Modal.Body>
				<RBS.Modal.Footer>
					<RBS.Button onClick={this.addCourse} bsStyle='primary'>Add Course</RBS.Button>
				</RBS.Modal.Footer>
			</RBS.Modal>
		)
	},
	
	numberChange: function(value) {
		if(value.length==8) {
			for(var i=0; i<this.props.courses.length; i++) {
				if(this.props.courses[i].number==value) {
					this.nameChange(this.props.courses[i].name);
					break;
				}
			}
		}
		this.setState({
			number: value
		});
	},
	
	nameChange: function(value) {
		this.setState({
			name: value
		});
	},
	
	addCourse: function() {
		var course = {
			name: this.state.name,
			number: this.state.number
		};
		if(this.props.mode==1)
			this.props.addTakenCourse(course);
		else
			this.props.addNeededCourse(course);
		this.props.close();
	}
});

var EditingDialog = React.createClass({
	getInitialState: function() {
		return {
			name: this.props.course.name,
			number: this.props.course.number
		}
	},
	
	render:function() {
		var type='Needed';
		if(this.props.mode==1) {
			type='Taken';
		}
		return (
			<RBS.Modal show={true} onHide={this.props.close}>
				<RBS.Modal.Header closeButton>
					<RBS.Modal.Title>Edit {type} Course</RBS.Modal.Title>
				</RBS.Modal.Header>
				<RBS.Modal.Body>
					<RBS.Grid fluid={true}>
						<RBS.Row>
							<TypeaheadInput label='Course Number' onChange={this.numberChange} value={this.state.number} data={this.props.courses} type='number' key={1}/>
						</RBS.Row>
						<RBS.Row>
							<InputElement label='Course Name' onChange={this.nameChange} value={this.state.name} data={this.props.courses} key={2}/>
						</RBS.Row>
					</RBS.Grid>
				</RBS.Modal.Body>
				<RBS.Modal.Footer>
					<RBS.Button onClick={this.editCourse} bsStyle='primary'>Edit Course</RBS.Button>
				</RBS.Modal.Footer>
			</RBS.Modal>
		)
	},
	
	numberChange: function(value) {
		if(value.length==8) {
			for(var i=0; i<this.props.courses.length; i++) {
				if(this.props.courses[i].number==value) {
					this.nameChange(this.props.courses[i].name);
					break;
				}
			}
		}
		this.setState({
			number: value
		});
	},
	
	nameChange: function(value) {
		this.setState({
			name: value
		});
	},
	
	editCourse: function() {
		var course = {
			name: this.state.name,
			number: this.state.number
		};
		this.props.edit(course);
		this.props.close();
	}
});

var Preferences = React.createClass({
	render: function() {
		return (
			<div>
				<h3>Preferences</h3>
				<RBS.Grid fluid={true} style={{width:'40%', backgroundColor:'#D0C5C5'}}>
					<RBS.Row>
						<InputElement label='Classes per semester' value={this.props.courseLoad} onChange={this.props.onClassesChange}/>
					</RBS.Row>
					<RBS.Row>
						<SelectElement label='Desired day off' value={this.props.day} placeholder='None' data={['None','Monday','Tuesday','Wednesday', 'Thursday', 'Friday']} onChange={this.props.onDayChange}/>
					</RBS.Row>
					<RBS.Row>
						<SelectElement label='Preferred time of day' value={this.props.time} placeholder='Any' data={['Any', 'Mornings', 'Afternoons', 'Evenings']} onChange={this.props.onTimeChange}/>
					</RBS.Row>
				</RBS.Grid>
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
			semesters: ''
		}
	},
	
	render: function() {
		return (
			<div>
				<h3>Classes</h3>
				<RBS.Grid fluid={true} style={{width:'40%', backgroundColor:'#D0C5C5', paddingTop:'10px'}}>
					<RBS.Row>
						<RBS.Col md={2}/>
						<InputElement label='Semesters Taken' value={this.state.semesters} onChange={this.onSemestersChange} label_md={2} input_md={4}/>
						<RBS.Col md={2}><RBS.Button>Generate class list</RBS.Button></RBS.Col>
					</RBS.Row>
				</RBS.Grid>
				<TakenClasses openDialog={this.props.openDialog} courses={this.props.takenCourses} remove={this.props.removeTakenCourse} binder={this.props.binder} editCourse={this.props.editTakenCourse}/>
				<NeededClasses openDialog={this.props.openDialog} courses={this.props.neededCourses} remove={this.props.removeNeededCourse} binder={this.props.binder} editCourse={this.props.editNeededCourse}/>
			</div>
		)
	},
	
	onSemestersChange: function(value) {
		this.setState({
			semesters: value
		})
	}
});

var TakenClasses = React.createClass({
	render: function() {
		return (
			<div style={{width:'40%', backgroundColor:'#D0C5C5', marginLeft:'30%'}}>
				<RBS.Table striped bordered condensed hover style={{backgroundColor:'white', width:'98%', marginLeft:'1%'}}>
					<thead>
						<tr>
							<th colSpan={3}>Classes Taken</th>
						</tr>
					</thead>
					<CourseList courses={this.props.courses} remove={this.props.remove} binder={this.props.binder} editCourse={this.props.editCourse}/>
				</RBS.Table>
				<div style={{textAlign:'center'}}><RBS.Button onClick={this.openDialog}>Add Class</RBS.Button></div>
				<br/>
			</div>
		)
	},
	
	openDialog: function() {
		this.props.openDialog(1);
	}
});

var NeededClasses = React.createClass({
	render: function() {
		return (
			<div style={{width:'40%', backgroundColor:'#D0C5C5', marginLeft:'30%', paddingBottom:'10px'}}>
				<RBS.Table striped bordered condensed hover style={{backgroundColor:'white', width:'98%', marginLeft:'1%'}}>
					<thead>
						<tr>
							<th colSpan={3}>Classes Needed</th>
						</tr>
					</thead>
					<CourseList courses={this.props.courses} remove={this.props.remove} binder={this.props.binder} editCourse={this.props.editCourse}/>
				</RBS.Table>
				<div style={{textAlign:'center'}}><RBS.Button onClick={this.openDialog}>Add Class</RBS.Button></div>
			</div>
		)
	},
	
	openDialog: function() {
		this.props.openDialog(2);
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
					<td>Class Name</td>
					<td>Course Number</td>
					<td>Buttons</td>
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