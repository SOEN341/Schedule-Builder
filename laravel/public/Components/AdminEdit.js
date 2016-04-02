var AdminPage = React.createClass({
	getInitialState: function() {
		return {
			courses: []
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
			<td><img src="Images/delete.png" title="Remove Course" style={{height: '15px', width: '15px'}}/></td></tr>
		)
	}
});