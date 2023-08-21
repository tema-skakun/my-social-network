import style from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus"
import ProfileAvatar from "./ProfileAvatar";

const ProfileInfo = (props) => {
    return (
        <div className={style.main}>
            <ProfileAvatar avatar={props.propfile.photos.large} updateAvatar={props.updateAvatar}/>
            <div className={style.description}>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div>{"name: " + props.propfile.fullName}</div>
                <div>{"about me: " + props.propfile.aboutMe}</div>
                <div>{"looking for a job: " + props.propfile.lookingForAJobDescription}</div>
                <div>links</div>
                <div>{"facebook: " + props.propfile.contacts.facebook}</div>
                <div>{"website: " + props.propfile.contacts.website}</div>
                <div>{"github: " + props.propfile.contacts.github}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;
