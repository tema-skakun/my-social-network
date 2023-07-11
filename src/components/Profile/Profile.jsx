import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<MyPostsContainer
				state={props.state}
				dispatch={props.dispatch}
			/>
		</div>
	)
}

export default Profile;
