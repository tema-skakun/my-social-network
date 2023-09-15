import React from "react";
import UserItem from "./UserItems/UserItem";
import userImg from "../../assets/images/user.jpeg";
import style from "./Users.module.css";

let Users = ({
                 usersPage, follow, unfollow,
                 toggleFollowingProgress, followingInProgress,
                 totalUsersCount, pageSize, currentPage, onPageChanged
             }) => {
    let usersElement = usersPage.users.map(u =>
        <UserItem
            id={u.id}
            fullName={u.name}
            followed={u.followed}
            status={u.status}
            photoUrl={u.photos.small ? u.photos.small : userImg}
            follow={follow}
            unfollow={unfollow}
            toggleFollowingProgress={toggleFollowingProgress}
            followingInProgress={followingInProgress}
            key={u.id}
        />)

    let pageCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; ++i) {
        pages.push(i);
    }

    return (
        <div className={style.users}>
            <div>
                {pages.map(p => {
                    return <span key={p}
                                 className={currentPage === p ? style.selectedPage : style.notSelectedPage}
                                 onClick={(e) => {
                                     onPageChanged(p);
                                 }}>{p}
                    </span>
                })}
            </div>
            Users
            {usersElement}
        </div>
    )
}

export default Users;
