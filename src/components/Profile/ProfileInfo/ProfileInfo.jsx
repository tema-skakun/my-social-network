import style from './ProfileInfo.module.css'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileAvatarWithHooks from "./ProfileAvatarWithHooks";
import ProfileDescription from "./ProfileDescription/ProfileDescription";
import {useState} from "react";
import ProfileDescriptionForm from "./ProfileDescriptionForm/ProfileDescriptionForm";
import {connect} from "react-redux";
import {updateProfile} from "../../../redux/profileReducer";

const ProfileInfo = ({profile, updateAvatar, status, updateStatus, isOwner, updateProfile}) => {

    const [editMode, setEditMode] = useState(false);

    const onSubmit = (formData) => {
        console.log(formData);
        updateProfile(formData.aboutMe,
            formData.fullName,
            formData.lookingForAJob,
            formData.lookingForAJobDescription)
    }

    return (
        <div className={style.main}>
            <ProfileAvatarWithHooks avatar={profile.photos.large} updateAvatar={updateAvatar} isOwner={isOwner}/>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner}/>
            {editMode
                ? <ProfileDescriptionForm
                    onSubmit={onSubmit}
                    profile={profile}/>
                : <ProfileDescription
                    profile={profile}
                    isOwner={isOwner}
                    startEdit={() => {
                        setEditMode(true)
                    }}/>
            }
        </div>
    )
}

const mapStateToProps = (state) => ({state});

export default connect(mapStateToProps, {updateProfile})(ProfileInfo);
