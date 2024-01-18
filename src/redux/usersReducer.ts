import {UsersAPI} from "../api/api.ts";
import {ResultCodesEnum, UsersType} from "../types/types.ts";
import {AppStateType, InferActionsTypes} from "./redux-toolkit-store";
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

type ActionsTypes = InferActionsTypes<typeof actions>

export const actions = {
    followSuccess: (id: number) => ({type: FOLLOW, userId: id} as const),
    unfollowSuccess: (id: number) => ({type: UNFOLLOW, userId: id} as const),
    setUsers: (users: Array<UsersType>) => ({type: SET_USERS, users} as const),
    setCurrentPage: (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const),
    setPageSize: (pageSize: number) => ({type: SET_PAGE_SIZE, pageSize} as const),
    setUsersTotalCount: (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({type: TOGGLE_IS_FOLLOWING, isFetching, userId} as const)
}

//thunks
// type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const requestUsers = (pageNumber: number, pageSize: number): ThunkType => {//thunk
    return async (dispatch) => {
        dispatch(actions.toggleIsFetching(true));
        const data = await UsersAPI.getUsers(pageNumber, pageSize);
        dispatch(actions.setCurrentPage(pageNumber));
        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setUsers(data.items));
        if (data.totalCount === undefined)
            data.totalCount = 1;
        dispatch(actions.setUsersTotalCount(data.totalCount));
    }
}

const _followUnfollowFlow = async (dispatch: DispatchType,
                                   userId: number,
                                   apiMethod: any,
                                   actionCreator: any) => {
    dispatch(actions.toggleFollowingProgress(true, userId));//prohibit pressing the button again
    const data = await apiMethod(userId);
    if (data.resultCode === ResultCodesEnum.Success)
        dispatch(actionCreator(userId));
    dispatch(actions.toggleFollowingProgress(false, userId));//allow the button to be pressed again
}

export const follow = (userId: number) => {
    return (dispatch: any) => {
        _followUnfollowFlow(dispatch, userId, UsersAPI.follow.bind(UsersAPI), actions.followSuccess);
    };
}

export const unfollow = (userId: number) => {
    return (dispatch: any) => {
        _followUnfollowFlow(dispatch, userId, UsersAPI.unfollow.bind(UsersAPI), actions.unfollowSuccess);
    };
}

export default usersReducer;
