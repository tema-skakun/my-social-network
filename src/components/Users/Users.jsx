import React from "react";
import UserItem from "./UserItems/UserItem";
import userImg from "../../assets/images/user.jpeg";
import style from "./Users.module.css";
import Pagination from "../common/Pagination/Pagination";

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

    return (
        <div className={style.users}>
            <Pagination
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
            />
            Users
            {usersElement}
        </div>
    )
}

export default Users;
