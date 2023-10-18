import {FC, useEffect, useState} from "react";
import style from "./ProfileInfo.module.css";
import {STATUS_ALT} from "../../../data/constants.ts";

type PropsType = {
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
}

const ProfileStatusWithHooks: FC<PropsType> = ({status, isOwner, updateStatus}) => {

    const [editMode, setEditMode] = useState(false);
    const [statusState, setStatus] = useState(status);

    useEffect(() => {
        setStatus(status);
    }, [status]);

    const activateEditMode = () => {
        if (isOwner)
            setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(statusState);
    };

    const onStatusChange = (e: any) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div className={style.status}>
            {!editMode &&
                <div>
                    <b>Status: </b>
                    <span onDoubleClick={activateEditMode}>{status || STATUS_ALT}</span>
                </div>
            }
            {editMode &&
                <div>
                    <b>Status: </b>
                    <input onChange={onStatusChange}
                           autoFocus={true}
                           onBlur={deactivateEditMode}
                           value={statusState}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;
