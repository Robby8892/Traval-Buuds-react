import React from 'react'
import { List, Label, Tab, Button } from 'semantic-ui-react'

export default function FriendList(props){

	return(
			<Tab.Pane key='tab4'>
			<p>My Friends</p>
			<List>
				{props.friends.map(({id, my_friends, status_of_request})=>{
					if(status_of_request === 'accept'){
						return <List.Item key={id}>{my_friends.username}</List.Item>		
					}
					
				})}	
				
			</List>
			</Tab.Pane>
		)
}