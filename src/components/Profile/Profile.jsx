import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import style from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = ({profilePage, status, updateStatus, updateAvatar, isOwner, updateProfile, addPost}) => {
	if(!profilePage.profile)
		return <Preloader/>
	return (
		<div className={style.profile}>
			<div className={style.info}>
				<ProfileInfo profile={profilePage.profile}
							 status={status}
							 updateStatus={updateStatus}
							 updateAvatar={updateAvatar}
							 updateProfile={updateProfile}
							 isOwner={isOwner}
				/>
			</div>
			<div className={style.posts}>
				<MyPosts profilePage={profilePage}
						 addPost={addPost}
				/>
			</div>
		</div>
	)
}

export default Profile;
