import React, { Component } from 'react'
import FriendRequestList from '../FriendRequestList'


export default class FriendRequestContainer extends Component {
	constructor(props){
		super()
		this.state = {
			myRequests: [],
			idOfRequestToUpdate: -1,
			requestToUpdate: {
				status_of_request: ''
			}

		}
	}

	updateStateBeforeRequest = async (id, status) => {

	const updateState = await this.setState({
			idOfRequestToUpdate: id,
			requestToUpdate: {
				status_of_request: status
			}
		})	

		console.log(status);
	}



	updateRequestSentToMe = async () => {



		const updateRequestResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/friends/friend_request/' + this.state.idOfRequestToUpdate , {
			credentials: 'include',
			method: 'PUT',
			body: JSON.stringify(this.state.requestToUpdate),
			headers: {
				'Content-Type': 'application/json'
			}
		})

		const updateRequestJson = await updateRequestResponse.json()

		console.log(updateRequestJson);


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
		console.log(this.state.requestToUpdate.status_of_request);
		return(

			<React.Fragment>
			<FriendRequestList 
			myRequests={this.state.myRequests}
			onClickRequest={this.onClickRequest}
			updateStateBeforeRequest={this.updateStateBeforeRequest}
			status_of_request={this.status_of_request}
			/>
			</React.Fragment>
		)
	}
}