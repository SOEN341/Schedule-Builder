var AccountPage = React.createClass({
	getInitialState : function(){
		return{
			usernameDialogOpen: false,
			emailDialogOpen: false,
			passwordDialogOpen: false
		}
	},
	
	render: function() {
		return(
		 <div id="title">
		 {this.state.usernameDialogOpen? <ChangeUsernameDialog close={this.closeUsernameDialog}/>: null}
		 {this.state.emailDialogOpen? <ChangeEmailDialog close={this.closeEmailDialog}/>: null}
		 {this.state.passwordDialogOpen? <ChangePasswordDialog close={this.closePasswordDialog}/>: null}
			<Title /> 
			 <div id="line-space">
			  <RBS.Grid fluid={true} style={{textAlign: 'center'}}>
				<RBS.Row>
					Username: <strong>*The data of the user*</strong><RBS.Button bsSize="xsmall" onClick={this.openUsernameDialog}>Change</RBS.Button>
				</RBS.Row>
			    <RBS.Row>
					E-mail: <strong>*The data of the user*</strong> <RBS.Button bsSize="xsmall" onClick={this.openEmailDialog}>Change</RBS.Button>
				</RBS.Row>
				<RBS.Row>
					<RBS.Button onClick={this.openPasswordDialog}>Change Password</RBS.Button>
				</RBS.Row>
			  </RBS.Grid>	
			 </div>  
		 </div>
		)
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
	render: function(){
		return(
			<RBS.Modal show={true} onHide={this.props.close}>
			
				<RBS.Modal.Header closeButton>
				   <RBS.Modal.Title>Change Username</RBS.Modal.Title>
				</RBS.Modal.Header>	
				
				<RBS.Modal.Body>
				  <RBS.Grid fluid={true}>
				    <RBS.Row>
					   <InputElement label='New Username' />
					</RBS.Row>
				  </RBS.Grid>
				</RBS.Modal.Body>
					
				<RBS.Modal.Footer>
				 <RBS.Button bsStyle="primary" onClick={this.props.close}>Save Changes</RBS.Button>
				</RBS.Modal.Footer>
			</RBS.Modal>
		)
	}
});

var ChangeEmailDialog = React.createClass({
	render: function(){
		return(
			<RBS.Modal show={true} onHide={this.props.close}>
				<RBS.Modal.Header closeButton>
				   <RBS.Modal.Title>Change E-mail</RBS.Modal.Title>
				</RBS.Modal.Header>	
				
				<RBS.Modal.Body>
				  <RBS.Grid fluid={true}>
				    <RBS.Row>
					   <InputElement label='New E-mail'/>
					</RBS.Row>
				  </RBS.Grid>
				</RBS.Modal.Body>
					
				<RBS.Modal.Footer>
				 <RBS.Button bsStyle="primary" onClick={this.props.close}>Save Changes</RBS.Button>
				</RBS.Modal.Footer>
			</RBS.Modal>
		)
	}
});

var ChangePasswordDialog = React.createClass({
	render: function(){
		return(
			<RBS.Modal show={true} onHide={this.props.close}>
				<RBS.Modal.Header closeButton>
				   <RBS.Modal.Title>Change Password</RBS.Modal.Title>
				</RBS.Modal.Header>	
				
				<RBS.Modal.Body>
				  <RBS.Grid fluid={true}>
					<RBS.Row>
					   <InputElement label='Current Password'/>
					</RBS.Row>
					<RBS.Row>
					   <InputElement label='New Password'/>
					</RBS.Row>
				    <RBS.Row>
					   <InputElement label='Re-type New Password'/>
					</RBS.Row>
				  </RBS.Grid>
				</RBS.Modal.Body>
					
				<RBS.Modal.Footer>
				 <RBS.Button bsStyle="primary" onClick={this.props.close}>Save Changes</RBS.Button>
				</RBS.Modal.Footer>
			</RBS.Modal>
		)
	}
});


var Title = React.createClass({
	render: function(){
		return(
			<h1> Account Information </h1>
		)
	}
	
});



