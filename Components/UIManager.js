var Main = React.createClass({
	getInitialState: function() {
		return {
			currentPage: 0
		}
	},
	render: function() {
		return (
			<div>
				{this.state.currentPage!=0? <div style={{textAlign:'center'}}><a onClick={this.openPreferencesPage}>Preferences</a> &#124; <a>Schedule</a> &#124; <a>Account Management</a> &#124; <a onClick={this.openLoginPage}>Log Out</a></div>: null}
				{this.state.currentPage==0? <LoginPage changePage={this.changePage}/>: null}
				{this.state.currentPage==1? <PreferencesPage changePage={this.changePage}/>: null}
			</div>
		)
	},
	
	changePage: function(newPage) {
		this.setState({
			currentPage: newPage
		})
	},
	
	openLoginPage: function() {
		this.setState({
			currentPage: 0
		})
	},
	
	openPreferencesPage: function() {
		this.setState({
			currentPage: 1
		})
	}
});