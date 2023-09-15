import style from './ProfileInfo.module.css'
import ProfileAvatar from "./ProfileAvatar";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, updateAvatar, status, updateStatus}) => {
    return (
        <div className={style.main}>
            <ProfileAvatar avatar={profile.photos.large} updateAvatar={updateAvatar}/>
            <div className={style.description}>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
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
