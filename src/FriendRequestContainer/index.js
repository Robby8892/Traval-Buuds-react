import React, { Component } from 'react'
import FriendRequestList from '../FriendRequestList'


export default class FriendRequestContainer extends Component {
	constructor(props){
		super()
		this.state = {
			myRequests: []
		}
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
			<FriendRequestList/>
			</React.Fragment>
		)
	}
}