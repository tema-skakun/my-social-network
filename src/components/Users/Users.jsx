import UserItems from "./UserItems/UserItems";

const Users = (props) => {
    if (props.usersPage.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    followed: true,
                    fullName: 'Deadpool',
                    status: 'Hello guys!!!',
                    location: {country: 'England', city: 'London'},
                    photoUrl: 'https://aiptcomics.com/ezoimgfmt/i0.wp.com/aiptcomics.com/wp-content/uploads/2022/01/DP_BB_1-1.jpg?ezimgfmt=ng%3Awebp%2Fngcb2%2Frs%3Adevice%2Frscb2-1&ssl=1&w=1747'
                },
                {
                    id: 2,
                    followed: true,
                    fullName: 'Wolverine',
                    status: 'Bark-bark!!!',
                    location: {country: 'USA', city: 'Saratoga'},
                    photoUrl: 'https://www.syfy.com/sites/syfy/files/styles/hero-image--large--computer--alt-1_5x/public/2020/02/stl149580.jpg?h=eea71064'
                },
                {
                    id: 3,
                    followed: false,
                    fullName: 'Silver Surfer',
                    status: 'yo-yo-yo',
                    location: {country: 'USA', city: 'Hitsville'},
                    photoUrl: 'https://cdn.britannica.com/16/182816-050-21F98A9B/Fantastic-Four-Rise-of-the-Silver-Surfer.jpg'
                }
            ]
        )
    }

    let usersElement = props.usersPage.users.map(u =>
        <UserItems
            key={u.id}
            id={u.id}
            fullName={u.fullName}
            followed={u.followed}
            status={u.status}
            photoUrl={u.photoUrl}
            location={u.location}
            follow={props.follow}
            unfollow={props.unfollow}/>)
    return (
        <div>
            {usersElement}
        </div>
    )
}

export default Users;
