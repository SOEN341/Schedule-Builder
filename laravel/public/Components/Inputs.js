var InputElement = React.createClass({
	getDefaultProps: function() {
		return {
			type: 'text',
			label: '',
			label_md: 3,
			input_md: 7,
			help:'',
			bsStyle:undefined,
			hasFeedback:false
		}
	},
	
	render: function() {
		var input;
		if(this.props.label.length>0) {
			input = <div><RBS.Col md={this.props.label_md}>{this.props.label}</RBS.Col><RBS.Col md={this.props.input_md}><RBS.Input type={this.props.type} value={this.props.value} bsStyle={this.props.bsStyle} help={this.props.help} onChange={this.onChange} hasFeedback={this.props.hasFeedback}/></RBS.Col></div>
		}
		else {
			input = <div><RBS.Input type={this.props.type} value={this.props.value} bsStyle={this.props.bsStyle} help={this.props.help} onChange={this.onChange} hasFeedback={this.props.hasFeedback}/></div>
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
			type: '',
			id: 'bloodhound',
			help:'',
			bsStyle:undefined,
			hasFeedback:false
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
				local.push(this.props.data[i].courseCode);
			}
		}
		
		// constructs the suggestion engine
		var bloodhound = new Bloodhound({
			datumTokenizer: Bloodhound.tokenizers.whitespace,
			queryTokenizer: Bloodhound.tokenizers.whitespace,
			local: local
		});



		$('#' + this.props.id + ' .typeahead').typeahead({
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
		/*<div id={this.props.id} key={this.props.key}>
					<RBS.Col md={this.props.label_md}>{this.props.label}</RBS.Col><RBS.Col md={this.props.input_md}><RBS.Input className="typeahead" type="text" placeholder={this.props.placeholder} ref="myTextInput" value={this.props.value} onChange={this.handleChange} onBlur={this.handleChange} key={this.props.key}/></RBS.Col>
				</div>*/
		return (
				<div id={this.props.id} style={{width:'300px'}}>
					<RBS.Input style={{width:'300px'}} className="typeahead" type="text" placeholder={this.props.placeholder} ref="myTextInput" value={this.props.value} onChange={this.handleChange} onBlur={this.handleChange} bsStyle={this.props.bsStyle} help={this.props.help} hasFeedback={this.props.hasFeedback}/>
				</div>
		);
	}
});