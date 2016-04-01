var SchedulePage = React.createClass({
	render: function(){
		return (
			<div>
				<ScheduleLogo />
				<Schedule />
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

/*var Initialize = React.createClass({
	render: function() {
			return (
				<div></div>
			)
	}
});

var ScheduleGrid = React.createClass({
	render: function() {
			return (
				<div id="guide" className="dhx_cal_container" style={{width:'100%', height:'100%'}}>
					<div className="dhx_cal_navline">
						<div className="dhx_cal_prev_button"></div>
						<div className="dhx_cal_next_button"></div>
						<div className="dhx_cal_date"></div>
						<div className="dhx_cal_tab" name="week_tab" style={{right:'140px'}}></div>
					</div>
					<div className="dhx_cal_header"></div>
					<div className="dhx_cal_data"></div>
				</div>
			)
	},
	
	componentDidMount: function() {
		scheduler.init('guide', new Date(2016, 8, 12), "week");
	}
});*/

var Schedule = React.createClass({
	render: function() {
		return (
			<div id='calendar'></div>
		)
	},
	
	componentDidMount: function() {
		var self = this;
		//serverBridge.generateSchedule(function(data) {
			//here, data is the json object with all the schedules
			//You also need to use self instead of this from inside this method (ex: this.setState you would have to do as self.setState)
			
			var year = new Date().getFullYear();
			var month = new Date().getMonth();
			var day = new Date().getDate();

			var eventData = {
				events : [
					{'id':1, 'start': new Date(year, month, day, 12), 'end': new Date(year, month, day, 13, 35),'title':'Lunch with Mike', readOnly: true},
					{'id':2, 'start': new Date(year, month, day, 14), 'end': new Date(year, month, day, 14, 45),'title':'Dev Meeting', readOnly: true},
					{'id':3, 'start': new Date(year, month, day + 1, 18), 'end': new Date(year, month, day + 1, 18, 45),'title':'Hair cut', readOnly: true},
					{'id':4, 'start': new Date(year, month, day - 1, 8), 'end': new Date(year, month, day - 1, 9, 30),'title':'Team breakfast', readOnly: true},
					{'id':5, 'start': new Date(year, month, day + 1, 14), 'end': new Date(year, month, day + 1, 15),'title':'Product showcase', readOnly: true}
				]
			};
			$('#calendar').weekCalendar({
				timeslotsPerHour: 4,
				timeslotHeigh: 30,
				hourLine: true,
				data: eventData,
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
				},
				  /*
				  eventNew: function(calEvent, $event) {
					this.displayMessage('<strong>Added event</strong><br/>Start: ' + calEvent.start + '<br/>End: ' + calEvent.end);
					alert('You\'ve added a new event. You would capture this event, add the logic for creating a new event with your own fields, data and whatever backend persistence you require.');
				  },
				  eventDrop: function(calEvent, $event) {
					this.displayMessage('<strong>Moved Event</strong><br/>Start: ' + calEvent.start + '<br/>End: ' + calEvent.end);
				  },
				  eventResize: function(calEvent, $event) {
					  
				  eventClick: function(calEvent, $event) {
					  
				  },
				  eventMouseover: function(calEvent, $event) {
					this.displayMessage('<strong>Mouseover Event</strong><br/>Start: ' + calEvent.start + '<br/>End: ' + calEvent.end);
				  },
				  eventMouseout: function(calEvent, $event) {
					this.displayMessage('<strong>Mouseout Event</strong><br/>Start: ' + calEvent.start + '<br/>End: ' + calEvent.end);
				  },
				  noEvents: function() {
					  console.log('no events');
					this.displayMessage('There are no events for this week');
				  }*/
			});
			
			$('<div id="message" class="ui-corner-all"></div>').prependTo($('body'));
		//});
	},
	
	displayMessage: function(message) {
		console.log('here');
	  $('#message').html(message).fadeIn();
	}
});
