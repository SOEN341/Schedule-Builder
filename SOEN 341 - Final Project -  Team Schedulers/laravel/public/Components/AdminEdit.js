var AdminEdit = React.createClass({
	getInitialState: function() {
		return {
			sections: [],
			course:{courseId:'', name:'', courseCode:'', semester:'Fall', description:'', credits:''},
			courseValidations:{},
			courseHelp:{nameHelp:'', courseCodeHelp:'', descriptionHelp:'', creditsHelp:''},
			sectionDialogOpen: false,
			editingDialogOpen: false
		}
	},
	
	render: function() {
		return(
			<div>
				{this.state.sectionDialogOpen? <SectionDialog close={this.closeSectionDialog} method={this.addSection} mode='Add'/>: null}
				{this.state.editingDialogOpen? <SectionDialog close={this.closeEditDialog} method={this.editSection} mode='Edit' section={this.state.sections[this.state.editingIndex]}/>: null}
				<CourseInfo course={this.state.course} validation={this.state.courseValidations} help={this.state.courseHelp} nameChange={this.nameChange} courseCodeChange={this.courseCodeChange} semesterChange={this.semesterChange} descriptionChange={this.descriptionChange} creditsChange={this.creditsChange} save={this.saveCourseChange}/>
				<br/>
				<div className="line"><hr class="style1"></hr></div>
				<SectionsList sections={this.state.sections} binder={this} removeSection={this.removeSection} openEditDialog={this.openEditDialog}/>			
				<div style={{textAlign:'center', marginTop:'20px'}}><RBS.Button bsStyle="brand" onClick={this.openSectionDialog}>Add Section</RBS.Button></div>
			</div>
		)
	},
	
	componentDidMount: function() {
		var course = this.loadCookies();
		this.setState({
			course: course
		})
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
			serverBridge.editCourse(this.state.course, function(data) {
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
	},
	
	removeSection: function(sectionId) {
		var sections = React.addons.update(this.state.sections, {});
		var index=-1;
		for(var i=0; i<sections.length; i++) {
			if(sections[i].sectionId==sectionId)
			{
				index=i;
				break;
			}
		}
		if(index!=-1) {
			serverBridge.removeSection(this.state.sections[index].courseId, this.state.sections[index].sectionId);
			sections.splice(i, 1);
			this.setState({
				sections: sections
			})
		}
	},
	
	openSectionDialog: function() {
		this.setState({
			sectionDialogOpen: true
		})
	},
	
	closeSectionDialog: function() {
		this.setState({
			sectionDialogOpen: false
		})
	},
	
	openEditDialog: function(sectionId) {
		var sections = React.addons.update(this.state.sections, {});
		var index=-1;
		for(var i=0; i<sections.length; i++) {
			if(sections[i].sectionId==sectionId)
			{
				index=i;
				break;
			}
		}
		if(index!=-1) {
			this.setState({
				editingDialogOpen: true,
				editingIndex: index
			})
		}
	},
	
	closeEditDialog: function() {
		this.setState({
			editingDialogOpen: false
		})
	},
	
	addSection: function(section, response) {
		var newSection = {
			section: section.section,
			classroom: section.classroom,
			semester: this.state.course.semester,
			type: section.type,
			dayOffered: section.day,
			beginTime: section.beginTime,
			endTime: section.endTime,
			courseCode: this.state.course.courseCode,
			courseId: this.state.course.courseId,
			sectionNum: '1'
		}
		var error=false;
		for(var i=0; i<this.state.sections.length; i++)
		{
			if(newSection.section==this.state.sections[i].section) {
				error=true;
				response(1);
				break;
			}
		}
		if(!error) {
			var self=this;
			serverBridge.addSection(newSection, function(data){
				if(data.success=='true') {
					newSection.sectionId=Number(data.SectionID);
					var sections = React.addons.update(self.state.sections, {});
					sections.push(newSection);
					self.setState({
						sections: sections
					});
					response(0);
				}
				else {
					response(2);
				}
			})
		}
	},
	
	editSection: function(section, response) {
		var newSection = {
			section: section.section,
			sectionId: this.state.sections[this.state.editingIndex].sectionId,
			classroom: section.classroom,
			semester: this.state.course.semester,
			type: section.type,
			dayOffered: section.day,
			beginTime: section.beginTime,
			endTime: section.endTime,
			courseCode: this.state.course.courseCode,
			courseId: this.state.course.courseId,
			sectionNum: '1'
		}
		var error=false;
		var old=this.state.sections[this.state.editingIndex];
		if(newSection.section==old.section&&newSection.classroom==old.classroom&&newSection.semester==old.semester&&newSection.type==old.type&&newSection.dayOffered==old.dayOffered&&newSection.beginTime==old.beginTime&&newSection.endTime==old.endTime) {
			error=true;
			response(3);
		}
		else {
			for(var i=0; i<this.state.sections.length; i++)
			{
				if(newSection.section==this.state.sections[i].section&&i!=this.state.editingIndex) {
					error=true;
					response(1);
					break;
				}
			}
		}
		if(!error) {
			var self=this;
			serverBridge.editSection(newSection, function(data){
				if(data.success=='true') {
					var sections = React.addons.update(self.state.sections, {});
					sections[self.state.editingIndex]=newSection;
					self.setState({
						sections: sections
					});
					response(0);
				}
				else {
					response(2);
				}
			})
		}
	}
});

var SectionsList = React.createClass({
	render: function() {
		return (
			<div>
				{(this.props.sections.length>0)? 
				<RBS.Table striped bordered hover style={{backgroundColor:'white', width:'98%', marginLeft:'1%'}}>
					<tbody>
						<tr>
							<td style={{width: '12%'}}>Section</td>
							<td style={{width: '12%'}}>Course Number</td>
							<td style={{width: '12%'}}>Type</td>
							<td style={{width: '12%'}}>Day</td>
							<td style={{width: '12%'}}>Begin Time</td>
							<td style={{width: '12%'}}>End Time</td>
							<td style={{width: '12%'}}>Classroom</td>
							<td style={{width: '10%'}}></td>
						</tr>
						{this.props.sections.map(function(section) {
							return (
								<AdminSection key={section.sectionId} section={section} remove={this.props.removeSection.bind(this.props.binder, section.sectionId)} edit={this.props.openEditDialog.bind(this.props.binder, section.sectionId)}/>
							)
						}, this)}
					</tbody>
				</RBS.Table>: null}
				{(this.props.sections.length==0)? <h3 style={{textAlign: 'center'}}>No sections for this course exist in the database</h3>: null}
			</div>
		)
	}
})

var AdminSection = React.createClass({
	render: function() {
		return (
			<tr>
				<td>{this.props.section.section}</td>
				<td>{this.props.section.courseCode}</td>
				<td>{this.props.section.type}</td>
				<td>{this.props.section.dayOffered}</td>
				<td>{this.props.section.beginTime}</td>
				<td>{this.props.section.endTime}</td>
				<td>{this.props.section.classroom}</td>
				<td><img onClick={this.props.edit} src="Images/edit.png" title="Edit Section" style={{height: '15px', width: '15px'}}/>&nbsp;&nbsp;
				<img onClick={this.props.remove} src="Images/delete.png" title="Remove Section" style={{height: '15px', width: '15px'}}/></td>
			</tr>
		)
	}
});

var CourseInfo = React.createClass({
	render: function() {
		return(
			<div>
				<RBS.Table style={{width:'40%', marginLeft:'30%', marginTop:'25px'}}>
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
					<div style={{textAlign:'center'}}><RBS.Button bsStyle='brand' onClick={this.props.save}>Save Changes to Course Information</RBS.Button></div>
			</div>
		)
	}
});

var SectionDialog = React.createClass({
	getDefaultProps: function() {
		return {
			section: {
				section:'',
				classroom: '',
				type: 'Lecture',
				dayOffered: '',
				beginTime: '',
				endTime: ''
			}
		}
	},
	
	getInitialState: function() {
		return {
			section: this.props.section.section,
			classroom: this.props.section.classroom,
			type: this.props.section.type,
			day: this.props.section.dayOffered,
			beginTime: this.props.section.beginTime,
			endTime: this.props.section.endTime
		}
	},
	
	render:function() {
		return (
			<RBS.Modal show={true} onHide={this.props.close}>
				<RBS.Modal.Header closeButton>
					<RBS.Modal.Title>{this.props.mode} Section</RBS.Modal.Title>
				</RBS.Modal.Header>
				<RBS.Modal.Body>
					<RBS.Table>
						<tbody>
							<tr>
								<td style={{width: '30%'}}>Section Name</td>
								<td style={{width: '70%'}}><InputElement onChange={this.sectionChange} value={this.state.section} bsStyle={this.state.sectionValid} help={this.state.sectionHelp}/></td>
							</tr>
							<tr>
								<td>Type</td>
								<td><SelectElement onChange={this.typeChange} value={this.state.type} data={['Lecture', 'Tutorial', 'Lab']}/></td>
							</tr>
							<tr>
								<td>Classroom</td>
								<td><InputElement onChange={this.classroomChange} value={this.state.classroom} bsStyle={this.state.classroomValid} help={this.state.classroomHelp}/></td>
							</tr>
							<tr>
								<td>Day(s)</td>
								<td><InputElement onChange={this.dayChange} value={this.state.day} bsStyle={this.state.dayValid} help={this.state.dayHelp}/></td>
							</tr>
							<tr>
								<td>Begin Time</td>
								<td><InputElement onChange={this.beginChange} value={this.state.beginTime} bsStyle={this.state.beginValid} help={this.state.beginHelp}/></td>
							</tr>
							<tr>
								<td>End Time</td>
								<td><InputElement onChange={this.endChange} value={this.state.endTime} bsStyle={this.state.endValid} help={this.state.endHelp}/></td>
							</tr>
						</tbody>
					</RBS.Table>
				</RBS.Modal.Body>
				<RBS.Modal.Footer>
					<RBS.Button onClick={this.doMethod} bsStyle='primary'>{this.props.mode} Section</RBS.Button>
				</RBS.Modal.Footer>
			</RBS.Modal>
		)
	},
	
	sectionChange: function(value) {
		var validation=undefined;
		if(value.length==0) {
			validation='error';
		}
		this.setState({
			section: value,
			sectionValid: validation,
			sectionHelp: ''
		})
	},
	
	typeChange: function(value) {
		this.setState({
			type: value
		})
	},
	
	classroomChange: function(value) {
		var validation=undefined;
		if(value.length==0) {
			validation='error';
		}
		this.setState({
			classroom: value,
			classroomValid: validation,
			classroomHelp: ''
		});
	},
	
	dayChange: function(value) {
		var validation=undefined;
		var help='';
		if(isNaN(value)) {
			validation='error';
			help='Day must be a number from 1 to 5 to represent Monday to Friday';
		}
		else if(value.length<1||value.length>5) {
			validation='error';
			help='Length must be between 1 and 5';
		}
		this.setState({
			day: value,
			dayValid: validation,
			dayHelp: help
		})
	},
	
	beginChange: function(value) {
		var validation=undefined;
		if(value.length==0) {
			validation='error';
		}
		this.setState({
			beginTime: value,
			beginValid: validation,
			beginHelp: '',
			endValid: undefined,
			endHelp: ''
		});
	},
	
	endChange: function(value) {
		var validation=undefined;
		if(value.length==0) {
			validation='error';
		}
		this.setState({
			endTime: value,
			endValid: validation,
			endHelp: '',
			beginValid: undefined,
			beginHelp: ''
		});
	},
	
	doMethod: function() {
		var error=false;
		if(this.state.section.length==0) {
			error=true;
			this.setState({
				sectionValid: 'error',
				sectionHelp: 'Section cannot be left blank'
			})
		}
		if(this.state.classroom.length==0) {
			error=true;
			this.setState({
				classroomValid: 'error',
				classroomHelp: 'Classroom cannot be left blank'
			})
		}
		if(this.state.day.length==0) {
			error=true;
			this.setState({
				dayValid: 'error',
				dayHelp: 'Day cannot be left blank'
			})
		}
		if(this.state.beginTime.length==0) {
			error=true;
			this.setState({
				beginValid: 'error',
				beginHelp: 'Begin Time cannot be left blank'
			})
		}
		else if(this.state.beginTime.search(/\d{1,2}:\d{1,2}/)!=0) {
			error=true;
			this.setState({
				beginValid: 'error',
				beginHelp: 'Begin Time in the wrong format'
			})
		}
		if(this.state.endTime.length==0) {
			error=true;
			this.setState({
				endValid: 'error',
				endHelp: 'End Time cannot be left blank'
			})
		}
		else if(this.state.endTime.search(/\d{1,2}:\d{1,2}/)!=0) {
			error=true;
			this.setState({
				endValid: 'error',
				endHelp: 'End Time in the wrong format'
			})
		}
		
		if(this.state.beginTime.search(/\d{1,2}:\d{1,2}/)==0&&this.state.endTime.search(/\d{1,2}:\d{1,2}/)==0) {
			var begin=this.state.beginTime.split(':');
			var end=this.state.endTime.split(':');
			if(Number(begin[0])>24||Number(begin[1])>59) {
				error=true;
				this.setState({
					beginValid: 'error',
					beginHelp: 'Begin time not in 24 hour clock format'
				})
			}
			else if(Number(end[0])>24||Number(end[1])>59) {
				error=true;
				this.setState({
					endValid: 'error',
					endHelp: 'End time not in 24 hour clock format'
				})
			}
			else if(Number(begin[0])==Number(end[0])&&Number(begin[1])>=Number(end[1])) {
				error=true;
				this.setState({
					beginValid: 'error',
					beginHelp: 'Begin time cannot be later than or the same as end time',
					endValid: 'error'
				})
			}
			else if(Number(begin[0])>Number(end[0])) {
				error=true;
				this.setState({
					beginValid: 'error',
					beginHelp: 'Begin time cannot be later than end time',
					endValid: 'error'
				})
			}
		}
		
		if(!error&&this.state.dayValid!='error'&&this.state.beginValid!='error'&&this.state.endValid!='error') {
			var self=this;
			this.props.method(this.state, function(validation) {
				if(validation==0) {
					self.props.close();
				}
				else if(validation==1){
					self.setState({
						sectionValid: 'error',
						sectionHelp: 'Another section for this course exists with the same name'
					});
				}
				else if(validation==3) {
					self.setState({
						sectionValid: 'error',
						sectionHelp: 'Section could not be edited. Nothing was changed'
					});
				}
				else {
					self.setState({
						sectionValid: 'error',
						sectionHelp: 'Database could not be updated'
					});
				}
			});
		}
	}
});