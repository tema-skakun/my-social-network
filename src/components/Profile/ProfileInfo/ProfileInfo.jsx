import style from './ProfileInfo.module.css'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileAvatarWithHooks from "./ProfileAvatarWithHooks";
import ProfileDescription from "./ProfileDescription/ProfileDescription";
import {useState} from "react";
import ProfileDescriptionForm from "./ProfileDescriptionForm/ProfileDescriptionForm";

const ProfileInfo = ({profile, updateAvatar, status, updateStatus, isOwner, updateProfile}) => {

    const [editMode, setEditMode] = useState(false);

    const onSubmit = (formData) => {
        updateProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div className={style.main}>
            <ProfileAvatarWithHooks avatar={profile.photos.large} updateAvatar={updateAvatar} isOwner={isOwner}/>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner}/>
            {editMode
                ? <ProfileDescriptionForm
                    initialValues={profile}
                    profile={profile}
                    onSubmit={onSubmit}/>
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

export default ProfileInfo;
