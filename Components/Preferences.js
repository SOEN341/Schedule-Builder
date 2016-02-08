var PreferencesPage = React.createClass({
	render: function() {
		return (
			<div>
				<Preferences/>
				<Classes/>
				<br/>
				<div style={{textAlign:'center'}}><RBS.Button onClick={this.generateSchedule} bsStyle='primary'>Build Schedule</RBS.Button></div>
			</div>
		)
	},
	
	generateSchedule: function() {
		//Uncomment this when the schedule page actually exists
		//this.props.changePage(2);
	}
});

var Preferences = React.createClass({
	render: function() {
		return (
			<div>
				<h3>Preferences</h3>
				<RBS.Grid fluid={true} style={{width:'40%', backgroundColor:'#D0C5C5'}}>
					<RBS.Row>some preferences here</RBS.Row>
				</RBS.Grid>
			</div>
		)
	}
});

var Classes = React.createClass({
	render: function() {
		return (
			<div>
				<h3>Classes</h3>
				<RBS.Grid fluid={true} style={{width:'40%', backgroundColor:'#D0C5C5', paddingTop:'10px'}}>
					<RBS.Row>
						<RBS.Col md={2}/>
						<InputElement label='Semesters Taken' input_md={4}/>
						<RBS.Col md={2}><RBS.Button>Generate class list</RBS.Button></RBS.Col>
					</RBS.Row>
				</RBS.Grid>
				<TakenClasses/>
				<NeededClasses/>
			</div>
		)
	}
});

var TakenClasses = React.createClass({
	render: function() {
		return (
			<div style={{width:'40%', backgroundColor:'#D0C5C5', marginLeft:'30%'}}>
				<RBS.Table striped bordered condensed hover style={{backgroundColor:'white', width:'98%', marginLeft:'1%'}}>
					<thead>
						<tr>
							<th colSpan={3}>Classes Taken</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Class Name</td>
							<td>Course Number</td>
							<td>Buttons</td>
						</tr>
					</tbody>
				</RBS.Table>
				<div style={{textAlign:'center'}}><RBS.Button>Add Class</RBS.Button></div>
				<br/>
			</div>
		)
	}
});

var NeededClasses = React.createClass({
	render: function() {
		return (
			<div style={{width:'40%', backgroundColor:'#D0C5C5', marginLeft:'30%', paddingBottom:'10px'}}>
				<RBS.Table striped bordered condensed hover style={{backgroundColor:'white', width:'98%', marginLeft:'1%'}}>
					<thead>
						<tr>
							<th colSpan={3}>Classes Needed</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Class Name</td>
							<td>Course Number</td>
							<td>Buttons</td>
						</tr>
					</tbody>
				</RBS.Table>
				<div style={{textAlign:'center'}}><RBS.Button>Add Class</RBS.Button></div>
			</div>
		)
	}
});