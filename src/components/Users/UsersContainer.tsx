import {Component, ReactNode} from "react";
import {connect} from "react-redux";
import {compose} from "@reduxjs/toolkit";
import {actions, follow, requestUsers, unfollow} from "../../redux/usersReducer.ts";
import Users from "./Users.tsx";
import {
    getCurrentPageSelector,
    getFollowingInProgressSelector,
    getIsFetchingSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getUsersSelector
} from "../../redux/usersSelectors.ts";
import {UsersType} from "../../types/types";
import {AppStateType} from "../../redux/redux-toolkit-store";
import style from './Users.module.css'

type MapStatePropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    users: Array<UsersType>
    totalUsersCount: number
    followingInProgress: Array<number>
}

type MapDispatchPropsType = {
    getUsers: (currentPage: number, pageSize: number) => void
    setPageSize: (pageSize: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

type OwnPropsType = {
    mainTitle: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

class UsersContainer extends Component<PropsType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number, pageSize: number) => {
        this.props.setPageSize(pageSize);
        this.props.getUsers(pageNumber, pageSize);

    }

    render(): ReactNode {
        return (
            <div>
                <h3>
                    {this.props.mainTitle}
                </h3>
                <div className={style.main}>
                    <Users
                        isFetching={this.props.isFetching}
                        users={this.props.users}
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        followingInProgress={this.props.followingInProgress}
                    />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state: AppStateType): MapStatePropsType {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state),
    }
}

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
        mapStateToProps, {follow, unfollow, setPageSize: actions.setPageSize, getUsers: requestUsers}),
    // withAuthRedirect
)(UsersContainer);
