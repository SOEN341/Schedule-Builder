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