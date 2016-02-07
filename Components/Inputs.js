var InputElement = React.createClass({
	getDefaultProps: function() {
		return {
			type: 'text',
			label: '',
			label_md: 3,
			input_md: 8
		}
	},
	
	render: function() {
		if(this.props.label.length>0) {
			var input = <div><RBS.Col md={this.props.label_md}>{this.props.label}</RBS.Col><RBS.Col md={this.props.input_md}><RBS.Input type={this.props.type} value={this.props.value} bsStyle={this.props.bsStyle} onChange={this.onChange}/></RBS.Col></div>
		}
		else {
			var input = <div><RBS.Input type={this.props.type} value={this.props.value} bsStyle={this.props.bsStyle} onChange={this.onChange}/></div>
		}
		
		return(
			<div>{input}</div>
		)
	},
	
	onChange: function(event) {
		this.props.onChange(event.target.value);
	}
});

