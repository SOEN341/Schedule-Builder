var PreferencesPage = React.createClass({
	getInitialState: function() {
		return {
			classDialogOpen: false,
			dialogMode: 1,
			neededCourses: serverBridge.getNeededCourses(),
			takenCourses: serverBridge.getTakenCourses()
		}
	},

	render: function() {
		return (
			<div>
				{this.state.classDialogOpen? <ClassDialog mode={this.state.dialogMode} close={this.closeClassDialog} addNeededCourse={this.addNeededCourse} addTakenCourse={this.addTakenCourse}/>: null}
				<Preferences/>
				<Classes openDialog={this.openClassDialog} takenCourses={this.state.takenCourses} neededCourses={this.state.neededCourses}/>
				<br/>
				<div style={{textAlign:'center'}}><RBS.Button onClick={this.generateSchedule} bsStyle='primary'>Build Schedule</RBS.Button></div>
			</div>
		)
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
	
	addNeededCourse: function(course) {
		var courses = React.addons.update(this.state.neededCourses, {});
		courses.push(course);
		this.setState({
			neededCourses: courses
		})
	},
	
	addTakenCourse: function(course) {
		var courses = React.addons.update(this.state.takenCourses, {});
		courses.push(course);
		this.setState({
			takenCourses: courses
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
							<TypeaheadInput label='Course Number' onChange={this.numberChange} value={this.state.number} data={["COMP 248", "COMP 249", "COMP 352"]} key={1}/>
						</RBS.Row>
						<RBS.Row>
							<InputElement label='Course Name' onChange={this.nameChange} value={this.state.name} key={2}/>
						</RBS.Row>
					</RBS.Grid>
				</RBS.Modal.Body>
				<RBS.Modal.Footer>
					<RBS.Button onClick={this.addCourse} bsStyle='primary'>Add Class</RBS.Button>
				</RBS.Modal.Footer>
			</RBS.Modal>
		)
	},
	
	numberChange: function(value) {
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

var Preferences = React.createClass({
	getInitialState: function() {
		return {
			classes: 5,
			day: 'None',
			time: 'Any'
		}
	},
	
	render: function() {
		return (
			<div>
				<h3>Preferences</h3>
				<RBS.Grid fluid={true} style={{width:'40%', backgroundColor:'#D0C5C5'}}>
					<RBS.Row>
						<InputElement label='Classes per semester' value={this.state.classes} onChange={this.onClassesChange}/>
					</RBS.Row>
					<RBS.Row>
						<SelectElement label='Desired day off' value={this.state.day} placeholder='None' data={['None','Monday','Tuesday','Wednesday', 'Thursday', 'Friday']} onChange={this.onDayChange}/>
					</RBS.Row>
					<RBS.Row>
						<SelectElement label='Preferred time of day' value={this.state.time} placeholder='Any' data={['Any', 'Mornings', 'Afternoons', 'Evenings']} onChange={this.onTimeChange}/>
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
				<TakenClasses openDialog={this.props.openDialog} courses={this.props.takenCourses}/>
				<NeededClasses openDialog={this.props.openDialog} courses={this.props.neededCourses}/>
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
					<CourseList courses={this.props.courses}/>
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
					<CourseList courses={this.props.courses}/>
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
						<Course key={this.keys++} name={course.name} number={course.number}/>
					)
				}, this)}
			</tbody>
		)
	}
});

var Course = React.createClass({
	render: function() {
		return (
			<tr><td>{this.props.name}</td><td>{this.props.number}</td><td></td></tr>
		)
	}
});