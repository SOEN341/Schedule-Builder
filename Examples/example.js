var RBS = ReactBootstrap;
var Main = React.createClass({
	getInitialState: function() {
		/*State variables are essentially class variables for this component
			getInitialState sets the inital values for them. They can later be updated by using this.setState()
			State variables can be accessed using this.state.nameofvariable
		*/
		return {
			count: 0
		}
	}, //never forget these stupid commas. They've caused me so many headaches in the past, where my code wouldn't run because I forgot to put them. All methods should have a comma after them, unless it's the class comma in the class
	
	/* The render function defines what the component looks like on screen. It must return a single tag.
		There can be other components within that tag, but it can't be like this:
		<div>stuff</div><div>other stuff</div>
		I usually just hold everything in a div tag. So that example would look like this
		<div>
			<div>stuff</div><div>other stuff</div>
		</div>
	*/
	render: function() {
		return (
			<div>
				<RBS.Alert>Here's a React Bootstrap Component</RBS.Alert>
				
				{/*Javascript functions such as on-click all work within React, however they are all written in camel case,
					ie: onClick, onFocus, etc
				*/}
				<RBS.Button onClick={this.incrementCount} bsStyle="primary">Here's a react button in primary color</RBS.Button>
				
				{/*Within the return statement, you can use javascript within curly braces. So if you want to output the value
					of a variable, for example, then you would do this.state.variable within curly braces. Otherwise it would just
					output the string
				*/}
				Button presses: {this.state.count}<br/>
				Without curly braces: this.state.count
				
				{/*React Bootstrap defines a lot of good CSS options, but they aren't always enough. If you want to define
					your own CSS, this is usually done inline in React. You do it as follows, with 2 sets of curly braces.
					I don't know why this is necessary, but just remember to do that. CSS stuff is also written in camelcase.
					ie: textAlign, etc
				*/}
				<h1 style={{width: '30%', textAlign: 'center'}}>Custom CSS</h1>
			</div>
		)
	},
	
	incrementCount: function() {
		this.setState({count: this.state.count+1});
	}
});