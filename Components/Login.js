var LoginPage = React.createClass({
	getInitialState: function() {
		return {
			username: '',
			password: '',
			registerDialogOpen: false
		}
	},
	
	render: function() {
		return (
			<div>
				{this.state.registerDialogOpen? <RegistrationDialog close={this.closeRegistrationDialog} register={this.register}/>: null}
				<Logo/>
				<br/>
				<RBS.Grid  fluid={true} style={{width:'30%'}}>
					<RBS.Row>
						<InputElement label='Username' onChange={this.onUsernameChange}/>
					</RBS.Row>
					<RBS.Row>
						<InputElement label='Password' type='password' onChange={this.onPasswordChange}/>
					</RBS.Row>
					<a onClick={this.openRegisterDialog}>Create Account</a>
					<span style={{float:'right'}}><RBS.Button bsStyle='primary' onClick={this.logIn}>Log In</RBS.Button></span>
				</RBS.Grid>
			</div>
		)
	},
	
	openRegisterDialog: function() {
		console.log('here');
		this.setState({
			registerDialogOpen: true
		})
	},
	
	closeRegistrationDialog: function() {
		this.setState({
			registerDialogOpen: false
		})
	},
	
	register: function(username, password, email) {
		console.log('registration code goes here');
		this.closeRegistrationDialog();
		this.props.changePage(1); //Log them in and redirect to preferences page
	},
	
	onUsernameChange: function(value) {
		this.setState({
			username: value
		})
	},
	
	onPasswordChange: function(value) {
		this.setState({
			password: value
		})
	},
	
	logIn: function() {
		console.log('log in code goes here');
		if(true) {
			this.props.changePage(1);
		}
		else {
			alert('Bad username and/or password');
		}
	}
});

var RegistrationDialog = React.createClass({
	render:function() {
		return (
			<RBS.Modal show={true} onHide={this.props.close}>
				<RBS.Modal.Header closeButton>
					<RBS.Modal.Title>Register</RBS.Modal.Title>
				</RBS.Modal.Header>
				<RBS.Modal.Body>
					<RBS.Grid fluid={true}>
						<RBS.Row>
							<InputElement label='Username' onChange={this.onUsernameChange}/>
						</RBS.Row>
						<RBS.Row>
							<InputElement label='Password' type='password' onChange={this.onPasswordChange}/>
						</RBS.Row>
					</RBS.Grid>
				</RBS.Modal.Body>
				<RBS.Modal.Footer>
					<RBS.Button onClick={this.props.register} bsStyle='primary'>Register</RBS.Button>
				</RBS.Modal.Footer>
			</RBS.Modal>
		)
	}
});

var Logo = React.createClass({
	//Change this to an actual logo later
	render: function() {
		return (
			<div>
				<h1>SOEN Schedule Builder</h1>
			</div>
		)
	}
});

