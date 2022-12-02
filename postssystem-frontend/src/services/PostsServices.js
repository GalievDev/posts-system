import axios from 'axios';

const POSTS_DEFAULT_URL = "http://localhost:8080/api/v1/posts";

class PostsServices{
	getPosts(){
		return axios.get(POSTS_DEFAULT_URL);
	}

	createPost(post){
		return axios.post(POSTS_DEFAULT_URL, post);
	}

	getPostById(postId){
		return axios.get(POSTS_DEFAULT_URL + '/' + postId);
	}

	updatePost(post, postId){
		return axios.put(POSTS_DEFAULT_URL + '/' + post, postId);
	}

	deletePost(postId){
		return axios.delete(POSTS_DEFAULT_URL + '/' + postId);
	}
}

export default new PostsServices()