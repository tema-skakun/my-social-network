const UserItems = (props) => {
    return (
        <div>
            {props.fullName}
            {props.followed}
        </div>
    )
}

export default UserItems;