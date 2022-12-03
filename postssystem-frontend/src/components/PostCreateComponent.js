import React, {useState, useEffect} from 'react'
import {useNavigate, useParams } from 'react-router-dom';
import PostsServices from '../services/PostsServices';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const PostCreateComponent = () => {
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
			 <div className = "container">
			 <span className="row"><Button variant='dark' onClick={handleShow}> Create Post</Button> </span>
					<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
						{
							headTitle()
						}
					</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Post Title:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter post title..."
								name='title'
								value={title}
								onChange = {(e) => setTitle(e.target.value)}
                autoFocus
              />
            </Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Post Test:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter post text..."
								name='text'
								value={text}
								onChange = {(e) => setText(e.target.value)}
                autoFocus
              />
							</Form.Group>
							<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Post Image URL:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter post image url..."
								name='imgUrl'
								value={imgUrl}
								onChange = {(e) => setImgUrl(e.target.value)}
                autoFocus
              />
							</Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick = {(e) => saveOrUpdatePost(e)}>
						Add/Update
          </Button>
        </Modal.Footer>
      </Modal>
		</div>
)
}

export default PostCreateComponent;