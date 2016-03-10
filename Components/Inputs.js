var InputElement = React.createClass({
	getDefaultProps: function() {
		return {
			type: 'text',
			label: '',
			label_md: 3,
			input_md: 7
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

var SelectElement = React.createClass({
	getDefaultProps: function() {
		return {
			label: '',
			label_md: 3,
			input_md: 7,
			placeholder: ''
		}
	},
	
	render: function() {
		var key=0;
		if(this.props.label.length>0) {
			var input = <div><RBS.Col md={this.props.label_md}>{this.props.label}</RBS.Col><RBS.Col md={this.props.input_md}><RBS.Input type='select' value={this.props.value} bsStyle={this.props.bsStyle} onChange={this.onChange} placeholder={this.props.placeholder}>
				{
					this.props.data.map(function(item) {
						return(
							<option key={key++} value={item}>{item}</option>
						)
					}, this)
				}
			</RBS.Input></RBS.Col></div>
		}
		else {
			var input = <div><RBS.Input type='select' value={this.props.value} bsStyle={this.props.bsStyle} onChange={this.onChange} placeholder={this.props.placeholder}>
				{
					this.props.data.map(function(item) {
						return(
							<option key={key++} value={item}>{item}</option>
						)
					}, this)
				}
			</RBS.Input></div>
		}
		
		return(
			<div>{input}</div> 
		)
	},
	
	onChange: function(event) {
		this.props.onChange(event.target.value);
	}
});

