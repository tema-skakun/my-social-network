import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from "../../redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";

function mapStateToProps (state){
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page));
        },
        setUsersTotalCount: (count) => {
            dispatch(setUsersTotalCountAC(count));
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;