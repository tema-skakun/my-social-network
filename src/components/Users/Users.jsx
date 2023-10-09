import React from "react";
import UserItem from "./UserItems/UserItem";
import userImg from "../../assets/images/user.jpeg";
import style from "./Users.module.css";
import {Pagination} from 'antd';
import Preloader from "../common/Preloader/Preloader";

const Users = ({
                 usersPage, follow, unfollow, isFetching,
                 toggleFollowingProgress, followingInProgress,
                 totalUsersCount, pageSize, currentPage, onPageChanged
             }) => {
    const usersElement = usersPage.users.map(u =>
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
                total={totalUsersCount}
                current={currentPage}
                onChange={onPageChanged}
                onShowSizeChange={onPageChanged}
                pageSize={pageSize}
                pageSizeOptions={[5, 10, 20, 50, 100]}
            />
            {isFetching ? <Preloader/> : null}
            {usersElement}
        </div>
    )
}
export default Users;
