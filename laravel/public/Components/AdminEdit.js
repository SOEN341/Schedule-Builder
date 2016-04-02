var AdminPage = React.createClass({
	getInitialState: function() {
		return {
			courses: []
			this.getCookies().JSON.parse
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
					{this.state.courses.map(function(course) {
						return (
							<AdminCourse key={this.keys++} course={course}/>
						)
					}, this)}
				</tbody>
			</RBS.Table>
		)
	},
	
	componentDidMount: function() {
		this.keys=0;
		var self=this;
		serverBridge.getCourses(function(data) {
			self.setState({
				courses: data
			});
		});
	}
});

var AdminCourse = React.createClass({
	render: function() {
		return (
			<tr><td>{this.props.course.section}</td>
			<td>{this.props.course.courseCode}</td>
			<td>{this.props.course.type}</td>
			<td>{this.props.course.day}</td>
			<td>{this.props.course.beginTime}</td>
			<td>{this.props.course.endTime}</td>
			<td>{this.props.course.classroom}</td>
			<td><img onClick={this.props.editCourse} src="Images/edit.png" title="Edit Course" style={{height: '15px', width: '15px'}}/>&nbsp;&nbsp;</td></tr>
		)
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
						<Course key={this.keys++} name={course.name} number={course.number} remove={this.props.remove.bind(this.props.binder, course.number)} 
						editCourse={this.props.editCourse.bind(this.props.binder, course.number)}/>
					)
				}, this)}
			</tbody>
		)
	}
});