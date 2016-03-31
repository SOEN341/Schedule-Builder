var LoginPage = React.createClass({
	getInitialState: function() {
		this.checkLoggedIn();
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
	
	checkLoggedIn: function() {
		var username = cookieManager.getCookie('username');
		if(username!='') {
			this.props.changePage(1);
		}
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
				cookieManager.addCookie('username', this.state.rUsername, 7);
				cookieManager.addCookie('email', this.state.email, 7);
				this.props.changePage(1);
			}
			else {
				alert('Username already exists');
			}
		}
	},
	
	logIn: function() {
		var self = this;
		serverBridge.login(this.state.username, this.state.password, function(data) {
			console.log(data);
			if(data.success) {
				cookieManager.addCookie('username', self.state.username, 7);
				self.props.changePage(1);
			}
			else {
				console.log('Invalid username and/or password');
			}
		});
		
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



