import React from "react";
import userImg from "../../../assets/images/user.jpeg";
import style from "./ProfileInfo.module.css";

export default class ProfileAvatar extends React.Component {

    state = {
        editMode: false,
        avatar: this.props.avatar
    }

    activateEditMode = () => {
        this.setState(
            {
                editMode: true,
            }
        )
    }
    deactivateEditMode = () => {
        this.setState(
            {
                editMode: false,
            }
        );
        this.props.updateAvatar(this.state.avatar);
    }


    onAvatarChange = (e) => {
        this.setState({
            avatar: e.target.files[0],
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.avatar !== this.props.avatar) {
            this.setState({
                avatar: this.props.avatar,
            });
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div className={style.avatar}>
                        <img onDoubleClick={this.activateEditMode}
                             src={this.props.avatar || userImg}
                             alt={'avatar'}
                        />
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input type="file"
                               onChange={this.onAvatarChange}
                               accept="/image/*,.png,.jpeg,.jpg,.gif,.web"
                               onBlur={this.deactivateEditMode}
                        />
                    </div>
                }
            </div>
        )
    }
}
