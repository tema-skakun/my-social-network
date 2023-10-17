import {FC, useState} from "react";
import style from './ProfileInfo.module.css'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks.tsx";
import ProfileAvatarWithHooks from "./ProfileAvatarWithHooks.tsx";
import ProfileDescription from "./ProfileDescription/ProfileDescription";
import {ProfileDescriptionReduxForm} from "./ProfileDescriptionForm/ProfileDescriptionForm.tsx";
import {ProfileType} from "../../../types/types";

type PropsType = {
    profile: ProfileType
    status: string
    updateAvatar: (photos: any) => void
    updateStatus: (status: string) => void
    updateProfile: (profile: ProfileType) => any
    isOwner: boolean
}

const ProfileInfo: FC<PropsType> = ({
                                        profile,
                                        updateAvatar,
                                        status,
                                        updateStatus,
                                        isOwner,
                                        updateProfile
                                    }) => {

    const [editMode, setEditMode] = useState(false);

    const onSubmit = (formData: any) => {
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
                ? <ProfileDescriptionReduxForm
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
