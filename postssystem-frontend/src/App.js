import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ListPostsComponent from './components/ListPostsComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import PostCreateComponent from './components/PostCreateComponent';
import AllPostsComponent from './components/AllPostsComponent';

function App() {
  return (
		<div>
			<Router>
				<HeaderComponent />
				<div className="container">
					<Routes>
						<Route path='/' element = {<ListPostsComponent/>} />
						<Route path='/posts' element = {<ListPostsComponent/>} />
						<Route path='/create-post' element = {<PostCreateComponent/>} />
						<Route path = "/edit-post/:id" element = {<PostCreateComponent/>} />
						<Route path = "/all-posts" element = {<AllPostsComponent/>} />
					</Routes>
				</div>
				<FooterComponent />
			</Router>
		</div>
  );
}

export default App;
