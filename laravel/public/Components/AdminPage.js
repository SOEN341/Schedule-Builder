var AdminPage = React.createClass({
	getInitialState: function() {
		return {
			courses: []
		}
	},
	
	render: function() {
		return(
		 <div>
				{this.state.courses.map(function(course) {
					return (
						<AdminCourse key={this.keys++} course={course}/>
					)
				}, this)}
		 </div>
		)
	},
	
	componentDidMount: function() {
		var self=this;
		serverBridge.getCourses(function(data) {
			self.setState({
				courses: data
			});
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

var AdminCourse = React.createClass({
	render: function() {
		return (
			<tr><td>{this.props.name}</td>
			<td>{this.props.number}</td>
			<td><img onClick={this.props.edit} src="Images/edit.png" title="Edit Course" style={{height: '15px', width: '15px'}}/>&nbsp;&nbsp;
			<img onClick={this.props.remove} src="Images/delete.png" title="Remove Course" style={{height: '15px', width: '15px'}}/></td></tr>
		)
	}
});