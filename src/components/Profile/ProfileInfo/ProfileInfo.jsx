import style from './ProfileInfo.module.css'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileAvatarWithHooks from "./ProfileAvatarWithHooks";
import ProfileDescription from "./ProfileDescription/ProfileDescription";

const ProfileInfo = ({profile, updateAvatar, status, updateStatus, isOwner}) => {
    return (
        <div className={style.main}>
            <ProfileAvatarWithHooks avatar={profile.photos.large} updateAvatar={updateAvatar} isOwner={isOwner}/>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner}/>
            <ProfileDescription profile={profile}/>
        </div>
    )
}

export default ProfileInfo;
