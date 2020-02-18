import React from 'react'
import { Grid, Image} from 'semantic-ui-react'
import './index.css'

export default function PostList(props) {
	console.log(props.posts);

	return(
		<div>
			{props.posts.map(({id, title, photo, place, story, created_at}) => {
				return <Grid centered celled key={id}>
							<Grid.Row>
								<Grid.Column width={3}>
									<h2>{title}</h2>
									<Image className='post-photo' src={photo}/>
									<span>{place}</span>
									<p>{story}</p>
									<small>Posted: {created_at}</small>
								</Grid.Column>
							</Grid.Row>
						</Grid>
			})}
		</div>
	)
}