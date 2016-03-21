var Main = React.createClass({
	getInitialState: function() {
		return {
			currentPage: this.props.currentPage
		}
	}, 
	render: function() {
		return (
			<div>
				{this.state.currentPage!=0? <div style={{textAlign:'center'}}><a onClick={this.openPreferencesPage}>Preferences</a> &#124; <a>Schedule</a> &#124; <a>Account Management</a> &#124; <a onClick={this.openLoginPage}>Log Out</a></div>: null}
				{this.state.currentPage==0? <LoginPage changePage={this.changePage}/>: null}
				{this.state.currentPage==1? <PreferencesPage changePage={this.changePage}/>: null}
				{this.state.currentPage==2? <AccountPage changePage={this.changePage}/>: null}
			</div>
		)
	},
	
	changePage: function(newPage) {
		if(newPage==0) {
			window.location = 'resources/views/index.php';
		}
		else if(newPage==1) {
			window.location = $.get( "preferences.php" );
		}
		else if(newPage==2) {
			window.location = $.get( "account.php" );
		}
	},
	
	openLoginPage: function() {
		this.changePage(0);
	},
	
	openPreferencesPage: function() {
		this.changePage(1);
	}
	

});