var AccountPage = React.createClass({
	getInitialState : function(){
		return{
			booleanUsernameDialog: false	
		}
		
	},
	
	render: function() {
		return(
		 <div id="title">
		 {this.state.booleanUsernameDialog? <ChangeUsernameDialog close={this.closeUsernameDialog}/>: null}
			<Title /> 
			 <div id="line-space">
			  <RBS.Grid>
				<RBS.Row>
			    Username: <strong>*The data of the user*</strong> <a onClick={this.openUsernameDialog}><RBS.Button bsSize="xsmall">Change</RBS.Button></a>
				</RBS.Row>
			    <RBS.Row>
				E-mail: <strong>*The data of the user*</strong> <RBS.Button bsSize="xsmall">Change</RBS.Button>
				</RBS.Row>
				<RBS.Row>
				<RBS.Button bsSize="">Change Password</RBS.Button>
				</RBS.Row>
			  </RBS.Grid>	
			 </div>  
		 </div>
		)
	},
	
	closeUsernameDialog: function(){
		this.setState ({
			booleanUsernameDialog: false
		})
	},
	
	openUsernameDialog: function(){
		this.setState ({
			booleanUsernameDialog: true
		})
	},
	

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
					   <InputElement label='Username' />
					</RBS.Row>
				  </RBS.Grid>
				</RBS.Modal.Body>
					
				<RBS.Modal.Footer>
				 <RBS.Button bsStyle="primary">Save Changes</RBS.Button>
				</RBS.Modal.Footer>
			</RBS.Modal>
		)
	}
});


var Title = React.createClass({
	render: function(){
		return(
			<h2> Account Information </h2>
		)
	}
	
});



