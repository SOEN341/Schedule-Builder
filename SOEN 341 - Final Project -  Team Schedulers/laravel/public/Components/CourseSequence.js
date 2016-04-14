var CourseSequencePage = React.createClass({
	getInitialState: function() {
		return {
			schedule: [],
			courseSequence: []
		}
	},
	
	componentWillMount: function() {
		this.keys=0;
	},
	
	render: function() {
		return (
			<div style={{marginBottom:'150px'}}>
				<SelectedSchedule changePage={this.props.changePage}/><br/>
				{this.state.courseSequence.map(function(year) {
					return (
						<Year key={this.keys++} fall={year.fall} winter={year.winter}/>
					)
				}, this)}
			</div>
		)
	},
	
	componentDidMount: function() {
		var cookies = this.loadCookies();
		this.setState({
			schedule: cookies.schedule
		})
	},
	
	loadCookies: function() {
		var username=cookieManager.getCookie('username');
		if(username=='') {
			this.props.changePage(0);
		}
		var schedule=cookieManager.getCookie('schedule');
		if(schedule=='') {
			this.props.changePage(3);
		}
		else {
			var username=cookieManager.getCookie('username');
			var self=this;
			setTimeout(function() {
				serverBridge.generateCourseSequence(username, schedule, function(data) {
					var max=1;
					for(var i=0; i<data.length; i++) {
						if(Number(data[i].year)>max)
							max = Number(data[i].year);
					}
					var sequence=[];
					var fall=[];
					var winter=[];
					for(i=1; i<=max; i++) {
						fall=[];
						winter=[];
						for(var j=0; j<data.length; j++) {
							if(Number(data[j].year)==i&&data[j].semester=='Fall') {
								fall.push(data[j]);
							}
							else if(Number(data[j].year)==i&&data[j].semester=='Winter') {
								winter.push(data[j]);
							}
						}
						sequence.push({fall:fall, winter:winter});
					}
					self.setState({
						courseSequence: sequence
					})
				});
			}, 10);
			return {schedule:JSON.parse(schedule)};
		}
	}
});

var SelectedSchedule = React.createClass({
	getInitialState: function() {
		return {
			schedule: []
		}
	},
	
	render: function() {
		return (
			<div id='calendar'  style={{width:'50%', marginLeft:'25%'}}></div>
		)
	},
	
	componentDidMount: function() {
		var cookies = this.loadCookies();
		this.setState({
			schedule: cookies.schedule
		})
	},
	
	loadCookies: function() {
		var schedule=cookieManager.getCookie('schedule');
		if(schedule=='') {
			this.props.changePage(3);
		}
		else {
			schedule = JSON.parse(schedule);
			$('#calendar').weekCalendar({
				timeslotsPerHour: 2,
				timeslotHeight: 30,
				hourLine: true,
				data: schedule,
				firstDayOfWeek: 1,
				daysToShow: 5,
				height: function($calendar) {
					return $(window).height()*2/3;
				},
				eventRender : function(calEvent, $event) {
					if (calEvent.end.getTime() < new Date().getTime()) {
						$event.css('backgroundColor', '#aaa');
						$event.find('.time').css({'backgroundColor': '#999', 'border':'1px solid #888'});
					}
				}
			});
		}
		return {schedule:schedule};
	}
});

var Year = React.createClass({
	render: function() {
		return (
			<div>
				<Semester data={this.props.fall} type='Fall'/>
				<Semester data={this.props.winter} type='Winter'/>
			</div>
		)
	}
});

var Semester = React.createClass({
	render: function() {
		if(this.props.data.length>0)
		{
		return (
			<RBS.Table bordered style={{backgroundColor:'white', width:'40%', marginLeft:'30%'}}>
				<thead>
					<tr>
						<th colSpan={2} style={{textAlign:'center'}}>Year {this.props.data[0].year} {this.props.type}</th>
					</tr>
				</thead>
				<SemesterList courses={this.props.data}/>
			</RBS.Table>
		)
		}
		else {
			return <div></div>
		}
	}
});

var SemesterList = React.createClass({
	componentWillMount: function() {
		this.keys=0;
	},
	
	render: function() {
		return (
			<tbody>
				<tr>
					<td style={{width: '30%'}}>Class Number</td>
					<td style={{width: '70%'}}>Course Name</td>
				</tr>
				{this.props.courses.map(function(course) {
					return (
						<SequencedCourse key={this.keys++} course={course}/>
					)
				}, this)}
			</tbody>
		)
	}
});

var SequencedCourse = React.createClass({
	render: function() {
		return (
			<tr>
				<td>{this.props.course.courseCode}</td>
				<td>{this.props.course.name}</td>
			</tr>
		)
	}
});