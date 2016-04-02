var SchedulePage = React.createClass({
	render: function(){
		return (
			<div>
				<Schedule/>
			</div>
		)	
	},
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
			max: 0
		}
	},
	
	render: function() {
		return (
			<div>
				<div style={{textAlign: 'center'}}><img onClick={this.left} src="Images/left.png" title="Switch Schedules" style={{height: '30px', width: '30px'}}/>
				<RBS.Button bsStyle='primary'>Select This Schedule</RBS.Button>
				<img onClick={this.right} src="Images/right.png" title="Switch Schedules" style={{height: '30px', width: '30px'}}/></div>
				<div id='calendar' onClick={this.onDataSetChange}></div>
			</div>
		)
	},
	
	componentDidMount: function() {
		var self = this;
		serverBridge.generateSchedule(function(data) {
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
						description = '<br/>'+schedule[i].course+'<br/>'+schedule[i].type+' '+schedule[i].section+'<br/>'+schedule[i].classroom;
						
						events.push({'id':id++, 'start': new Date(year, month, eventDay, beginTime[0], beginTime[1]), 'end': new Date(year, month, eventDay, endTime[0], endTime[1]),'title':description, readOnly: true});
					}
				}
				allSchedules.push(events);
			}
			
			self.setState({
				max: allSchedules.length-1
			});
			var eventData = {events: allSchedules[1]};
			
			$('#calendar').weekCalendar({
				timeslotsPerHour: 4,
				timeslotHeigh: 30,
				hourLine: true,
				data: function(start, end, callback) {
					var dataSource = self.state.currentDataSet;
					
					callback(allSchedules[dataSource]);
				  },
				firstDayOfWeek: 1,
				daysToShow: 5,
				height: function($calendar) {
					return $(window).height() - $('h1').outerHeight(true);
				},
				eventRender : function(calEvent, $event) {
					if (calEvent.end.getTime() < new Date().getTime()) {
						$event.css('backgroundColor', '#aaa');
						$event.find('.time').css({'backgroundColor': '#999', 'border':'1px solid #888'});
					}
				}
			});
			
			$('<div id="message" class="ui-corner-all"></div>').prependTo($('body'));
		});
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
	}
});
