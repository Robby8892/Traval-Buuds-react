import React, { Component } from 'react'

import {Button, Form, Segment} from 'semantic-ui-react'

export default class LoginRegister extends Component {
	constructor(){
		super()

		this.state = {
			username: '',
			password: '',
			email: ''
		}
	}
	render(){
		return(
			<Segment inverted>
				<Form inverted>
					<Form.Group widths='equal'>
						<Form.Input
						type='text'
						name='username'
						placeholder='Enter Username'
						/>
						<Form.Input
						type='email'
						name='email'
						placeholder='Enter Email'
						/>
						<Form.Input
						type='password'
						name='password'
						placeholder='Enter Password'
						/>
					</Form.Group>
					<Button>Register</Button>
				</Form>
			</Segment>

		)
	}
}