import style from './Friends.module.css'
import Friend from "./Friend/Friend";

const Friends = (props) => {
    let friendsElements = props.sidebarPage.friends.map(f => <Friend name={f.name} avatarLink={f.avatarLink}/>);

    return (
        <div className={style.friends}>
            My friends
            <div>
                {friendsElements}
            </div>
        </div>

    )
}
export default Friends;
