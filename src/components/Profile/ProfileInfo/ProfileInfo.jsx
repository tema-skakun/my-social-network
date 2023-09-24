import style from './ProfileInfo.module.css'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileAvatarWithHooks from "./ProfileAvatarWithHooks";

const ProfileInfo = ({profile, updateAvatar, status, updateStatus, isOwner}) => {
    return (
        <div className={style.main}>
            <ProfileAvatarWithHooks avatar={profile.photos.large} updateAvatar={updateAvatar} isOwner={isOwner}/>
            <div className={style.description}>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner}/>
                <div>{"name: " + profile.fullName}</div>
                <div>{"about me: " + profile.aboutMe}</div>
                <div>{"looking for a job: " + profile.lookingForAJobDescription}</div>
                <div>links</div>
                <div>{"facebook: " + profile.contacts.facebook}</div>
                <div>{"website: " + profile.contacts.website}</div>
                <div>{"github: " + profile.contacts.github}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;
