var ConfirmationDialog = React.createClass({
	getDefaultProps: function() {
		return {
			title: 'Are you sure?',
			message: 'Are you sure you wish do perform this action?'
		}
	},
	
	 render: function() {
		return (
			<RBS.Modal show={true} onHide={this.props.close}>
				<RBS.Modal.Header closeButton>
					<RBS.Modal.Title>{this.props.title}</RBS.Modal.Title>
				</RBS.Modal.Header>
				<RBS.Modal.Body>
					<div>{this.props.message}</div>
				</RBS.Modal.Body>
				<RBS.Modal.Footer>
					<RBS.Button onClick={this.props.confirm} bsStyle='primary'>Yes</RBS.Button>
					<RBS.Button onClick={this.props.reject}>No</RBS.Button>
				</RBS.Modal.Footer>
			</RBS.Modal>
		)
	}
});

var ClassDialog = React.createClass({
	getInitialState: function() {
		return {
			name: '',
			number: '',
			nameHelp: '',
			numberHelp: ''
		}
	},
	
	render:function() {
		var type='Needed';
		if(this.props.mode==1) {
			type='Taken';
		}
		return (
			<RBS.Modal show={true} onHide={this.props.close}>
				<RBS.Modal.Header closeButton>
					<RBS.Modal.Title>Add {type} Course</RBS.Modal.Title>
				</RBS.Modal.Header>
				<RBS.Modal.Body>
					<RBS.Table>
						<tbody>
							<tr>
								<td style={{width: '30%'}}>Course Number</td>
								<td style={{width: '70%'}}><TypeaheadInput label='Course Number' onChange={this.numberChange} value={this.state.number} data={this.props.courses} bsStyle={this.state.numberValid} help={this.state.numberHelp} type='number'/></td>
							</tr>
							<tr>
								<td>Course Name</td>
								<td><TypeaheadInput label='Course Name' onChange={this.nameChange} value={this.state.name} data={this.props.courses} bsStyle={this.state.nameValid} help={this.state.nameHelp} type='name' id='bloodhound2'/></td>
							</tr>
						</tbody>
					</RBS.Table>
				</RBS.Modal.Body>
				<RBS.Modal.Footer>
					<RBS.Button onClick={this.addCourse} bsStyle='primary'>Add Course</RBS.Button>
				</RBS.Modal.Footer>
			</RBS.Modal>
		)
	},
	
	numberChange: function(value) {
		var name = this.state.name;
		if(value.length==8) {
			for(var i=0; i<this.props.courses.length; i++) {
				if(this.props.courses[i].courseCode==value) {
					name = this.props.courses[i].name;
					break;
				}
			}
		}
		this.setState({
			number: value,
			name: name
		});
	},
	
	nameChange: function(value) {
		var number = this.state.number;
		for(var i=0; i<this.props.courses.length; i++) {
			if(this.props.courses[i].name==value) {
				number = this.props.courses[i].courseCode;
				break;
			}
		}
		this.setState({
			name: value,
			number: number
		});
	},
	
	addCourse: function() {
		var verify = this.verifyCourse();
		if(verify==0) {
			var course = {
				name: this.state.name,
				number: this.state.number
			};
			if(this.props.mode==1)
				this.props.addTakenCourse(course);
			else
				this.props.addNeededCourse(course);
			this.props.close();
		}
		else if(verify==1) {
			this.setState({
				numberValid: 'error',
				numberHelp: 'Course code entered does not match the course name entered'
			})
		}
		else if(verify==2) {
			this.setState({
				nameValid: 'error',
				nameHelp: 'Course name entered does not match the course code entered'
			})
		}
		else {
			this.setState({
				nameValid: 'error',
				numberValid: 'error',
				numberHelp: 'Course info entered does not match the courses in the database'
			})
		}
	},
	
	verifyCourse: function() {
		if(this.state.number.length==8&&this.state.name.length>0) {
			for(var i=0; i<this.props.courses.length; i++) {
				if(this.props.courses[i].name==this.state.name&&this.props.courses[i].courseCode==this.state.number) {
					return 0;
				}
				else if(this.props.courses[i].name==this.state.name) {
					return 1;
				}
				else if(this.props.courses[i].courseCode==this.state.number) {
					return 2;
				}
			}
			return 3;
		}
		else {
			return 3;
		}
	}
});

var EditingDialog = React.createClass({
	getInitialState: function() {
		return {
			name: this.props.course.name,
			number: this.props.course.number,
			nameHelp: '',
			numberHelp: ''
		}
	},
	
	render:function() {
		var type='Needed';
		if(this.props.mode==1) {
			type='Taken';
		}
		return (
			<RBS.Modal show={true} onHide={this.props.close}>
				<RBS.Modal.Header closeButton>
					<RBS.Modal.Title>Edit {type} Course</RBS.Modal.Title>
				</RBS.Modal.Header>
				<RBS.Modal.Body>
					<RBS.Table>
						<tbody>
							<tr>
								<td style={{width: '30%'}}>Course Number</td>
								<td style={{width: '70%'}}><TypeaheadInput label='Course Code' onChange={this.numberChange} value={this.state.number} data={this.props.courses} bsStyle={this.state.numberValid} help={this.state.numberHelp} type='number'/></td>
							</tr>
							<tr>
								<td>Course Name</td>
								<td><TypeaheadInput label='Course Name' onChange={this.nameChange} value={this.state.name} data={this.props.courses} bsStyle={this.state.nameValid} help={this.state.nameHelp} type='name' id='bloodhound2'/></td>
							</tr>
						</tbody>
					</RBS.Table>
				</RBS.Modal.Body>
				<RBS.Modal.Footer>
					<RBS.Button onClick={this.editCourse} bsStyle='primary'>Edit Course</RBS.Button>
				</RBS.Modal.Footer>
			</RBS.Modal>
		)
	},
	
	numberChange: function(value) {
		var name = this.state.name;
		if(value.length==8) {
			for(var i=0; i<this.props.courses.length; i++) {
				if(this.props.courses[i].courseCode==value) {
					name = this.props.courses[i].name;
					break;
				}
			}
		}
		this.setState({
			number: value,
			name: name,
			numberHelp: '',
			nameHelp: '',
			nameValid: undefined,
			numberValid: undefined
		});
	},
	
	nameChange: function(value) {
		var number = this.state.number;
		for(var i=0; i<this.props.courses.length; i++) {
			if(this.props.courses[i].name==value) {
				number = this.props.courses[i].courseCode;
				break;
			}
		}
		this.setState({
			name: value,
			number: number,
			numberHelp: '',
			nameHelp: '',
			nameValid: undefined,
			numberValid: undefined
		});
	},
	
	editCourse: function() {
		var verify = this.verifyCourse();
		if(verify==0) {
			var course = {
				name: this.state.name,
				number: this.state.number
			};
			this.props.edit(course);
			this.props.close();
		}
		else if(verify==1) {
			this.setState({
				numberValid: 'error',
				numberHelp: 'Course code entered does not match the course name entered'
			})
		}
		else if(verify==2) {
			this.setState({
				nameValid: 'error',
				nameHelp: 'Course name entered does not match the course code entered'
			})
		}
		else {
			this.setState({
				nameValid: 'error',
				numberValid: 'error',
				numberHelp: 'Course info entered does not match the courses in the database'
			})
		}
	},
	
	verifyCourse: function() {
		if(this.state.number.length==8&&this.state.name.length>0) {
			for(var i=0; i<this.props.courses.length; i++) {
				if(this.props.courses[i].name==this.state.name&&this.props.courses[i].courseCode==this.state.number) {
					return 0;
				}
				else if(this.props.courses[i].name==this.state.name) {
					return 1;
				}
				else if(this.props.courses[i].courseCode==this.state.number) {
					return 2;
				}
			}
			return 3;
		}
		else {
			return 3;
		}
	}
});

var RegistrationDialog = React.createClass({
	render:function() {
		return (
			<RBS.Modal show={true} onHide={this.props.close}>
				<RBS.Modal.Header closeButton>
					<RBS.Modal.Title>Register</RBS.Modal.Title>
				</RBS.Modal.Header>
				<RBS.Modal.Body>
					<RBS.Grid fluid={true}>
						<RBS.Row>
							<InputElement label='Username' onChange={this.props.usernameChange} value={this.props.username} help={this.props.usernameHelp} bsStyle={this.props.usernameValid}/>
						</RBS.Row>
						<RBS.Row>
							<InputElement label='E-mail' onChange={this.props.emailChange} value={this.props.email} bsStyle={this.props.emailValid} help={this.props.emailHelp}/>
						</RBS.Row>
						<RBS.Row>
							<InputElement label='Password' type='password' onChange={this.props.passwordChange} value={this.props.password} bsStyle={this.props.passwordValid} help={this.props.passwordHelp}/>
						</RBS.Row>
						<RBS.Row>
							<InputElement label='Retype Password' type='password' onChange={this.props.rePasswordChange} value={this.props.rePassword} bsStyle={this.props.rePasswordValid} help={this.props.rePasswordHelp}/>
						</RBS.Row>
					</RBS.Grid>
				</RBS.Modal.Body>
				<RBS.Modal.Footer>
					<RBS.Button onClick={this.props.register} bsStyle='primary'>Register</RBS.Button>
				</RBS.Modal.Footer>
			</RBS.Modal>
		)
	}
});

var ForgotDialog = React.createClass({
	render:function() {
		return (
			<div>{this.props.mode==1? <RBS.Modal show={true} onHide={this.props.close}>
				<RBS.Modal.Header closeButton>
					<RBS.Modal.Title>Forgot Password</RBS.Modal.Title>
				</RBS.Modal.Header>
				<RBS.Modal.Body>
					<RBS.Grid fluid={true}>
						<RBS.Row>
							<RBS.Col>Enter your username and we will send you an e-mail with a code to let you reset your password</RBS.Col><br/>
						</RBS.Row>
						<RBS.Row>
							<InputElement label='Username' onChange={this.props.usernameChange} bsStyle={this.props.usernameValid} help={this.props.usernameHelp} value={this.props.username}/>
						</RBS.Row>
					</RBS.Grid>
				</RBS.Modal.Body>
				<RBS.Modal.Footer>
					<RBS.Button onClick={this.props.forgot} bsStyle='primary'>Send E-mail</RBS.Button>
				</RBS.Modal.Footer>
			</RBS.Modal>:
			<RBS.Modal show={true} onHide={this.props.close}>
				<RBS.Modal.Header closeButton>
					<RBS.Modal.Title>Forgot Password</RBS.Modal.Title>
				</RBS.Modal.Header>
				<RBS.Modal.Body>
					<RBS.Grid fluid={true}>
						<RBS.Row>
							<RBS.Col>An e-mail has been sent to the e-mail registered to this account. Please check this e-mail and enter the code contained along with the new password you want</RBS.Col><br/>
						</RBS.Row>
						<RBS.Row>
							<InputElement label='Code' onChange={this.props.codeChange} value={this.props.code} bsStyle={this.props.codeValid} help={this.props.codeHelp}/>
						</RBS.Row>
						<RBS.Row>
							<InputElement label='Password' type='password' onChange={this.props.passwordChange} bsStyle={this.props.passwordValid} help={this.props.passwordHelp} value={this.props.password}/>
						</RBS.Row>
					</RBS.Grid>
				</RBS.Modal.Body>
				<RBS.Modal.Footer>
					<RBS.Button onClick={this.props.resetPassword} bsStyle='primary'>Reset Password</RBS.Button>
				</RBS.Modal.Footer>
			</RBS.Modal>}</div>
		)
	}
});