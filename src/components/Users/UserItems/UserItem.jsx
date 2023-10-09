import style from './UserItem.module.css'
import {NavLink} from "react-router-dom";
import {FOLLOW_BUTTON, PROFILE_PATH, UNFOLLOW_BUTTON} from "../../../data/constants";

const UserItem = (props) => {
    return (
        <div className={style.user}>
            <NavLink to={PROFILE_PATH + '/' + props.id}>
                <img src={props.photoUrl} alt={props.fullName}/>
            </NavLink>
            <div>
                <div>
                    {props.fullName}
                </div>
                <div>
                    {props.followed
                        ? <button
                            disabled={props.followingInProgress.some(id => id === props.id)}
                            onClick={() => {
                                props.unfollow(props.id);
                            }}>
                            {UNFOLLOW_BUTTON}
                        </button>
                        : <button
                            disabled={props.followingInProgress.some(id => id === props.id)}
                            onClick={() => {
                                props.follow(props.id);
                            }}>
                            {FOLLOW_BUTTON}
                        </button>}
                </div>
                <div>
                    {props.status}
                </div>
            </div>
        </div>
    )
}
export default UserItem;
