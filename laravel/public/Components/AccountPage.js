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
			username: ''
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
					   <InputElement label='New Username' value={this.state.username} onChange={this.onUsernameChange}/>
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
		if(this.state.username!='') {
			if(this.state.username!=cookieManager.getCookie('username')) {
				var self=this;
				serverBridge.editUsername(self.state.username, function(data) {
					if(data.result=='true') {
						self.props.change(self.state.username);
					}
					else {
						alert('Username already taken');
					}
				});
			}
			else {
				alert('The new username entered is the same as the old one');
			}
		}
		else {
			alert('Username can not be blank');
		}
	},
	
	onUsernameChange: function(value) {
		this.setState({
			username: value
		})
	}
});

var ChangeEmailDialog = React.createClass({
	getInitialState: function() {
		return {
			email: ''
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
					   <InputElement label='New E-mail' value={this.state.email} onChange={this.onEmailChange}/>
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
			alert('E-mail cannot be blank');
		}
		else {
			serverBridge.editEmail(this.state.email);
			this.props.change(this.state.email);
		}
	},
	
	onEmailChange: function(value) {
		this.setState({
			email: value
		})
	}
});

var ChangePasswordDialog = React.createClass({
	getInitialState: function() {
		return {
			password: '',
			newPassword: '',
			newPassRetype: ''
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
					   <InputElement label='Current Password' type='password' value={this.state.password} onChange={this.onPasswordChange}/>
					</RBS.Row>
					<RBS.Row>
					   <InputElement label='New Password' type='password' value={this.state.newPassword} onChange={this.onNewPasswordChange}/>
					</RBS.Row>
				    <RBS.Row>
					   <InputElement label='Re-type New Password' type='password' value={this.state.newPassRetype} onChange={this.onNewPassRetypeChange}/>
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
		if(this.state.password!=''&&this.state.newPassword!='') {
			var self=this;
			serverBridge.login(cookieManager.getCookie('username'), this.state.password, function(data) {
				if(data.success=='true') {
					if(self.state.newPassword==self.state.newPassRetype) {
						if(self.state.password!=self.state.newPassword) {
							serverBridge.editPassword(self.state.newPassword);
							self.props.close();
						}
						else {
							alert('New entered password is the same as the old one');
						}
					}
					else {
						alert('New password does not match the retyped password');
					}
				}
				else {
					alert('Incorrect password entered for current user');
				}
			});
		}
		else {
			alert('Inputs cannot be empty');
		}
	},
	
	onPasswordChange: function(value) {
		this.setState({
			password: value
		})
	},
	
	onNewPasswordChange: function(value) {
		this.setState({
			newPassword: value
		})
	},
	
	onNewPassRetypeChange: function(value) {
		this.setState({
			newPassRetype: value
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



