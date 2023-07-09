import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from "react";

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<MyPosts
				posts={props.state.posts}
				dispatch={props.dispatch}
			/>
		</div>
	)
}

export default Profile;
