import React from "react";
import UserItems from "./UserItems/UserItems";
import userImg from "../../assets/images/user.jpeg";
import style from "./Users.module.css";

let Users = (props) => {
    let usersElement = props.usersPage.users.map(u =>
        <UserItems
            id={u.id}
            fullName={u.name}
            followed={u.followed}
            status={u.status}
            photoUrl={u.photos.small ? u.photos.small : userImg}
            location={'u.location'}
            follow={props.follow}
            unfollow={props.unfollow}
            toggleFollowingProgress={props.toggleFollowingProgress}
            followingInProgress={props.followingInProgress}
            key={u.id}
        />)

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; ++i)
        pages.push(i);

    return (
        <div className={style.users}>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && style.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(p);
                                 }}>{p}</span>
                })}
            </div>
            Users
            {usersElement}
        </div>
    )
}

export default Users;
