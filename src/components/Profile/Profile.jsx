import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import style from './Profile.module.css';
import React from "react";


const Profile = (props) => {

	let newPostElement = React.createRef();

	let addPost = () => {
		let text = newPostElement.current.value;
		alert(text);
	}

	return (
		<div>
			<ProfileInfo />
			<div className={style.newPost}>
				<textarea ref = {newPostElement}></textarea>
			</div>
			<div className={style.newPost}>
				<button onClick={ addPost }>Add post</button>
			</div>
			<div>
				<MyPosts posts={props.state.posts} />
			</div>
		</div>
	)
}

export default Profile;
