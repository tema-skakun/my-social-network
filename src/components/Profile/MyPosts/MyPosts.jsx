import style from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";

const MyPosts = (props) => {
	let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} key={p.id} /> );
	let newPostElement = React.createRef();
	let addPost = () => {
		props.dispatch({type: 'ADD-POST'});
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		let action = {type: 'UPDATE-NEW-POST-TEXT', postText: text};
		props.dispatch(action);
	}

	return (
		<div className={style.postsBlock}>
			<div>
				<h3>My posts</h3>
			</div>
			<div className={style.newPost}>
				<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
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
