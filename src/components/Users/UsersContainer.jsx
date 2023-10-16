import {follow, requestUsers, setCurrentPage, setPageSize, unfollow} from "../../redux/usersReducer.ts";
import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import {compose} from "@reduxjs/toolkit";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber, pageSize) => {
        this.props.setPageSize(pageSize);
        this.props.getUsers(pageNumber, pageSize);

    }

    render() {
        return <>
            <Users
                isFetching={this.props.isFetching}
                usersPage={this.props.usersPage}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}
function mapStateToProps(state) {
    return {
        usersPage: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}
export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, setPageSize, getUsers: requestUsers}),
    // withAuthRedirect
)(UsersContainer);
