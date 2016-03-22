var PreferencesPage = React.createClass({
	getInitialState: function() {
		return {
			classDialogOpen: false
		}
	},

	render: function() {
		return (
			<div>
				{this.state.classDialogOpen? <ClassDialog close={this.closeClassDialog}/>: null}
				<Preferences/>
				<Classes openDialog={this.openClassDialog}/>
				<br/>
				<div style={{textAlign:'center'}}><RBS.Button onClick={this.generateSchedule} bsStyle='primary'>Build Schedule</RBS.Button></div>
			</div>
		)
	},
	
	generateSchedule: function() {
		//Uncomment this when the schedule page actually exists
		//this.props.changePage(3);
		console.log('schedule');
		alert('dasfds');
	},

	openClassDialog: function() {
		console.log('here');
		this.setState({
			classDialogOpen: true
		})
	},

	closeClassDialog: function() {
		this.setState({
			classDialogOpen: false
		})
	},
});

var ClassDialog = React.createClass({
	render:function() {
		return (
			<RBS.Modal show={true} onHide={this.props.close}>
				<RBS.Modal.Header closeButton>
					<RBS.Modal.Title>Add Class</RBS.Modal.Title>
				</RBS.Modal.Header>
				<RBS.Modal.Body>
					<RBS.Grid fluid={true}>
						<RBS.Row>
							<TypeaheadInput label='Course Number' onChange={this.props.usernameChange} data={["COMP 248", "COMP 249", "COMP 352"]}/>
						</RBS.Row>
						<RBS.Row>
						</RBS.Row>
					</RBS.Grid>
				</RBS.Modal.Body>
				<RBS.Modal.Footer>
					<RBS.Button onClick={this.props.close} bsStyle='primary'>Add Class</RBS.Button>
				</RBS.Modal.Footer>
			</RBS.Modal>
		)
	}
});

var Preferences = React.createClass({
	getInitialState: function() {
		return {
			classes: 5,
			day: 'None',
			time: 'Any'
		}
	},
	
	render: function() {
		return (
			<div>
				<h3>Preferences</h3>
				<RBS.Grid fluid={true} style={{width:'40%', backgroundColor:'#D0C5C5'}}>
					<RBS.Row>
						<InputElement label='Classes per semester' value={this.state.classes} onChange={this.onClassesChange}/>
					</RBS.Row>
					<RBS.Row>
						<SelectElement label='Desired day off' value={this.state.day} placeholder='None' data={['None','Monday','Tuesday','Wednesday', 'Thursday', 'Friday']} onChange={this.onDayChange}/>
					</RBS.Row>
					<RBS.Row>
						<SelectElement label='Preferred time of day' value={this.state.time} placeholder='Any' data={['Any', 'Mornings', 'Afternoons', 'Evenings']} onChange={this.onTimeChange}/>
					</RBS.Row>
				</RBS.Grid>
			</div>
		)
	},
	
	onClassesChange: function(value) {
		this.setState({
			classes: value
		})
	},
	
	onTimeChange: function(value) {
		this.setState({
			time: value
		})
	},
	
	onDayChange: function(value) {
		this.setState({
			day: value
		})
	}
});

var Classes = React.createClass({
	getInitialState: function() {
		return {
			semesters: ''
		}
	},
	
	render: function() {
		return (
			<div>
				<h3>Classes</h3>
				<RBS.Grid fluid={true} style={{width:'40%', backgroundColor:'#D0C5C5', paddingTop:'10px'}}>
					<RBS.Row>
						<RBS.Col md={2}/>
						<InputElement label='Semesters Taken' value={this.state.semesters} onChange={this.onSemestersChange} label_md={2} input_md={4}/>
						<RBS.Col md={2}><RBS.Button>Generate class list</RBS.Button></RBS.Col>
					</RBS.Row>
				</RBS.Grid>
				<TakenClasses openDialog={this.props.openDialog}/>
				<NeededClasses openDialog={this.props.openDialog}/>
			</div>
		)
	},
	
	onSemestersChange: function(value) {
		this.setState({
			semesters: value
		})
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
				<div style={{textAlign:'center'}}><RBS.Button onClick={this.props.openDialog}>Add Class</RBS.Button></div>
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
				<div style={{textAlign:'center'}}><RBS.Button onClick={this.props.openDialog}>Add Class</RBS.Button></div>
			</div>
		)
	}
});