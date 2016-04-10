var SchedulePage = React.createClass({
	render: function(){
		return (
			<div>
				<Schedule changePage={this.props.changePage}/>
			</div>
		)
	},
	
	componentDidMount: function() {
		var username=cookieManager.getCookie('username');
		if(username=='') {
			this.props.changePage(0);
		}
	}
});
	
	
var ScheduleLogo = React.createClass({
	render: function() {
			return (
				<div>
					<h1>Weekly Schedule</h1>
				</div>
			)
	}
});

var Schedule = React.createClass({
	getInitialState: function() {
		return {
			currentDataSet: 0,
			max: 0,
			schedules: []
		}
	},
	
	render: function() {
		return (
			<div>
					{(this.state.schedules.length>0)? <div style={{textAlign: 'center'}}><img onClick={this.left} src="Images/left.png" title="Switch Schedules" style={{height: '30px', width: '30px'}}/>
					<RBS.Button bsStyle='primary' onClick={this.selectSchedule}>Select This Schedule</RBS.Button>
					<img onClick={this.right} src="Images/right.png" title="Switch Schedules" style={{height: '30px', width: '30px'}}/></div>: null}
					{(this.state.schedules.length==0)? <div><br/><br/><h3 style={{textAlign:'center'}}>Sorry, no schedules could be generated with the supplied information entered</h3>
					<div style={{textAlign:'center'}}>You may not have entered any courses you had the prerequisites for in your <a onClick={this.changeToPreferences}>needed courses list</a></div></div>: null}
				<div id='calendar' style={{width:'50%', marginLeft:'25%'}} onClick={this.onDataSetChange}></div>
			</div>
		)
	},
	
	componentDidMount: function() {
		var username=cookieManager.getCookie('username');
		var self = this;
		serverBridge.generateSchedule(username, function(data) {
			if(data.length>0) {
				var year = 2016;
				var month = 4;
				var day = 16;
				var events=[];
				var schedule=data[0].schedule;
				var eventDay;
				var beginTime;
				var endTime;
				var description;
				var id=0;
				var allSchedules = [];
				for(var k=0; k<data.length; k++) {
					schedule=data[k].schedule;
					events=[];
					for(var i=0; i<schedule.length; i++) {
						for(var j=0; j<schedule[i].day.length; j++) {
							//Handle the day
							if(schedule[i].day.charAt(j)=='1') {
								eventDay=day;
							}
							else if(schedule[i].day.charAt(j)=='2') {
								eventDay=day+1;
							}
							else if(schedule[i].day.charAt(j)=='3') {
								eventDay=day+2;
							}
							else if(schedule[i].day.charAt(j)=='4') {
								eventDay=day+3;
							}
							else if(schedule[i].day.charAt(j)=='5') {
								eventDay=day+4;
							}
							
							//Handle the time
							beginTime=schedule[i].beginTime.split(':');
							endTime=schedule[i].endTime.split(':');
							
							//Handle the description (course name, code, section, classroom, and type)
							description = ''+schedule[i].course+'<br/>'+schedule[i].type+' '+schedule[i].section+'<br/>'+schedule[i].classroom;
							
							events.push({'id':id++, 'start': new Date(year, month, eventDay, beginTime[0], beginTime[1]), 'end': new Date(year, month, eventDay, endTime[0], endTime[1]),'title':description, readOnly: true});
						}
					}
					allSchedules.push(events);
				}
				
				self.setState({
					max: allSchedules.length-1,
					schedules: allSchedules
				});
				var eventData = {events: allSchedules[1]};
				
				$('#calendar').weekCalendar({
					timeslotsPerHour: 2,
					timeslotHeight: 30,
					hourLine: true,
					data: function(start, end, callback) {
						var dataSource = self.state.currentDataSet;
						
						callback(allSchedules[dataSource]);
					  },
					firstDayOfWeek: 1,
					daysToShow: 5,
					height: function($calendar) {
						return $(window).height()*9/10;
					},
					eventRender : function(calEvent, $event) {
						if (calEvent.end.getTime() < new Date().getTime()) {
							$event.css('backgroundColor', '#aaa');
							$event.find('.time').css({'backgroundColor': '#999', 'border':'1px solid #888'});
						}
					}
				});
			}
			else {
				self.setState({
					max: -1,
					schedules: []
				});
			}
		});
	},
	
	selectSchedule: function() {
		cookieManager.addCookie('schedule', JSON.stringify(this.state.schedules[this.state.currentDataSet]), 7);
		this.props.changePage(4);
	},
	
	left: function() {
		var set = React.addons.update(this.state.currentDataSet, {});
		set--;
		if(set<0) {
			set=this.state.max;
		}
		this.setState({
			currentDataSet: set
		});
		this.onDataSetChange();
	},
	
	right: function() {
		var set = React.addons.update(this.state.currentDataSet, {});
		set++;
		if(set>this.state.max) {
			set=0;
		}
		this.setState({
			currentDataSet: set
		});
		this.onDataSetChange();
	},
	
	onDataSetChange: function() {
		setTimeout(function(){
			$('#calendar').weekCalendar('refresh');
		}, 10);
	},
	
	changeToPreferences: function() {
		this.props.changePage(1);
	}
});
