import {FC, useState} from "react";
import style from './ProfileInfo.module.css'
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks.tsx";
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar.tsx";
import ProfileDescription from "./ProfileDescription/ProfileDescription.tsx";
import {ProfileDescriptionReduxForm} from "./ProfileDescriptionForm/ProfileDescriptionForm.tsx";
import {ProfileType} from "../../../types/types";

type PropsType = {
    profile: ProfileType
    status: string
    isOwner: boolean
    updateStatus: (status: string) => void
    updateProfile: (profile: ProfileType) => any
    updateAvatar: (photos: any) => void
}

const ProfileInfo: FC<PropsType> = ({
                                        profile,
                                        status,
                                        isOwner,
                                        updateStatus,
                                        updateProfile,
                                        updateAvatar,
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
            <ProfileAvatar avatar={profile.photos.large} updateAvatar={updateAvatar} isOwner={isOwner}/>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner}/>
            {editMode
                ? <ProfileDescriptionReduxForm
                    initialValues={profile}
                    contacts={profile.contacts}
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
