import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";
import style from "./Profile.module.css"

const Profile = ({profile, status, updateStatus, updateAvatar, isOwner}) => {
	if(!profile)
		return <Preloader/>
	return (
		<div className={style.profile}>
			<div className={style.description}>
				<ProfileInfo profile={profile}
							 status={status}
							 updateStatus={updateStatus}
							 updateAvatar={updateAvatar}
							 isOwner={isOwner}
				/>
			</div>
			<div className={style.posts}>
				<MyPostsContainer/>
			</div>
		</div>
	)
}

export default Profile;
