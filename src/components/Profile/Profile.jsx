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
			<div className={style.description}>
				<ProfileInfo propfile={props.profile}
							 status={props.status}
							 updateStatus={props.updateStatus}/>
			</div>
			<div className={style.posts}>
				<MyPostsContainer/>
			</div>
		</div>
	)
}

export default Profile;
