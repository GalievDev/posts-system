import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import PostsServices from '../services/PostsServices';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const PostUpdateComponent = () => {
	const [title, setTitle] = useState('')
	const [text, setText] = useState('')
	const [imgUrl, setImgUrl] = useState('')
	const history = useNavigate();
	const {id} = useParams();
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



	const saveOrUpdatePost = (e) => {
		e.preventDefault();

		const post = {title, text, imgUrl}

		if(id){
				PostsServices.updatePost(id, post).then((response) => {
						history('/all-posts')
				}).catch(error => {
						console.log(error)
				})

		}else{
				PostsServices.createPost(post).then((response) =>{

						console.log(response.data)

						handleClose()
						history('/all-posts')

				}).catch(error => {
						console.log(error)
				})
		}
		
}


	useEffect(() => {

		PostsServices.getPostById(id).then((response) =>{
			setTitle(response.data.title)
			setText(response.data.text)
			setImgUrl(response.data.imgUrl)
		}).catch(error => {
				console.log(error)
		})
}, [])

	const headTitle = () => {

		if(id){
				return <h2 className = "text-center">Update Post</h2>
		}else{
				return <h2 className = "text-center">Create Post</h2>
		}
}
	
	return (
		<div>
		<br /><br />
		<div className = "container">
				 <div className = "row">
						 <div className = "card col-md-6 offset-md-3 offset-md-3">
								{
										headTitle()
								}
								 <div className = "card-body">
										 <form>
												 <div className = "form-group mb-2">
														 <label className = "form-label"> Title:</label>
														 <input
																 type = "text"
																 placeholder = "Enter title"
																 name = "title"
																 className = "form-control"
																 value = {title}
																 onChange = {(e) => setTitle(e.target.value)}
														 >
														 </input>
												 </div>

												 <div className = "form-group mb-2">
														 <label className = "form-label"> Text:</label>
														 <input
																 type = "text"
																 placeholder = "Enter text"
																 name = "text"
																 className = "form-control"
																 value = {text}
																 onChange = {(e) => setText(e.target.value)}
														 >
														 </input>
												 </div>


												 <div className = "form-group mb-2">
														 <label className = "form-label"> Image Url:</label>
														 <input
																 type = "text"
																 placeholder = "Enter image url"
																 name = "imgUrl"
																 className = "form-control"
																 value = {imgUrl}
																 onChange = {(e) => setImgUrl(e.target.value)}
														 >
														 </input>
												 </div>
												 <button className = "btn btn-dark" onClick = {(e) => saveOrUpdatePost(e)} >Update </button>
												 <Link to="/posts" className="btn btn-dark"> Cancel </Link>
										 </form>
								 </div>
						 </div>
				 </div>
			</div>
		</div>
	)
}
export default PostUpdateComponent;