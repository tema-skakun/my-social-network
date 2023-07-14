const UserItems = (props) => {
    return (
        <div>
            <img src={props.photoUrl} alt={props.fullName}/>
            <div>
                {props.fullName}
                {props.followed
                    ? <button onClick={() => {
                        props.unfollow(props.id)
                    }}>unfollow</button>
                    : <button onClick={() => {
                        props.follow(props.id)
                    }}>follow</button>
                }
            </div>

        </div>
    )
}

export default UserItems;