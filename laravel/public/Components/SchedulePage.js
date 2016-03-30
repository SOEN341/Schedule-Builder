var SchedulePage = React.createClass({
	render: function(){
		return (
			<div>
				<ScheduleLogo />
				<Initialize />
			</div>
		)	
	},
})	
	
	
var ScheduleLogo = React.createClass({
	render: function() {
			return (
				<div>
					<h1>Weekly Schedule</h1>
				</div>
			)
	}
})

var Initialize = React.createClass({
	render: function() {
			return (
				scheduler.init('guide', new Date(2016, 8, 12), "week");
			)
	}
}

var ScheduleGrid = React.createClass({
	render: function() {
			return (
				<div id="guide" class="dhx_cal_container" style="width:100%; height:100%">
					<div class="dhx_cal_navline">
						<div class="dhx_cal_prev_button"></div>
						<div class="dhx_cal_next_button"></div>
						<div class="dhx_cal_date"></div>
						<div class="dhx_cal_tab" name="week_tab" style="right:140px;"></div>
					</div>
					<div class="dhx_cal_header"></div>
					<div class="dhx_cal_data"></div>
				</div>
			)
	}
})
	
