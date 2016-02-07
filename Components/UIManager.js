var Main = React.createClass({
	getInitialState: function() {
		return {
			currentPage: 0
		}
	},
	render: function() {
		return (
			<div>
				{this.state.currentPage==0? <LoginPage changePage={this.changePage}/>: null}
				{this.state.currentPage==1? <PreferencesPage/>: null}
			</div>
		)
	},
	
	changePage: function(newPage) {
		this.setState({
			currentPage: newPage
		})
	}
	
	/*openLoginPage: function() {
		this.setState({
			currentPage: 0
		})
	},
	
	openPreferencesPage: function() {
		this.setState({
			currentPage: 1
		})
	}*/
});