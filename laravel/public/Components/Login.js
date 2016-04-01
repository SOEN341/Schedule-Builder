var LoginPage = React.createClass({
	getInitialState: function() {
		this.checkLoggedIn();
		return {
			username: '',
			password: '',
			registerDialogOpen: false,
			forgotDialogOpen: false,
			forgotDialogMode: 1,
			rUsername: '',
			rPassword: '',
			email: '',
			code: ''
		}
	},
	
	render: function() {
		return (
			<div>
				{this.state.registerDialogOpen? <RegistrationDialog close={this.closeRegistrationDialog} register={this.register} username={this.state.rUsername} password={this.state.rPassword} email={this.state.email} passwordChange={this.onRegPasswordChange} usernameChange={this.onRegUsernameChange} emailChange={this.onEmailChange}/>: null}
				{this.state.forgotDialogOpen? <ForgotDialog username={this.state.username} usernameChange={this.onUsernameChange} close={this.closeForgotDialog} password={this.state.rPassword} passwordChange={this.onRegPasswordChange} code={this.state.code} codeChange={this.onCodeChange} forgot={this.sendEmail} mode={this.state.forgotDialogMode} resetPassword={this.resetPassword}/>: null}
				<Logo/>
				<br/>
				<RBS.Grid  fluid={true} style={{width:'30%'}}>
					<RBS.Row>
						<InputElement label='Username' onChange={this.onUsernameChange}/>
					</RBS.Row>
					<RBS.Row>
						<InputElement label='Password' type='password' onChange={this.onPasswordChange}/>
					</RBS.Row>
					<a onClick={this.openForgotDialog}>Forgot Password?</a>
					<span style={{float:'right'}}><RBS.Button bsStyle='primary' onClick={this.logIn}>Log In</RBS.Button></span><br/>
					<a onClick={this.openRegisterDialog}>Create Account</a>
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
	
	openForgotDialog: function() {
		this.setState({
			forgotDialogOpen: true,
			forgotDialogMode: 1
		})
	},

	closeForgotDialog: function() {
		this.setState({
			forgotDialogOpen: false
		})
	},
	
	register: function() {
		if(this.state.rUsername==''||this.state.email==''||this.state.rPassword=='') {
			alert('All inputs are mandatory');
		}
		else {
			var self = this;
			serverBridge.register(this.state.rUsername, this.state.email, this.state.rPassword, function(data) {
				if(data.success=='true') {
					cookieManager.addCookie('username', self.state.rUsername, 7);
					cookieManager.addCookie('email', self.state.email, 7);
					self.props.changePage(1);
				}
				else {
					alert('Username already exists');
				}
			});
		}
	},
	
	logIn: function() {
		var self = this;
		serverBridge.login(this.state.username, this.state.password, function(data) {
			console.log(data);
			if(data.success=='true') {
				cookieManager.addCookie('username', self.state.username, 7);
				if(data.isAdmin=='true')
				{
					self.props.changePage(6);
				}
				else
				{
					self.props.changePage(1);
				}
				
			}
			else {
				alert('Invalid username and/or password');
			}
		});
		
	},
	
	sendEmail: function() {
		var self=this;
		serverBridge.sendPasswordEmail(this.state.username, function(data) {
			if(data.success=='true') {
				setTimeout(function() {
					self.setState({
						forgotDialogMode: 2
					});
				}, 10);
			}
			else {
				alert('There is no user in the database with that username');
			}
		});
	},
	
	resetPassword: function() {
		var self=this;
		serverBridge.resetPasswordFromEmail(this.state.username, this.state.code, this.state.rPassword, function(data) {
			if(data.success=='true') {
				cookieManager.addCookie('username', self.state.username, 7);
				self.props.changePage(1);
			}
			else {
				alert('The code entered is invalid');
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
	},
	
	onCodeChange: function(value) {
		this.setState({
			code: value
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



