import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";

function mapStateToProps (state){
    return {
        usersPage: state.usersPage
    }
}

function mapDispatchToProps (dispatch) {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;
