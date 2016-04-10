var AccountPage = React.createClass({
	getInitialState : function(){
		return{
			usernameDialogOpen: false,
			emailDialogOpen: false,
			passwordDialogOpen: false,
			username: '',
			email: ''
		}
	},
	
	render: function() {
		return(
		 <div id="title">
		 {this.state.usernameDialogOpen? <ChangeUsernameDialog close={this.closeUsernameDialog} change={this.changeUsername}/>: null}
		 {this.state.emailDialogOpen? <ChangeEmailDialog close={this.closeEmailDialog} change={this.changeEmail}/>: null}
		 {this.state.passwordDialogOpen? <ChangePasswordDialog close={this.closePasswordDialog}/>: null}
			<Title /> 
			 <div id="line-space">
			  <RBS.Grid fluid={true} style={{textAlign: 'center'}}>
				<RBS.Row>
					Username: <strong>{this.state.username}</strong> <RBS.Button bsSize="xsmall" onClick={this.openUsernameDialog}>Change</RBS.Button>
				</RBS.Row>
			    <RBS.Row>
					E-mail: <strong>{this.state.email}</strong> <RBS.Button bsSize="xsmall" onClick={this.openEmailDialog}>Change</RBS.Button>
				</RBS.Row>
				<RBS.Row>
					<RBS.Button onClick={this.openPasswordDialog}>Change Password</RBS.Button>
				</RBS.Row>
			  </RBS.Grid>	
			 </div>  
		 </div>
		)
	},
	
	componentDidMount: function() {
		var cookies=this.loadCookies();
		this.setState({
			username: cookies.username,
			email: cookies.email
		});
	},
	
	loadCookies: function() {
		var username=cookieManager.getCookie('username');
		if(username=='') {
			this.props.changePage(0);
		}
		var email=cookieManager.getCookie('email');
		if(email=='') {
			var self=this;
			setTimeout(function() {
				serverBridge.getEmail(function(data) {
					self.setState({
						email: data.email
					});
					cookieManager.addCookie('email', data.email, 7);
				});
			}, 10);
		}
		
		return {
			username: username,
			email: email
		}
	},
	
	closeUsernameDialog: function(){
		this.setState ({
			usernameDialogOpen: false
		})
	},
	
	openUsernameDialog: function(){
		this.setState ({
			usernameDialogOpen: true
		})
	},
	
	changeUsername: function(username) {
		this.setState({
			username: username,
			usernameDialogOpen: false
		});
		cookieManager.addCookie('username', username, 7);
	},
	
	changeEmail: function(email) {
		this.setState({
			email: email,
			emailDialogOpen: false
		});
		cookieManager.addCookie('email', email, 7);
	},
	
	closeEmailDialog: function(){
		this.setState ({
			emailDialogOpen: false
		})
	},
	
	openEmailDialog: function(){
		this.setState ({
			emailDialogOpen: true
		})
	},
	
	closePasswordDialog: function(){
		this.setState ({
			passwordDialogOpen: false
		})
	},
	
	openPasswordDialog: function(){
		this.setState ({
			passwordDialogOpen: true
		})
	}
});


var ChangeUsernameDialog = React.createClass({
	getInitialState: function() {
		return {
			username: '',
			help: ''
		}
	},
	
	render: function(){
		return(
			<RBS.Modal show={true} onHide={this.props.close}>
			
				<RBS.Modal.Header closeButton>
				   <RBS.Modal.Title>Change Username</RBS.Modal.Title>
				</RBS.Modal.Header>	
				
				<RBS.Modal.Body>
				  <RBS.Grid fluid={true}>
				    <RBS.Row>
					   <InputElement label='New Username' value={this.state.username} bsStyle={this.state.valid} help={this.state.help} onChange={this.onUsernameChange}/>
					</RBS.Row>
				  </RBS.Grid>
				</RBS.Modal.Body>
					
				<RBS.Modal.Footer>
				 <RBS.Button bsStyle="primary" onClick={this.changeUsername}>Save Changes</RBS.Button>
				</RBS.Modal.Footer>
			</RBS.Modal>
		)
	},
	
	changeUsername: function() {
		var error=false;
		if(this.state.username=='') {
			error=true;
			this.setState({
				help:'Username cannot be blank',
				valid: 'error'
			});
		}
		else if(this.state.username.search(/\s/)!=-1) {
			error=true;
			this.setState({
				help:'Username cannot contain whitespace characters',
				valid: 'error'
			});
		}
		if(!error&&this.state.valid!='error') {
			if(this.state.username!=cookieManager.getCookie('username')) {
				var self=this;
				serverBridge.editUsername(self.state.username, function(data) {
					if(data.result=='true') {
						self.props.change(self.state.username);
					}
					else {
						self.setState({
							help: 'Username already taken',
							valid: 'error'
						});
					}
				});
			}
			else {
				this.setState({
					help:'The new username entered is the same as the old one',
					valid: 'error'
				});
			}
		}
	},
	
	onUsernameChange: function(value) {
		var validation=undefined;
		var help='';
		if(value.length<4||value.length>16) {
			validation='error';
			help='Username must be between 4 and 16 characters';
		}
		this.setState({
			username: value,
			valid: validation,
			help: help
		})
	}
});

var ChangeEmailDialog = React.createClass({
	getInitialState: function() {
		return {
			email: '',
			help: ''
		}
	},
	
	render: function(){
		return(
			<RBS.Modal show={true} onHide={this.props.close}>
				<RBS.Modal.Header closeButton>
				   <RBS.Modal.Title>Change E-mail</RBS.Modal.Title>
				</RBS.Modal.Header>	
				
				<RBS.Modal.Body>
				  <RBS.Grid fluid={true}>
				    <RBS.Row>
					   <InputElement label='New E-mail' value={this.state.email} bsStyle={this.state.valid} help={this.state.help} onChange={this.onEmailChange}/>
					</RBS.Row>
				  </RBS.Grid>
				</RBS.Modal.Body>
					
				<RBS.Modal.Footer>
				 <RBS.Button bsStyle="primary" onClick={this.changeEmail}>Save Changes</RBS.Button>
				</RBS.Modal.Footer>
			</RBS.Modal>
		)
	},
	
	changeEmail: function() {
		if(this.state.email=='') {
			this.setState({
				help: 'E-mail cannot be blank',
				valid: 'error'
			});
		}
		else if(this.state.email==cookieManager.getCookie('email')) {
			this.setState({
				help: 'New e-mail entered is the same as the old e-mail',
				valid: 'error'
			});
		}
		else if(this.state.email.search(/\s/)!=-1) {
			this.setState({
				help: 'E-mail cannot contain whitespace characters',
				valid: 'error'
			});
		}
		else if(this.state.email.search(/\S+@\S+\.\S{2,}/)==-1) {
			this.setState({
				help: 'E-mail is in incorrect format',
				valid: 'error'
			})
		}
		else {
			var self=this;
			serverBridge.editEmail(this.state.email, function(data){
				if(data.success=='true') {
					self.props.change(self.state.email);
				}
				else {
					self.setState({
						help: 'E-mail already taken by another user',
						valid: 'error'
					});
				}
			});
		}
	},
	
	onEmailChange: function(value) {
		var validation=undefined;
		if(value.length==0) {
			validation='error';
		}
		this.setState({
			email: value,
			help: '',
			valid: validation
		})
	}
});

var ChangePasswordDialog = React.createClass({
	getInitialState: function() {
		return {
			password: '',
			newPassword: '',
			newPassRetype: '',
			passwordHelp: '',
			newPasswordHelp: '',
			newPassRetypeHelp: ''
		}
	},
	
	render: function(){
		return(
			<RBS.Modal show={true} onHide={this.props.close}>
				<RBS.Modal.Header closeButton>
				   <RBS.Modal.Title>Change Password</RBS.Modal.Title>
				</RBS.Modal.Header>	
				
				<RBS.Modal.Body>
				  <RBS.Grid fluid={true}>
					<RBS.Row>
					   <InputElement label='Current Password' type='password' value={this.state.password} help={this.state.passwordHelp} bsStyle={this.state.passwordValid} onChange={this.onPasswordChange}/>
					</RBS.Row>
					<RBS.Row>
					   <InputElement label='New Password' type='password' value={this.state.newPassword} help={this.state.newPasswordHelp} bsStyle={this.state.newPasswordValid} onChange={this.onNewPasswordChange}/>
					</RBS.Row>
				    <RBS.Row>
					   <InputElement label='Re-type New Password' type='password' value={this.state.newPassRetype} help={this.state.newPassRetypeHelp} bsStyle={this.state.newPassRetypeValid} onChange={this.onNewPassRetypeChange}/>
					</RBS.Row>
				  </RBS.Grid>
				</RBS.Modal.Body>
					
				<RBS.Modal.Footer>
				 <RBS.Button bsStyle="primary" onClick={this.changePassword}>Save Changes</RBS.Button>
				</RBS.Modal.Footer>
			</RBS.Modal>
		)
	},
	
	changePassword: function() {
		if(this.state.password!=''&&this.state.newPassword!=''&&this.state.newPassRetype!=''&&this.state.passwordValid!='error'&&this.state.newPasswordValid!='error'&&this.state.newPassRetypeValid!='error'&&this.state.password!=this.state.newPassword&&this.state.newPassword.search(/\s/)==-1) {
			var self=this;
			serverBridge.login(cookieManager.getCookie('username'), this.state.password, function(data) {
				if(data.success=='true') {
					serverBridge.editPassword(self.state.newPassword);
					self.props.close();
				}
				else {
					self.setState({
						passwordHelp: 'Incorrect password entered for current user',
						passwordValid: 'error'
					});
				}
			});
		}
		else if(this.state.password==this.state.newPassword) {
			this.setState({
				newPasswordHelp: 'New entered password is the same as the old one',
				newPasswordValid: 'error'
			});
		}
		else if(this.state.newPassword.search(/\s/)!=-1) {
			this.setState({
				newPasswordHelp: 'New entered password cannot contain whitespace characters',
				newPasswordValid: 'error'
			});
		}
		else {
			if(this.state.password=='') {
				this.setState({
					passwordHelp: 'Password cannot be left blank',
					passwordValid: 'error'
				})
			}
			if(this.state.newPassword=='') {
				this.setState({
					newPasswordHelp: 'Password cannot be left blank',
					newPasswordValid: 'error'
				})
			}
			if(this.state.newPassRetype=='') {
				this.setState({
					newPassRetypeHelp: 'Password cannot be left blank',
					newPassRetypeValid: 'error'
				})
			}
		}
	},
	
	onPasswordChange: function(value) {
		var validation=undefined;
		if(value.length<8||value.length>16) {
			validation='error';
		}
		this.setState({
			password: value,
			passwordValid: validation,
			passwordHelp: ''
		})
	},
	
	onNewPasswordChange: function(value) {
		var validation=undefined;
		var help='';
		if(value.length<8||value.length>16) {
			validation='error';
			help='Password must be between 8 and 16 characters';
		}
		this.setState({
			newPassword: value,
			newPasswordValid: validation,
			newPasswordHelp: help
		})
		if(value!=this.state.newPassRetype) {
			this.setState({
				newPassRetypeValid: 'error',
				newPassRetypeHelp: 'Passwords don\'t match'
			})
		}
	},
	
	onNewPassRetypeChange: function(value) {
		var validation=undefined;
		var help='';
		if(value!=this.state.newPassword) {
			validation='error';
			help='Passwords don\'t match';
		}
		this.setState({
			newPassRetype: value,
			newPassRetypeValid: validation,
			newPassRetypeHelp: help
		})
	}
});


var Title = React.createClass({
	render: function(){
		return(
			<h1> Account Information </h1>
		)
	}
	
});



