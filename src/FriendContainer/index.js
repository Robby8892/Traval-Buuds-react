import React, { Component } from 'react'
import { List, Label, Tab } from 'semantic-ui-react'

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
		}

	}

	componentDidMount() {
		this.getMyFriends()
	}
	render(){
		
		return(
			<Tab.Pane key='tab4'>
			<p>My Friends</p>
			<List>
				{this.state.friends.map(({id, my_friends, status_of_request})=>{
					if(status_of_request === 'accept'){
						return <List.Item key={id}>{my_friends.username}</List.Item>		
					}
					
				})}
				
				
			</List>
			</Tab.Pane>
			)
	}
}