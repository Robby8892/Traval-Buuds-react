import React, { Component } from 'react'
import FriendRequestList from '../FriendRequestList'


export default class FriendRequestContainer extends Component {
	constructor(props){
		super()
		this.state = {
			myRequests: [],
			requestToUpdate: {
				status_of_request: ''
			}

		}
	}



	updateRequestSentToMe = async (id, status_of_request) => {
		this.setState({
			requestToUpdate: {
				...status_of_request
			}
		})


		const updateRequestResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/friends/friend_request/' + id , {
			credentials: 'include',
			method: 'PUT',
			body: JSON.stringify(this.state.requestToUpdate),
			headers: {
				'Content-Type': 'application/json'
			}
		})

		const updateRequestJson = updateRequestResponse.json()


	}


	componentDidMount(){
		this.getRequestsSentToMe()
	}

	getRequestsSentToMe = async () => {

		const myRequestsResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/friends/friend_request/id', {
			credentials: 'include',
			method: 'GET'
		})

		const myRequsestJson = await myRequestsResponse.json()

		if(myRequestsResponse.status === 200){
			this.setState({myRequests: myRequsestJson.data})
		}
		}

	render(){
		console.log(this.state);
		return(

			<React.Fragment>
			<FriendRequestList 
			myRequests={this.state.myRequests}
			onClickRequest={this.onClickRequest}
			updateRequestSentToMe={this.updateRequestSentToMe}
			status_of_request={this.status_of_request}
			/>
			</React.Fragment>
		)
	}
}