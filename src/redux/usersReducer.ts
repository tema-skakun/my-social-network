import {UsersAPI} from "../api/api";
import {UsersType} from "../types/types";
import {AppStateType} from "./redux-toolkit-store";
import {Dispatch, ThunkAction} from "@reduxjs/toolkit";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET-USERS';
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE';
const SET_PAGE_SIZE = 'users/SET-PAGE-SIZE';
const SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING = 'users/TOGGLE-IS-FOLLOWING';

const initialState = {
    users: [] as Array<UsersType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,// array of users id
};

export type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state, users: [...action.users]//overwrite users!!! [ ...state.users, ...action.users ]
            };
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_PAGE_SIZE:
            return {
                ...state, pageSize: action.pageSize
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)//фильтрация вернёт новый объект массива
            }
        default:
            return state;
    }
}

type ActionsTypes = FollowSuccessActionType | UnfollowSuccessActionType |
    SetUsersActionType | SetCurrentPageActionType | SetPageSizeActionType |
    SetUsersTotalCountActionType | ToggleIsFetchingActionType

type FollowSuccessActionType = {
    type: typeof FOLLOW,
    userId: number
}
export const followSuccess = (id: number): FollowSuccessActionType => ({type: FOLLOW, userId: id});
type UnfollowSuccessActionType = {
    type: typeof UNFOLLOW,
    userId: number
}
export const unfollowSuccess = (id: number): UnfollowSuccessActionType => ({type: UNFOLLOW, userId: id});
type SetUsersActionType = {
    type: typeof SET_USERS,
    users: Array<UsersType>
}
export const setUsers = (users: Array<UsersType>): SetUsersActionType => ({type: SET_USERS, users});
type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => (
    {type: SET_CURRENT_PAGE, currentPage});
type SetPageSizeActionType = {
    type: typeof SET_PAGE_SIZE,
    pageSize: number
}
export const setPageSize = (pageSize: number): SetPageSizeActionType => ({type: SET_PAGE_SIZE, pageSize});
type SetUsersTotalCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    totalUsersCount: number
}
export const setUsersTotalCount = (totalUsersCount: number): SetUsersTotalCountActionType => (
    {type: SET_TOTAL_USERS_COUNT, totalUsersCount});
type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => (
    {type: TOGGLE_IS_FETCHING, isFetching});
type ToggleFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING,
    isFetching: boolean,
    userId: number
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressActionType => (
    {type: TOGGLE_IS_FOLLOWING, isFetching, userId});

//thunks
type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const requestUsers = (pageNumber: number, pageSize: number): ThunkType => {//thunk
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        const data = await UsersAPI.getUsers(pageNumber, pageSize);
        dispatch(setCurrentPage(pageNumber));
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        if (data.totalCount === undefined)
            data.totalCount = 1;
        dispatch(setUsersTotalCount(data.totalCount));
    }
}
const _followUnfollowFlow = async (dispatch: DispatchType,
                                   userId: number,
                                   apiMethod: any,
                                   actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, userId));//prohibit pressing the button again
    const response = await apiMethod(userId);
    if (response.resultCode === 0)
        dispatch(actionCreator(userId));
    dispatch(toggleFollowingProgress(false, userId));//allow the button to be pressed again
}
export const follow = (userId: number): ThunkType => {
    return (dispatch) => {
        _followUnfollowFlow(dispatch, userId, UsersAPI.follow.bind(UsersAPI), followSuccess);
    };
}
export const unfollow = (userId: number) => {
    return (dispatch: any) => {
        _followUnfollowFlow(dispatch, userId, UsersAPI.unfollow.bind(UsersAPI), unfollowSuccess);
    };
}
export default usersReducer;
