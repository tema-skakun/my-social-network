import UserItem from "./UserItems/UserItem";
import userImg from "../../assets/images/user.jpeg";
import style from "./Users.module.css";
import {Pagination} from 'antd';
import Preloader from "../common/Preloader/Preloader";
import {UsersType} from "../../types/types";
import {FC} from "react";

type PropsType = {
    users: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    isFetching: boolean
    followingInProgress: Array<number>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number, pageSize: number) => void
}

const Users: FC<PropsType> = ({
                 users, follow, unfollow, isFetching, followingInProgress,
                 totalUsersCount, pageSize, currentPage, onPageChanged
             }) => {
    const usersElement = users.map(u =>
        <UserItem
            key={u.id}
            id={u.id}
            fullName={u.name}
            followed={u.followed}
            status={u.status}
            photoUrl={u.photos.small ? u.photos.small : userImg}
            follow={follow}
            unfollow={unfollow}
             followingInProgress={followingInProgress}
        />)

    const paginationElement = (
            <Pagination
                total={totalUsersCount}
                current={currentPage}
                onChange={onPageChanged}
                onShowSizeChange={onPageChanged}
                pageSize={pageSize}
                pageSizeOptions={[5, 10, 20, 50, 100]}
            />
)

    return (
        <div className={style.users}>
            {paginationElement}
            {isFetching ? <Preloader/> : null}
            {usersElement}
            {paginationElement}
        </div>
    )
}
export default Users;
