import React, { Component } from 'react'
import PostList from '../PostList'
import PostCreateModal from '../PostCreateModal'
import EditPostModal from '../EditPostModal'
import { Header, Image, List, Grid} from 'semantic-ui-react'

export default class PostContainer extends Component {
	constructor(props){
		super(props)

		this.state = {
			getPosts: false,
			posts: [],
			createModalOpen: false,
			editModalOpen: false,
			postToEdit: {
				title: '',
				post: '',
				photo: '',
				story: ''
			},
			idOfUser: this.props.idOfUser
		}
	}

	home = () => {
		this.setState({
			getPosts: false,
			posts: []
		})
	}

	openCreateModal = () => {

		this.setState({
			createModalOpen: true
		})
	}

	closeCreateModal = () => {
		this.setState({
			createModalOpen: false
		})
	}

	// openEditModal = () => {
	// 	this.setState({
	// 		editModalOpen: true
	// 	})
	// }

	closeEditModal = () => {
		this.setState({
			editModalOpen: false
		})
	}

	editPost = (idOfPostToEdit) => {
		
		const postToEdit = this.state.posts.find((post) => post.id === idOfPostToEdit)

		this.setState({
			editModalOpen: true,
			postToEdit: {
				...postToEdit
			}
		})
	}

	deletePost = async (idOfPostToDelete) => {
		try{
			const deletePostRespone = await fetch(process.env.REACT_APP_API_URL + '/api/v1/posts/' + idOfPostToDelete, {
				method: 'DELETE',
				credentials: 'include', 
				body: JSON.stringify(idOfPostToDelete),
				headers: {
					'Content-Type': 'application/json'
				}
			})

			const deletePostJson = await deletePostRespone.json()

			if(deletePostRespone.status === 200){
				this.setState({posts: this.state.posts.filter(post => post.id !== idOfPostToDelete)
				})
			}

		}catch(err){
			console.log(err);
		}
	}

	createPost = async (newPost) => {
		try{

			const createResonse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/posts/', {
				method:'POST',
				credentials: 'include',
				body: JSON.stringify(newPost),
				headers: {
					'Content-Type': 'application/json'
				}
			})

			const createJson = await createResonse.json()

			if (createResonse.status === 201){

				this.closeCreateModal()
			}

		}catch(err){
			console.log(err);
		}
	}

	getMyPosts = async () => {
		
		try{

			this.setState({posts: [], getPosts: false})

			const postsReponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/posts/', {
				credentials: 'include'
			})
			
			const postsJson = await postsReponse.json()

			if(postsReponse.status === 200) {
				this.setState({
					posts: postsJson.data,
					getPosts: true
				})
			}

		}catch(err){
			console.log(err);
		}
	}

	getOtherUsersPosts = async () => {
		try{

			this.setState({posts: [], getPosts: false})

			const postsReponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/posts/other_users', {
				'credentials': 'include'
			})

			const postsJson = await postsReponse.json()

			if(postsReponse.status === 200){
				this.setState({
					posts: postsJson.data, 
					getPosts: true
				})
			}

		}catch(err){
			console.log(err);
		}
	}


	render(){
		console.log(this.state);
		return(
			<React.Fragment>
			<Header >
				<Image circular src='data:image/png;base64,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' /> Home Page
				<List link>
				<List.Item onClick={this.home} as='a'>Home</List.Item>
				<List.Item onClick={this.getMyPosts} as='a'>My Posts</List.Item>
				<List.Item onClick={this.getOtherUsersPosts} as='a'>Posts of Buuds</List.Item>
				<List.Item onClick={this.openCreateModal} as='a'>Create Post</List.Item>
				<List.Item as='a'>Edit Profile</List.Item>
				</List>
			</Header>

			{this.state.getPosts === false ? 
				null
				:
				<PostList posts={this.state.posts}
				deletePost={this.deletePost}
				idOfUser={this.state.idOfUser}
				editPost={this.editPost}
				/>
			}
			<PostCreateModal 
			open={this.state.createModalOpen} 
			close={this.closeCreateModal}
			createPost={this.createPost}
			/>
			<EditPostModal
			open={this.state.editModalOpen}
			close={this.closeEditModal}

			/>
			</React.Fragment>
	)
	}
}