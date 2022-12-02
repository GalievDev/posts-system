import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import PostsServices from "../services/PostsServices";
import PostCreateComponent from './PostCreateComponent';


const AllPostsComponent = () => {

	const [posts, setPosts] = useState([])

	useEffect(() => {

		getAllPosts();
	}, [])

	const getAllPosts = () => {
		PostsServices.getPosts().then((responce) => {
			setPosts(responce.data)
			console.log(responce.data);
		}).catch (error =>{
			console.log(error);
		})
	}
	return(
				<div className="container">
					<PostCreateComponent />
					{
					posts.map(
						post =>
					<Card border="dark" style={{ width: '40rem' }} class="card">
					<Card.Img variant="top" src="holder.js/470px590" src={post.imgUrl}/>
					<Card.Body>
						<Card.Title>{post.title}</Card.Title>
						<Card.Text>
							{post.text}
						</Card.Text>
					</Card.Body>
				</Card>
				)
				}
			</div>
	);
}

export default AllPostsComponent;