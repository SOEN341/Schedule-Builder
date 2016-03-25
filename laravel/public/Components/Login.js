var LoginPage = React.createClass({
	getInitialState: function() {
		return {
			username: '',
			password: '',
			registerDialogOpen: false,
			rUsername: '',
			rPassword: '',
			email: ''
		}
	},
	
	render: function() {
		return (
			<div>
				{this.state.registerDialogOpen? <RegistrationDialog close={this.closeRegistrationDialog} register={this.register} username={this.state.rUsername} password={this.state.rPassword} email={this.state.email} passwordChange={this.onRegPasswordChange} usernameChange={this.onRegUsernameChange} emailChange={this.onEmailChange}/>: null}
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
		this.setState({
			registerDialogOpen: true
		})
	},


	closeRegistrationDialog: function() {
		this.setState({
			registerDialogOpen: false
		})
	},
	
	register: function() {
		if(this.state.rUsername==''||this.state.email==''||this.state.rPassword=='') {
			alert('All inputs are mandatory');
		}
		else {
			var success = serverBridge.register(this.state.rUsername, this.state.email, this.state.rPassword);
			if(success) {
				this.props.changePage(1);
			}
			else {
				alert('Username already exists');
			}
		}
	},
	
	logIn: function() {	
		var success = serverBridge.login(this.state.username, this.state.password);
		if(success) {
			this.props.changePage(1);
		}
		else {
			alert('Invalid username and/or password');
		}
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

	onRegUsernameChange: function(value) {
		this.setState({
			rUsername: value
		})
	},
	
	onRegPasswordChange: function(value) {
		this.setState({
			rPassword: value
		})
	},
	
	onEmailChange: function(value) {
		this.setState({
			email: value
		})
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
							<InputElement label='Username' onChange={this.props.usernameChange} value={this.props.username}/>
						</RBS.Row>
						<RBS.Row>
							<InputElement label='E-mail' onChange={this.props.emailChange} value={this.props.email}/>
						</RBS.Row>
						<RBS.Row>
							<InputElement label='Password' type='password' onChange={this.props.passwordChange} value={this.props.password}/>
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



