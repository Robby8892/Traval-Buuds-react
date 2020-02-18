import React, { Component } from 'react'

import {Button, Form, Segment} from 'semantic-ui-react'

import './index.css'

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

	loginRegister = () => {

		if(this.props.status === 'register'){
			this.props.register(this.state)
		}else{
			this.props.login(this.state)
		}

	}

	onSubmit = (e) => {
		e.preventDefault()
		this.loginRegister()
	}

	changeStatus = () => {
		this.props.changeStatus()
	}

	render(){
		return(
			<Segment inverted>
				<Form onSubmit={this.onSubmit} inverted>
					<Form.Group widths='equal'>
					{this.props.status === 'register' ? <Form.Input
						type='text'
						name='username'
						placeholder='Enter Username'
						value={this.state.username}
						onChange={this.onChange}
						/> : null}
						
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
					<Button type='Submit'>{this.props.status === 'register' ? 'Register' : 'Login'}</Button>
				</Form>
				{this.props.status === 'register' ? 
				<small>Already signed up? Click <span onClick={this.changeStatus} className='switch-form'>here</span>.</small>
				:
				<small>Need to register? Click <span onClick={this.changeStatus} className='switch-form'>here</span>.</small>
				}
			</Segment>

		)
	}
}