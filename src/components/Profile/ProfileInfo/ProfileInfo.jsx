import style from './ProfileInfo.module.css'
import userImg from "../../../assets/images/user.jpeg";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
    return (
        <div className={style.main}>
            {/*<div className={style.background}>*/}
            {/*    <img*/}
            {/*        src='https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/main_image_star-forming_region_carina_nircam_final-1280.jpg'*/}
            {/*        alt='profile background'*/}
            {/*    />*/}
            {/*</div>*/}
            <div className={style.avatar}>
                <img src={props.propfile.photos.large ? props.propfile.photos.large : userImg} alt={'avatar'}/>
            </div>
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
