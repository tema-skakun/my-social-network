import style from './UserItem.module.css'
import {NavLink} from "react-router-dom";

const UserItem = (props) => {
    return (
        <div className={style.user}>
            <NavLink to={'/profile/' + props.id}>
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
                            unfollow
                        </button>
                        : <button
                            disabled={props.followingInProgress.some(id => id === props.id)}
                            onClick={() => {
                                props.follow(props.id);
                            }}>
                            follow
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
