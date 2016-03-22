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

var TypeaheadInput = React.createClass({
	getDefaultProps: function() {
		return {
			placeholder: '',
			data: [],
			value: ''
		}
	},

	handleChange: function(event) {
		this.props.onChange(event.target.value);
	},

	componentDidMount: function() {
		// constructs the suggestion engine
		var bloodhound = new Bloodhound({
			datumTokenizer: Bloodhound.tokenizers.whitespace,
			queryTokenizer: Bloodhound.tokenizers.whitespace,
			// `states` is an array of state names defined in "The Basics"
			local: this.props.data
		});



		$('#bloodhound .typeahead').typeahead({
				hint: true,
				highlight: true,
				minLength: 1
			},
			{
				name: 'data',
				source: bloodhound
			});

		React.findDOMNode(this.refs.myTextInput).focus();
		$ (React.findDOMNode(this.refs.myTextInput)).typeahead({
				hint: true,
				highlight: true,
				minLength: 1
			},
			{
				name: 'data',
				source: bloodhound
			});
	},

	render: function() {
		return (
			<div>
				<div id="bloodhound">
					<div>
						<RBS.Input className="typeahead" type="text" placeholder={this.props.placeholder} ref="myTextInput" value={this.props.value} onChange={this.handleChange} onBlur={this.handleChange} /></div>
				</div>
			</div>
		);
	}
});