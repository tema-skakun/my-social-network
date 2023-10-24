import {FC, useState} from "react";
import userImg from "../../../assets/images/user.jpeg";
import style from "./ProfileInfo.module.css";
import {AVATAR_ALT} from "../../../data/constants.ts";

type PropsType = {
    avatar: string
    updateAvatar: (photoFile: any) => void
    isOwner: boolean
}

const ProfileAvatarWithHooks: FC<PropsType> = ({isOwner, updateAvatar, avatar}) => {

    const [editMode, setEditMode] = useState(false);

    const activateEditMode = () => {
        if (isOwner)
            setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
    };
    const onAvatarChange = (e: any) => {
        if (e.target.files.length)
            updateAvatar(e.target.files[0]);
        deactivateEditMode();
    }

    return (
        <div>
            {!editMode &&
                <div className={style.avatar}>
                    <img onDoubleClick={activateEditMode}
                         src={avatar || userImg}
                         alt={AVATAR_ALT}
                    />
                </div>
            }
            {editMode &&
                <div>
                    <input type="file"
                           onChange={onAvatarChange}
                           accept="/image/*,.png,.jpeg,.jpg,.gif,.web"
                    />
                </div>
            }
        </div>
    )
}

export default ProfileAvatarWithHooks;
