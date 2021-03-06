import React, { Component } from 'react'
import {Form, Button, Label, Modal, Header, TextArea} from 'semantic-ui-react'
import {Image, Transformation, CloudinaryContext} from 'cloudinary-react'


export default class PostCreateModal extends Component {
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

		// - https://codeburst.io/react-image-upload-with-kittens-cc96430eaece setup file upload instead
		console.log('e.target', e.target.files);
		this.setState({
			[e.target.name]: e.target.value
		})
			
	}

	createNewPost = () => {
		this.props.createPost(this.state)

		this.setState({			
			title: '',
			place: '',
			photo: '',
			story: ''
		})
	}

	handlSubmit = (e) => {
		e.preventDefault()
		this.createNewPost()
	}

	render(){

		return(
			<Modal open={this.props.open} closeIcon onClose={this.props.close}>
				<Header>Create Post</Header>
				<Modal.Content>
					<Form onSubmit={this.handlSubmit}>
					<Label>Title: </Label>
					<Form.Input
					type='text'
					name='title'
					placeholder='Enter Your Title'
					value={this.state.title}
					onChange={this.handleChange}
					/>
					<Label>Place You Went: </Label>
					<Form.Input
					type='text'
					name='place'
					placeholder='Where was this?'
					value={this.state.place}
					onChange={this.handleChange}
					/>
					<Label>Photo: </Label>
					<Form.Input
					type='text'
					name='photo'
					placeholder='Link your photo'
					value={this.state.photo}
					onChange={this.handleChange}
					/>
					<Label>Post Story: </Label>
					<TextArea
					type='text'
					name='story'
					placeholder='Tell us more'
					spellCheck='true'
					className='form-control'
					required maxLength='40'
					value={this.state.story}
					onChange={this.handleChange}
					/>
					<Modal.Actions>
						<Button color={'blue'}>Creat Post!</Button>
					</Modal.Actions>
					</Form>
				</Modal.Content>
			</Modal>

		)
	}
}