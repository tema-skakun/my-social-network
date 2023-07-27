import UserItems from "./UserItems/UserItems";
import style from './Users.module.css'
import axios from 'axios';
import userImg from '../../assets/images/user.jpeg'
import React from "react";

// props.setUsers([
//         {
//             id: 1,
//             followed: true,
//             fullName: 'Deadpool',
//             status: 'Hello guys!!!',
//             location: {country: 'England', city: 'London'},
//             photoUrl: 'https://aiptcomics.com/ezoimgfmt/i0.wp.com/aiptcomics.com/wp-content/uploads/2022/01/DP_BB_1-1.jpg?ezimgfmt=ng%3Awebp%2Fngcb2%2Frs%3Adevice%2Frscb2-1&ssl=1&w=1747'
//         },
//         {
//             id: 2,
//             followed: true,
//             fullName: 'Wolverine',
//             status: 'Bark-bark!!!',
//             location: {country: 'USA', city: 'Saratoga'},
//             photoUrl: 'https://www.syfy.com/sites/syfy/files/styles/hero-image--large--computer--alt-1_5x/public/2020/02/stl149580.jpg?h=eea71064'
//         },
//         {
//             id: 3,
//             followed: false,
//             fullName: 'Silver Surfer',
//             status: 'yo-yo-yo',
//             location: {country: 'USA', city: 'Hitsville'},
//             photoUrl: 'https://cdn.britannica.com/16/182816-050-21F98A9B/Fantastic-Four-Rise-of-the-Silver-Surfer.jpg'
//         }
//     ]
// )

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        let usersElement = this.props.usersPage.users.map(u =>
            <UserItems
                key={u.id}
                id={u.id}
                fullName={u.name}
                followed={u.followed}
                status={u.status}
                photoUrl={u.photos.small ? u.photos.small : userImg}
                location={'u.location'}
                follow={this.props.follow}
                unfollow={this.props.unfollow}/>)

        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pageCount; ++i)
            pages.push(i);

        return (
            <div className={style.users}>
                <div>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p && style.selectedPage}
                                     onClick={(e) => {
                                         this.onPageChanged(p);
                                     }}>{p}</span>
                    })}
                </div>
                Users
                {usersElement}
            </div>
        )
    }
}

export default Users;