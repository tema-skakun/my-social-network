import ProfileInfo from './ProfileInfo/ProfileInfo.tsx';
import {FC} from "react";
import Preloader from "../common/Preloader/Preloader";
import style from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts.tsx";
import {PostsType, ProfileType} from "../../types/types";

type PropsType = {
    profile: ProfileType
    posts: Array<PostsType>
    updateAvatar: (photos: any) => void
    addPost: (newPostBody: string) => void
    status: string
    updateStatus: (status: string) => void
    updateProfile: (profile: ProfileType) => void
    isOwner: boolean
    userId?: number | string// ???
    authorizedUserId?: number
    isAuth?: boolean
    getUserProfile?: (userId: number | string) => void
    getStatus?: (userId: number | string) => void
}

const Profile: FC<PropsType> = ({
                                    profile,
                                    status,
                                    updateStatus,
                                    updateAvatar,
                                    isOwner,
                                    updateProfile,
                                    addPost,
                                    posts
                                }) => {
    if (!profile)
        return <Preloader/>
    return (
        <div className={style.profile}>
            <div className={style.info}>
                <ProfileInfo profile={profile}
                             status={status}
                             updateStatus={updateStatus}
                             updateAvatar={updateAvatar}
                             updateProfile={updateProfile}
                             isOwner={isOwner}
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
