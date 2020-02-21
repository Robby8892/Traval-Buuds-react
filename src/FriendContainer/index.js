import React, { Component } from 'react'
import FriendList from '../FriendList'
import { List, Label, Tab, Button } from 'semantic-ui-react'

export default class FriendContainer extends Component {
	constructor(props){
		super(props)

		this.state = {
			friends: []
		}
	}



	getMyFriends = async () => {
		const friendsResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/friends/', {
			credentials: 'include',
			method: 'GET'
		})

		const friendsJson = await friendsResponse.json()

		if(friendsResponse.status === 200) {
			this.setState({friends: friendsJson.data})
		} else {

		}

	}

	componentDidMount() {
		this.getMyFriends()
	}
	render(){
		
		return(
			<React.Fragment>
			<FriendList friends={this.state.friends}/>
			</React.Fragment>
			)
	}
}