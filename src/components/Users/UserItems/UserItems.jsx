import style from './UserItems.module.css'

const UserItems = (props) => {
    return (
        <div className={style.user}>
            <img src={props.photoUrl} alt={props.fullName}/>
            <div>
                <div>
                    {props.fullName}
                </div>
                <div>
                    {props.followed
                    ? <button onClick={() => {
                        props.unfollow(props.id)
                    }}>unfollow</button>
                    : <button onClick={() => {
                        props.follow(props.id)
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
