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
			value: '',
			key: 1,
			type: ''
		}
	},

	handleChange: function(event) {
		this.props.onChange(event.target.value);
	},

	componentDidMount: function() {
		var local=this.props.data;
		if(this.props.type=='name') {
			local = [];
			for(var i=0; i<this.props.data.length; i++) {
				local.push(this.props.data[i].name);
			}
		}
		else if(this.props.type=='number') {
			local = [];
			for(var i=0; i<this.props.data.length; i++) {
				local.push(this.props.data[i].number);
			}
		}
		
		// constructs the suggestion engine
		var bloodhound = new Bloodhound({
			datumTokenizer: Bloodhound.tokenizers.whitespace,
			queryTokenizer: Bloodhound.tokenizers.whitespace,
			local: local
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
	},

	render: function() {
		/*if(this.props.label.length>0) {
			var input = <div><RBS.Col md={this.props.label_md}>{this.props.label}</RBS.Col><RBS.Col md={this.props.input_md}><RBS.Input className="typeahead" type="text" placeholder={this.props.placeholder} ref="myTextInput" value={this.props.value} onChange={this.handleChange} onBlur={this.handleChange} /></RBS.Col></div>
		}
		else {
			var input = <div><RBS.Input className="typeahead" type="text" placeholder={this.props.placeholder} ref="myTextInput" value={this.props.value} onChange={this.handleChange} onBlur={this.handleChange} /></div>
		}*/
		console.log('render');
		return (
				<div id="bloodhound" key={this.props.key}>
					<RBS.Col md={this.props.label_md}>{this.props.label}</RBS.Col><RBS.Col md={this.props.input_md}><RBS.Input className="typeahead" type="text" placeholder={this.props.placeholder} ref="myTextInput" value={this.props.value} onChange={this.handleChange} onBlur={this.handleChange} key={this.props.key}/></RBS.Col>
				</div>
		);
	}
});