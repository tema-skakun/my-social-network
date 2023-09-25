import React, {useEffect, useState} from "react";
import style from "./ProfileInfo.module.css";

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        if (props.isOwner)
            setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div className={style.status}>
            {!editMode &&
                <div>
                    <b>Status: </b>
                    <span onDoubleClick={activateEditMode}>{props.status || "-----"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <b>Status: </b>
                    <input onChange={onStatusChange}
                           autoFocus={true}
                           onBlur={deactivateEditMode}
                           value={status}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;
