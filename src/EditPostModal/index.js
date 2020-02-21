import React from 'react'
import {Form, Button, Label, Modal, Header, TextArea} from 'semantic-ui-react'
import {Image, Transformation, CloudinaryContext} from 'cloudinary-react'

export default function EditPostModal (props) {
		return(
			<Modal closeIcon open={props.open} onClose={props.close}>
				<Header>Edit Post</Header>
				<Modal.Content>
					<Form onSubmit={props.handlEditSubmit}>
					<Label>Edit Title: </Label>
					<Form.Input
					type='text'
					name='title'
					value={props.postToEdit.title}
					onChange={props.handleEditChange}
					/>
					<Label>Edit Place You Went: </Label>
					<Form.Input
					type='text'
					name='place'
					value={props.postToEdit.place}
					onChange={props.handleEditChange}
					/>
					<Label>Edit Photo: </Label>
					<Form.Input
					type='text'
					name='photo'
					value={props.postToEdit.photo}
					onChange={props.handleEditChange}
					/>
					<Label>Edit Story: </Label>
					<TextArea
					type='text'
					name='story'
					spellCheck='true'
					className='form-control'
					required maxLength='40'
					value={props.postToEdit.story}
					onChange={props.handleEditChange}
					/>
					<Modal.Actions>
						<Button color={'blue'}>Edit Post!</Button>
					</Modal.Actions>
					</Form>
				</Modal.Content>
			</Modal>
	)
}