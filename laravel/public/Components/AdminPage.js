var AdminPage = React.createClass({
	getInitialState: function() {
		return {
			courses: []
		}
	},
	
	render: function() {
		return(
			<div>
				{this.state.courseDialogOpen? <CourseDialog close={this.closeCourseDialog} addCourse={this.addCourse}/>: null}
				<div style={{textAlign:'center'}}><RBS.Button onClick={this.openCourseDialog}>Add Course</RBS.Button></div>
				<RBS.Table striped bordered hover style={{backgroundColor:'white', width:'98%', marginLeft:'1%'}}>
					<tbody>
						<tr>
							<td style={{width: '12%'}}>Class Name</td>
							<td style={{width: '12%'}}>Course Number</td>
							<td style={{width: '12%'}}>Semester</td>
							<td style={{width: '30%'}}>Description</td>
							<td style={{width: '12%'}}>Credits</td>
							<td style={{width: '10%'}}></td>
						</tr>
						{this.state.courses.map(function(course) {
							return (
								<AdminCourse key={course.courseId} course={course} changePage={this.props.changePage} remove={this.removeCourse.bind(this, course.courseId)}/>
							)
						}, this)}
					</tbody>
				</RBS.Table>
				<div style={{textAlign:'center'}}><RBS.Button onClick={this.openCourseDialog}>Add Course</RBS.Button></div>
			</div>
		)
	},
	
	componentDidMount: function() {
		//this.keys=0;
		var self=this;
		serverBridge.getCourses(function(data) {
			console.log(data);
			self.setState({
				courses: JSON.parse(data)
			});
		});
	},
	
	removeCourse: function(courseId) {
		var courses = React.addons.update(this.state.courses, {});
		var index=-1;
		for(var i=0; i<courses.length; i++) {
			if(courses[i].courseId==courseId)
			{
				index=i;
				break;
			}
		}
		if(index!=-1) {
			serverBridge.removeCourse(this.state.courses[index].courseId);
			courses.splice(i, 1);
			this.setState({
				courses: courses
			})
		}
	},
	
	addCourse: function(course) {
		var courses = React.addons.update(this.state.courses, {});
		courses.push(course);
		this.setState({
			courses: courses,
			courseDialogOpen: false
		});
	},
	
	openCourseDialog: function() {
		this.setState({
			courseDialogOpen: true
		})
	},
	
	closeCourseDialog: function() {
		this.setState({
			courseDialogOpen: false
		})
	}
});

var AdminCourse = React.createClass({
	render: function() {
		return (
			<tr><td><a onClick={this.edit}>{this.props.course.name}</a></td>
			<td>{this.props.course.courseCode}</td>
			<td>{this.props.course.semester}</td>
			<td>{this.props.course.description}</td>
			<td>{this.props.course.credits}</td>
			<td><img onClick={this.props.remove} src="Images/delete.png" title="Remove Course" style={{height: '15px', width: '15px'}}/></td></tr>
		)
	},
	
	edit: function()
	{
		cookieManager.addCookie('CourseInfo', JSON.stringify(this.props.course), 7)
		this.props.changePage(7)
	}
});

var CourseDialog = React.createClass({
	getInitialState: function() {
		return {
			name: '',
			courseCode: '',
			semester: 'Fall',
			description: '',
			credits: '',
			courseCodeHelp: ''
		}
	},
	
	render:function() {
		return (
			<RBS.Modal show={true} onHide={this.props.close}>
				<RBS.Modal.Header closeButton>
					<RBS.Modal.Title>Add Course</RBS.Modal.Title>
				</RBS.Modal.Header>
				<RBS.Modal.Body>
					<RBS.Table>
						<tbody>
							<tr>
								<td style={{width: '30%'}}>Course Number</td>
								<td style={{width: '70%'}}><InputElement onChange={this.courseCodeChange} value={this.state.courseCode} bsStyle={this.state.courseCodeValid} help={this.state.courseCodeHelp}/></td>
							</tr>
							<tr>
								<td>Course Name</td>
								<td><InputElement onChange={this.nameChange} value={this.state.name} bsStyle={this.state.nameValid} help={this.state.nameHelp}/></td>
							</tr>
							<tr>
								<td>Semester</td>
								<td><SelectElement onChange={this.semesterChange} value={this.state.semester} data={['Fall', 'Winter', 'Summer', 'Fall/Summer']}/></td>
							</tr>
							<tr>
								<td>Description</td>
								<td><InputElement type="textarea" onChange={this.descriptionChange} value={this.state.description} bsStyle={this.state.descriptionValid} help={this.state.descriptionHelp}/></td>
							</tr>
							<tr>
								<td>Credits</td>
								<td><InputElement onChange={this.creditsChange} value={this.state.credits} bsStyle={this.state.creditsValid} help={this.state.creditsHelp}/></td>
							</tr>
						</tbody>
					</RBS.Table>
				</RBS.Modal.Body>
				<RBS.Modal.Footer>
					<RBS.Button onClick={this.addCourse} bsStyle='primary'>Add Course</RBS.Button>
				</RBS.Modal.Footer>
			</RBS.Modal>
		)
	},
	
	courseCodeChange: function(value) {
		var validation=undefined;
		var help='';
		if(value.length!=8||value.charAt(4)!=' ') {
			validation='error';
			help='Course number in wrong format';
		}
		this.setState({
			courseCode: value,
			courseCodeValid: validation,
			courseCodeHelp: help
		})
	},
	
	nameChange: function(value) {
		var validation=undefined;
		if(value.length==0) {
			validation='error';
		}
		this.setState({
			name: value,
			nameValid: validation,
			nameHelp: ''
		});
	},
	
	addCourse: function() {
		var course = {
			name:this.state.name,
			courseCode: this.state.courseCode,
			semester: this.state.semester,
			description: this.state.description,
			credits: this.state.credits
		}
		if(this.state.name.length>0&&this.state.courseCode.length>0&&this.state.description.length>0&&this.state.credits.length>0&&this.state.courseCodeValid!='error'&&this.state.creditsValid!='error') {
			var self=this;
			serverBridge.addCourse(course, function(data) {
				console.log(data);
				if(data.success=='true') {
					course = {
						courseId: Number(data.courseId),
						name: course.name,
						courseCode: course.courseCode,
						semester: course.semester,
						description: course.description,
						credits: course.credits
					}
					self.props.addCourse(course);
				}
				else {
					self.setState({
						courseCodeValid: 'error',
						courseCodeHelp: 'A course with that course number already exists in that semester in the database'
					});
				}
			});
		}
		if(this.state.name.length==0) {
			this.setState({
				nameValid: 'error',
				nameHelp: 'Name cannot be left blank'
			})
		}
		if(this.state.courseCode.length==0) {
			this.setState({
				courseCodeValid: 'error',
				courseCodeHelp: 'Course Number cannot be left blank'
			})
		}
		if(this.state.description.length==0) {
			this.setState({
				descriptionValid: 'error',
				descriptionHelp: 'Description cannot be left blank'
			})
		}
		if(this.state.credits.length==0) {
			this.setState({
				creditsValid: 'error',
				creditsHelp: 'Credits cannot be left blank'
			})
		}
	},
	
	semesterChange: function(value) {
		this.setState({
			semester: value
		})
	},
	
	descriptionChange: function(value) {
		var validation=undefined;
		if(value.length==0) {
			validation='error';
		}
		this.setState({
			description: value,
			descriptionValid: validation,
			descriptionHelp: ''
		})
	},
	
	creditsChange: function(value) {
		var validation=undefined;
		var help='';
		if(isNaN(value)) {
			validation='error';
			help='Credits must be a number';
		}
		else if(Number(value)<1||Number(value)>5) {
			validation='error';
			help='Credits must be between 1 and 5';
		}
		this.setState({
			credits: value,
			creditsValid: validation,
			creditsHelp: help
		})
	}
});