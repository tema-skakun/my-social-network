import ProfileInfo from './ProfileInfo/ProfileInfo.tsx';
import {FC} from "react";
import Preloader from "../common/Preloader/Preloader.tsx";
import style from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts.tsx";
import {PostsType, ProfileType} from "../../types/types";

type PropsType = {
    profile: ProfileType
    posts: Array<PostsType>
    status: string
    isOwner: boolean
    addPost: (newPostBody: string) => void
    updateStatus: (status: string) => void
    updateProfile: (profile: ProfileType) => void
    updateAvatar: (photos: any) => void
}

const Profile: FC<PropsType> = ({
                                    profile,
                                    posts,
                                    status,
                                    isOwner,
                                    addPost,
                                    updateStatus,
                                    updateProfile,
                                    updateAvatar,
                                }) => {
    if (!profile)
        return <Preloader/>
    return (
        <div className={style.profile}>
            <div className={style.info}>
                <ProfileInfo profile={profile}
                             status={status}
                             isOwner={isOwner}
                             updateStatus={updateStatus}
                             updateProfile={updateProfile}
                             updateAvatar={updateAvatar}
                />
            </div>
            <div className={style.posts}>
                <MyPosts
                    posts={posts}
                    addPost={addPost}
                />
            </div>
        </div>
    )
}

export default Profile;
