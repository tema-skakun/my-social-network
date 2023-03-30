import style from './Friends.module.css'
import Friend from "./Friend/Friend";
import Post from "../Profile/MyPosts/Post/Post";

const Friends = (props) => {
    let friendsElements
        = props.state.friends.map( f=> <Friend
        name={f.name}
        avatarLink={f.avatarLink}/> );
    return (
        <div className={style.item}>
            <div className={style.header}>
                My friends
            </div>
            { friendsElements }
        </div>

    )
}
export default Friends;
