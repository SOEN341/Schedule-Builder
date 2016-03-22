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
				{this.state.registerDialogOpen? <RegistrationDialog close={this.closeRegistrationDialog} register={this.register} passwordChange={this.onPasswordChange} usernameChange={this.onUsernameChange}/>: null}
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
	
	register: function() {
		var self1=this;
		console.log(this.state.username);
			$.ajax({
			type:    "POST",
			url:     "http://localhost:8000/register",
			dataType: "json",
			data:    {"username":this.state.username, "password":this.state.password },
			success: function(data) {
				console.log(data);
				 if(data.result.localeCompare('registered') == 0) {
				 	alert('Registered properly.');
					 self.props.changePage(1);
				 }
				 else {
				 	alert('This username is taken already. Try again');
					 self.props.changePage(0);
				 }
			},
			error:   function(jqXHR, textStatus, errorThrown) {
				alert("Error, status = " + textStatus + ", " +
					"error thrown: " + errorThrown
				);
			}
		});
		self1.closeRegistrationDialog();
		 //Log them in and redirect to preferences page
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
		var self= this;
			$.ajax({
				type:    "POST",
				url:     "http://localhost:8000/login",
				dataType: "json",
				data:    {"username":this.state.username, "password":this.state.password },
				success: function(data) {
					if(data.result.localeCompare('good') == 0) {
						self.props.changePage(1);
					}
					else {
						alert('Bad username and/or password');
						self.props.changePage(0);
					}
				},
				error:   function(jqXHR, textStatus, errorThrown) {
					alert("Error, status = " + textStatus + ", " +
						"error thrown: " + errorThrown
					);
				}
			});
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
							<InputElement label='Username' onChange={this.props.usernameChange}/>
						</RBS.Row>
						<RBS.Row>
							<InputElement label='Password' type='password' onChange={this.props.passwordChange}/>
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



