import style from './UserItems.module.css'
import {NavLink} from "react-router-dom";
import axios from "axios";

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
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                                {
                                    withCredentials: true,
                                    header: {"API-KEY": "9255c4a4-776e-460a-8548-63eec6171ae7"}
                                })
                                .then(response => {
                                    if (response.data.resultCode === 0)
                                        props.unfollow(props.id)
                                })
                        }}>unfollow</button>
                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {},
                                {
                                    withCredentials: true,
                                    header: {"API-KEY": "9255c4a4-776e-460a-8548-63eec6171ae7"}
                                })
                                .then(response => {
                                    if (response.data.resultCode === 0)
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
