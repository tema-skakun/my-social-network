import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/preloader/Preloader";
import style from "./Profile.module.css"

const Profile = (props) => {
	if(!props.profile)
		return <Preloader/>
	return (
		<div className={style.profile}>
			<ProfileInfo propfile={props.profile}/>
			<MyPostsContainer/>
		</div>
	)
}

export default Profile;
