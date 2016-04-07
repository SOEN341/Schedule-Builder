var AdminEdit = React.createClass({
	getInitialState: function() {
		return {
			sections: [],
			course:{courseID:'', name:'', courseCode:'', semester:'Fall', description:'', credits:''},
			courseValidations:{},
			courseHelp:{nameHelp:'', courseCodeHelp:'', descriptionHelp:'', creditsHelp:''}
		}
	},
	
	render: function() {
		return(
			<div>
				<CourseInfo course={this.state.course} validation={this.state.courseValidations} help={this.state.courseHelp} nameChange={this.nameChange} courseCodeChange={this.courseCodeChange} semesterChange={this.semesterChange} descriptionChange={this.descriptionChange} creditsChange={this.creditsChange} save={this.saveCourseChange}/>
				<RBS.Table striped bordered hover style={{backgroundColor:'white', width:'98%', marginLeft:'1%'}}>
					<tbody>
						<tr>
							<td style={{width: '12%'}}>Section</td>
							<td style={{width: '12%'}}>Course Number</td>
							<td style={{width: '12%'}}>Type</td>
							<td style={{width: '30%'}}>Day</td>
							<td style={{width: '12%'}}>BeginTime</td>
							<td style={{width: '12%'}}>EndTime</td>
							<td style={{width: '12%'}}>Classroom</td>
							<td style={{width: '10%'}}></td>
						</tr>
						{this.state.sections.map(function(section) {
							return (
								<AdminSection key={this.keys++} section={section}/>
							)
						}, this)}
					</tbody>
				</RBS.Table>
			</div>
		)
	},
	
	componentDidMount: function() {
		var course = this.loadCookies();
		this.setState({
			course: course
		})
		this.keys=0;
	},
	
	loadCookies: function() {
		var course = cookieManager.getCookie('CourseInfo');
		if(course=='') {
			this.props.changePage(6);
		}
		else {
			course= JSON.parse(course);
			var self=this;
			setTimeout(function(){
				serverBridge.getSectionsFromCourse(course, function(data) {
					self.setState({
						sections: data
					});
				});
			}, 10);
		}
		return course;
	},
	
	courseCodeChange: function(value) {
		var course = React.addons.update(this.state.course, {});
		course.courseCode=value;
		var validation = React.addons.update(this.state.courseValidations, {});
		var help = React.addons.update(this.state.courseHelp, {});;
		validation.courseCodeValid=undefined;
		help.courseCodeHelp='';
		if(value.length!=8||value.charAt(4)!=' ') {
			validation.courseCodeValid='error';
			help.courseCodeHelp='Course number in wrong format';
		}
		this.setState({
			course: course,
			courseValidations: validation,
			courseHelp: help
		})
	},
	
	nameChange: function(value) {
		var course = React.addons.update(this.state.course, {});
		course.name=value;
		var validation = React.addons.update(this.state.courseValidations, {});
		var help = React.addons.update(this.state.courseHelp, {});;
		validation.nameValid=undefined;
		help.nameHelp='';
		if(value.length==0) {
			validation.nameValid='error';
		}
		this.setState({
			course: course,
			courseValidations: validation,
			courseHelp: help
		});
	},
	
	semesterChange: function(value) {
		var course = React.addons.update(this.state.course, {});
		course.semester=value;
		this.setState({
			course: course
		})
	},
	
	descriptionChange: function(value) {
		var course = React.addons.update(this.state.course, {});
		course.description=value;
		var validation = React.addons.update(this.state.courseValidations, {});
		var help = React.addons.update(this.state.courseHelp, {});;
		validation.descriptionValid=undefined;
		help.descriptionHelp='';
		if(value.length==0) {
			validation.descriptionValid='error';
		}
		this.setState({
			course: course,
			courseValidations: validation,
			courseHelp: help
		})
	},
	
	creditsChange: function(value) {
		var course = React.addons.update(this.state.course, {});
		course.credits=value;
		var validation = React.addons.update(this.state.courseValidations, {});
		var help = React.addons.update(this.state.courseHelp, {});
		validation.creditsValid=undefined;
		help.creditsHelp='';
		if(isNaN(value)) {
			validation.creditsValid='error';
			help.creditsHelp='Credits must be a number';
		}
		else if(Number(value)<1||Number(value)>5) {
			validation.creditsValid='error';
			help.creditsHelp='Credits must be between 1 and 5';
		}
		this.setState({
			course: course,
			courseValidations: validation,
			courseHelp: help
		})
	},
	
	saveCourseChange: function() {
		var validation = React.addons.update(this.state.courseValidations, {});
		var help = React.addons.update(this.state.courseHelp, {});
		if(this.state.course.name.length>0&&this.state.course.courseCode.length>0&&this.state.course.description.length>0&&this.state.course.credits.length>0&&this.state.courseValidations.courseCodeValid!='error'&&this.state.courseValidations.creditsValid!='error') {
			var self=this;
			serverBridge.addCourse(this.state.course, function(data) {
				if(data.success=='true') {
					cookieManager.addCookie('CourseInfo', JSON.stringify(self.state.course), 7)
					alert('Course saved successfully!');
				}
				else {
					validation.courseCodeValid='error';
					help.courseCodeHelp='A course with that course number already exists in that semester in the database';
					self.setState({
						courseValidations: validation,
						courseHelp: help
					});
				}
			});
		}
		if(this.state.course.name.length==0) {
			validation.nameValid = 'error';
			help.nameHelp= 'Name cannot be left blank';
			this.setState({
				courseValidations: validation,
				courseHelp: help
			})
		}
		if(this.state.course.courseCode.length==0) {
			validation.courseCodeValid = 'error';
			help.courseCodeHelp= 'Course Number cannot be left blank';
			this.setState({
				courseValidations: validation,
				courseHelp: help
			})
		}
		if(this.state.course.description.length==0) {
			validation.descriptionValid = 'error';
			help.descriptionHelp= 'Description cannot be left blank';
			this.setState({
				courseValidations: validation,
				courseHelp: help
			})
		}
		if(this.state.course.credits.length==0) {
			validation.creditsValid = 'error';
			help.creditsHelp= 'Credits cannot be left blank';
			this.setState({
				courseValidations: validation,
				courseHelp: help
			})
		}
	}
});

var AdminSection = React.createClass({
	render: function() {
		return (
			<tr><td>{this.props.section.section}</td>
			<td>{this.props.section.courseCode}</td>
			<td>{this.props.section.type}</td>
			<td>{this.props.section.day}</td>
			<td>{this.props.section.beginTime}</td>
			<td>{this.props.section.endTime}</td>
			<td>{this.props.section.classroom}</td>
			<td><img onClick={this.props.editCourse} src="Images/edit.png" title="Edit Section" style={{height: '15px', width: '15px'}}/>&nbsp;&nbsp;</td></tr>
		)
	}
});

var CourseInfo = React.createClass({
	render: function() {
		return(
			<div>
				<RBS.Table style={{width:'40%', marginLeft:'30%'}}>
						<tbody>
							<tr>
								<td style={{width: '30%'}}>Course Number</td>
								<td style={{width: '70%'}}><InputElement onChange={this.props.courseCodeChange} value={this.props.course.courseCode} bsStyle={this.props.validation.courseCodeValid} help={this.props.help.courseCodeHelp}/></td>
							</tr>
							<tr>
								<td>Course Name</td>
								<td><InputElement onChange={this.props.nameChange} value={this.props.course.name} bsStyle={this.props.validation.nameValid} help={this.props.help.nameHelp}/></td>
							</tr>
							<tr>
								<td>Semester</td>
								<td><SelectElement onChange={this.props.semesterChange} value={this.props.course.semester} data={['Fall', 'Winter', 'Summer', 'Fall/Summer']}/></td>
							</tr>
							<tr>
								<td>Description</td>
								<td><InputElement type="textarea" onChange={this.props.descriptionChange} value={this.props.course.description} bsStyle={this.props.validation.descriptionValid} help={this.props.help.descriptionHelp}/></td>
							</tr>
							<tr>
								<td>Credits</td>
								<td><InputElement onChange={this.props.creditsChange} value={this.props.course.credits} bsStyle={this.props.validation.creditsValid} help={this.props.help.creditsHelp}/></td>
							</tr>
						</tbody>
					</RBS.Table>
					<div style={{textAlign:'center'}}><RBS.Button bsStyle='primary' onClick={this.props.save}>Save Changes to Course Information</RBS.Button></div>
			</div>
		)
	}
});

/*var CoursesList = React.createClass({
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
						<Course key={this.keys++} name={course.name} number={course.number} remove={this.props.remove.bind(this.props.binder, course.number)} 
						editCourse={this.props.editCourse.bind(this.props.binder, course.number)}/>
					)
				}, this)}
			</tbody>
		)
	}
});*/