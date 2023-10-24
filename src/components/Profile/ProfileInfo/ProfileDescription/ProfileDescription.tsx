import style from "../ProfileInfo.module.css";
import Contact from "../Contact/Contact.tsx";
import {
    ABOUT_ME_TITLE,
    CONTACTS_TITLE,
    EDIT_BUTTON,
    LOOKING_JOB_TITLE,
    NAME_TITLE,
    NO,
    PROFESSION_SKILLS_TITLE,
    YES
} from "../../../../data/constants.ts";
import {Button} from "antd";
import {ProfileType} from "../../../../types/types";
import {FC} from "react";

type PropsType = {
    profile: ProfileType
    isOwner: boolean
    startEdit: (photos: any) => void
}

const ProfileDescription: FC<PropsType> = ({profile, startEdit, isOwner}) => {
    return (
        <div className={style.description}>
            {isOwner && <div><Button onClick={startEdit}>{EDIT_BUTTON}</Button></div>}
            <div>
                <b>{NAME_TITLE}</b>{profile.fullName}
            </div>
            <div>
                <b>{LOOKING_JOB_TITLE}</b>{profile.lookingForAJob ? YES : NO}
            </div>
            {profile.lookingForAJob &&
                <div>
                    <b>{PROFESSION_SKILLS_TITLE}</b>{profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>{ABOUT_ME_TITLE}</b>{profile.aboutMe}
            </div>
            <div>
                <b>{CONTACTS_TITLE}</b> {Object.keys(profile.contacts).map(key => {
                return <Contact
                    key={key}
                    contactTitle={key}
                    contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
}

export default ProfileDescription;
