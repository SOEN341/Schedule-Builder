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
			code: '',
			fPassword: '',
			usernameHelp:'',
			fUsernameHelp: '',
			codeHelp: '',
			fPasswordHelp: ''
		}
	},
	
	render: function() {
		return (
			<div>
				{this.state.registerDialogOpen? <RegistrationDialog close={this.closeRegistrationDialog} register={this.register} username={this.state.rUsername} password={this.state.rPassword} email={this.state.email} passwordChange={this.onRegPasswordChange} usernameChange={this.onRegUsernameChange} emailChange={this.onEmailChange} usernameValid={this.state.rUsernameValid} usernameHelp={this.state.rUsernameHelp} passwordValid={this.state.rPasswordValid} emailValid={this.state.emailValid} emailHelp={this.state.emailHelp} passwordHelp={this.state.rPasswordHelp}/>: null}
				{this.state.forgotDialogOpen? <ForgotDialog username={this.state.username} usernameChange={this.onFUsernameChange} usernameHelp={this.state.fUsernameHelp} usernameValid={this.state.fUsernameValid} close={this.closeForgotDialog} password={this.state.fPassword} passwordChange={this.onFPasswordChange} passwordValid={this.state.fPasswordValid} passwordHelp={this.state.fPasswordHelp} code={this.state.code} codeChange={this.onCodeChange} codeValid={this.state.codeValid} codeHelp={this.state.codeHelp} forgot={this.sendEmail} mode={this.state.forgotDialogMode} resetPassword={this.resetPassword}/>: null}
				<Logo/>
				<br/>
				<RBS.Grid  fluid={true} style={{width:'30%'}}>
					<RBS.Row>
						<InputElement label='Username' onChange={this.onUsernameChange} bsStyle={this.state.usernameValid} help={this.state.usernameHelp}/>
					</RBS.Row>
					<RBS.Row>
						<InputElement label='Password' type='password' onChange={this.onPasswordChange} bsStyle={this.state.passwordValid} bsStyle={this.state.passwordValid}/>
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
			this.setState({
				rUsernameHelp: 'Username cannot be left blank',
				rUsernameValid: 'error'
			})
		}
		if(this.state.email=='') {
			this.setState({
				emailHelp: 'E-mail cannot be left blank',
				emailValid: 'error'
			})
		}
		if(this.state.rPassword=='') {
			this.setState({
				rPasswordHelp: 'Password cannot be left blank',
				rPasswordValid: 'error'
			})
		}
		if(this.state.rUsernameValid!='error'&&this.state.rPasswordValid!='error'&&this.state.rUsername!=''&&this.state.email!=''&&this.state.rPassword!=''){
			var self = this;
			serverBridge.register(this.state.rUsername, this.state.email, this.state.rPassword, function(data) {
				if(data.success=='true') {
					cookieManager.addCookie('username', self.state.rUsername, 7);
					cookieManager.addCookie('email', self.state.email, 7);
					self.props.changePage(1);
				}
				else {
					self.setState({
						rUsernameHelp: 'Username already taken',
						rUsernameValid: 'error'
					});
				}
			});
		}
	},
	
	logIn: function() {
		if(this.state.username==''||this.state.password=='') {
			this.setState({
				usernameHelp: 'Invalid username and/or password. Log in failed',
				usernameValid: 'error',
				passwordValid: 'error'
			})
		}
		if(this.state.usernameValid!='error'&&this.state.passwordValid!='error'&&this.state.username!=''&&this.state.password!='') {
			var self = this;
			serverBridge.login(this.state.username, this.state.password, function(data) {
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
					self.setState({
						usernameHelp: 'Invalid username and/or password. Log in failed',
						usernameValid: 'error',
						passwordValid: 'error'
					})
				}
			});
		}
	},
	
	sendEmail: function() {
		if(this.state.username!=''&&this.state.fUsernameValid!='error') {
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
					self.setState({
						fUsernameHelp:'There is no user in the database with that username',
						fUsernameValid: 'error'
					});
				}
			});
		}
		else {
			this.setState({
				fUsernameHelp: 'Username must be between 4 and 16 characters in length',
				fUsernameValid: 'error'
			})
		}
	},
	
	resetPassword: function() {
		if(this.state.code=='') {
			this.setState({
				codeValid: 'error',
				codeHelp: 'Code cannot be left blank'
			});
		}
		if(this.state.fPassword=='') {
			this.setState({
				fPasswordValid: 'error',
				fPasswordHelp: 'Password cannot be left blank'
			});
		}
		if(this.state.fPasswordValid!='error'&&this.state.code!=''&&this.state.fPassword!=''&&this.state.codeValid!='error') {
			var self=this;
			serverBridge.resetPasswordFromEmail(this.state.username, this.state.code, this.state.rPassword, function(data) {
				if(data.success=='true') {
					cookieManager.addCookie('username', self.state.username, 7);
					self.props.changePage(1);
				}
				else {
					self.setState({
						codeHelp:'The code entered is incorrect',
						codeValid: 'error'
					});
				}
			});
		}
	},
	
	onUsernameChange: function(value) {
		var validation=undefined;
		if(value.length<4||value.length>16) {
			validation='error';
		}
		this.setState({
			username: value,
			usernameValid: validation,
			usernameHelp: ''
		})
		if(this.state.usernameHelp=='Invalid username and/or password. Log in failed') {
			this.setState({
				passwordValid: undefined
			})
		}
	},
	
	onPasswordChange: function(value) {
		var validation=undefined;
		if(value.length<8||value.length>16) {
			validation='error';
		}
		this.setState({
			password: value,
			passwordValid: validation
		})
		if(this.state.usernameHelp=='Invalid username and/or password. Log in failed') {
			this.setState({
				usernameHelp:'',
				usernameValid:undefined
			})
		}
	},

	onRegUsernameChange: function(value) {
		var validation=undefined;
		var help='';
		if(value.length<4||value.length>16) {
			validation='error';
			help='Username must be between 4 and 16 characters';
		}
		this.setState({
			rUsername: value,
			rUsernameValid: validation,
			rUsernameHelp: help
		})
	},
	
	onRegPasswordChange: function(value) {
		var validation=undefined;
		var help='';
		if(value.length<8||value.length>16) {
			validation='error';
			help='Password must be between 8 and 16 characters';
		}
		this.setState({
			rPassword: value,
			rPasswordValid: validation,
			rPasswordHelp: help
		})
	},
	
	onEmailChange: function(value) {
		var validation='error';
		if(value.length>0) {
			validation=undefined;
		}
		this.setState({
			email: value,
			emailValid: validation,
			emailHelp: ''
		})
	},
	
	onFUsernameChange: function(value) {
		var validation=undefined;
		if(value.length<4||value.length>16) {
			validation='error';
		}
		this.setState({
			username: value,
			usernameValid: undefined,
			passwordValid: undefined,
			usernameHelp: '',
			fUsernameValid: validation,
			fUsernameHelp: ''
		})
	},
	
	onCodeChange: function(value) {
		var validation=undefined;
		if(value.length==0) {
			validation='error';
		}
		this.setState({
			code: value,
			codeValid: validation,
			codeHelp: ''
		})
	},
	
	onFPasswordChange: function(value) {
		var validation=undefined;
		var help='';
		if(value.length<8||value.length>16) {
			validation='error';
			help='Password must be between 8 and 16 characters';
		}
		this.setState({
			fPassword: value,
			fPasswordValid: validation,
			fPasswordHelp: help
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



