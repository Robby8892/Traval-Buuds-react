import React, { Component } from 'react'
import {Form, Button, Label, Modal, Header, TextArea} from 'semantic-ui-react'

export default class EditPostModal extends Component {
	constructor(props){
		super(props)

		this.state = {
			title: '',
			place: '',
			photo: '',
			story: ''
		}
	}

	handleChange = (e) => {

	}

	handlSubmit = (e) => {
		e.preventDefault()
	}

	render(){
		return(
			<Modal closeIcon open={this.props.open} onClose={this.props.close}>
				<Header>Edit Post</Header>
				<Modal.Content>
					<Form onSubmit={this.handlSubmit}>
					<Label>Edit Title: </Label>
					<Form.Input
					type='text'
					name='title'
					value={this.state.title}
					/>
					<Label>Edit Place You Went: </Label>
					<Form.Input
					type='text'
					name='place'
					value={this.state.place}
					/>
					<Label>Edit Photo: </Label>
					<Form.Input
					type='text'
					name='photo'
					value={this.state.photo}
					/>
					<Label>Edit Story: </Label>
					<TextArea
					type='text'
					name='story'
					value={this.state.story}
					/>
					<Modal.Actions>
						<Button color={'blue'}>Edit Post!</Button>
					</Modal.Actions>
					</Form>
				</Modal.Content>
			</Modal>
	)
	}
}