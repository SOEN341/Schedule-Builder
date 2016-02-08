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
		console.log("Pass: " + password);
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		   if (xhttp.readyState == 4 && xhttp.status == 200) {
		    // document.getElementById("txtHint").innerHTML = xhttp.responseText;
		    //console.log(xhttp.responseText);
		    }
		  };
		  xhttp.open("POST", "registrationscript.php", true);
		  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		  xhttp.send("user=username&pass=password");
		  //alert(xhttp.responseText);
		this.closeRegistrationDialog();
		this.props.changePage(0); //Log them in and redirect to preferences page
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
		var username="user0";
		var password="pass";
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		   if (xhttp.readyState == 4 && xhttp.status == 200) {
		    // document.getElementById("txtHint").innerHTML = xhttp.responseText;
		    console.log(xhttp.responseText);
		    }
		  };
		  xhttp.open("POST", "logscript.php", true);
		  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		  xhttp.send("username=username&password=password");
		this.closeRegistrationDialog();
		this.props.changePage(0);

		if(xhttp.responseText.localeCompare('good') == 0) {
			this.props.changePage(0);
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

