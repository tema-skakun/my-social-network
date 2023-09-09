import React, {useState} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({
    //             status: this.props.status,
    //         });
    //     }
    // }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>status: {props.status || "-----"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <span>status: </span>
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