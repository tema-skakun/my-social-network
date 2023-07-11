import style from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import {addPostAC, onPostChangeAC} from "../../../redux/profileReducer";

const MyPosts = (props) => {
	let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} key={p.id} /> );

	let addPost = () => {
		props.dispatch(addPostAC());
	}

	let onPostChange = (e) => {
		let text = e.target.value;
		props.dispatch(onPostChangeAC(text));
	}
	return (
		<div className={style.postsBlock}>
			<div>
				<h3>My posts</h3>
			</div>
			<div className={style.newPost}>
				<textarea
					placeholder='enter your post text...'
					onChange={onPostChange}
					value={props.newPostText}/>
			</div>
			<div className={style.newPost}>
				<button onClick={ addPost }>add post</button>
			</div>
			<div>
				New post
			</div>
			<div className={style.posts}>
				{ postsElements }
			</div>
		</div>
)
}

export default MyPosts;
