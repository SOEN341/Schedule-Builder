var AdminEdit = React.createClass({
	getInitialState: function() {
		return {
			sections: []
		}
	},
	
	render: function() {
		return(
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
		)
	},
	
	componentDidMount: function() {
		var course = this.loadCookies();
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

var CoursesList = React.createClass({
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
});