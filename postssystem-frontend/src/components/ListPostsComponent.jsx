import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import PostsServices from '../services/PostsServices';
import PostCreateComponent from './PostCreateComponent';

const ListPostsComponent = () => {

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

	const deletePost = (postId) => {
		PostsServices.deletePost(postId).then((response) =>{
			getAllPosts();
		}).catch(error =>{
				console.log(error);
		})
		 
 }


return (
	<div className = "container">
	<h2 className = "text-center"> List Posts </h2>
	<PostCreateComponent />
	<table className="table table-bordered table-striped">
			<thead>
					<th> Post Id </th>
					<th> Post Title </th>
					<th> Post Text </th>
					<th> Post Image URL </th>
					<th> Actions </th>
			</thead>
			<tbody>
					{
							posts.map(
									post =>
									<tr key = {post.id}> 
											<td> {post.id} </td>
											<td> {post.title} </td>
											<td>{post.text}</td>
											<td>{post.imgUrl}</td>
											<td>
													<Link className="btn btn-dark" to={`/edit-post/${post.id}`} >Update</Link>
													<button className = "btn btn-danger" onClick = {() => deletePost(post.id)}
													style = {{marginLeft:"10px"}}> Delete</button>
											</td>
									</tr>
							)
					}
			</tbody>
	</table>
	</div>
		);
}

export default ListPostsComponent;