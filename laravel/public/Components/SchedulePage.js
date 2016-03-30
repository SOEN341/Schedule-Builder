var SchedulePage = React.createClass({
	render: function(){
		return (
			<div>
				<ScheduleLogo />
				<ScheduleGrid />
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

var Initialize = React.createClass({
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
});
	
