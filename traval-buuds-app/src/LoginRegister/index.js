import React, { Component } from 'react'

import {Button, Form, Segment} from 'semantic-ui-react'

export default class LoginRegister extends Component {
	constructor(props){
		super(props)

		this.state = {
			username: '',
			password: '',
			email: ''
		}
	}

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	registerAccount = () => {
		this.props.register(this.state)
	}

	onSubmit = (e) => {
		e.preventDefault()
		this.registerAccount()
	}

	render(){
		console.log(this.state);
		return(
			<Segment inverted>
				<Form onSubmit={this.onSubmit} inverted>
					<Form.Group widths='equal'>
						<Form.Input
						type='text'
						name='username'
						placeholder='Enter Username'
						value={this.state.username}
						onChange={this.onChange}
						/>
						<Form.Input
						type='email'
						name='email'
						placeholder='Enter Email'
						value={this.state.email}
						onChange={this.onChange}
						/>
						<Form.Input
						type='password'
						name='password'
						placeholder='Enter Password'
						value={this.state.password}
						onChange={this.onChange}
						/>
					</Form.Group>
					<Button>Register</Button>
				</Form>
			</Segment>

		)
	}
}