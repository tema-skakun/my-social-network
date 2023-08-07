import style from './UserItems.module.css'
import {NavLink} from "react-router-dom";
import {UsersAPI} from "../../../api/api";

const UserItems = (props) => {
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
                        ? <button onClick={() => {
                            UsersAPI.unfollow(props.id)
                                .then(response => {
                                            if (response.resultCode === 0)
                                                props.unfollow(props.id)
                                        })
                        }}>unfollow</button>
                        : <button onClick={() => {
                            UsersAPI.follow(props.id)
                                .then(response => {
                                    if (response.resultCode === 0)
                                        props.follow(props.id);
                                })
                        }}>follow</button>}
                </div>
                <div>
                    {props.status}
                </div>
                <div>
                    {'props.location.country'}
                </div>
            </div>
        </div>
    )
}

export default UserItems;
