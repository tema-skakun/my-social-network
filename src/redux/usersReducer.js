import {UsersAPI} from "../api/api";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET-USERS';
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING = 'users/TOGGLE-IS-FOLLOWING';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
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

export const followSuccess = (id) => ({type: FOLLOW, userId: id});
export const unfollowSuccess = (id) => ({type: UNFOLLOW, userId: id});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING, isFetching, userId});
export const requestUsers = (pageNumber, pageSize) => {//thunk
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        UsersAPI.getUsers(pageNumber, pageSize)
            .then(data => {
                dispatch(setCurrentPage(pageNumber));
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setUsersTotalCount(data.totalCount));
            })
    }
}
export const follow = (userId) => {//thunk
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));//запрещаю повторное нажатие кнопки
        UsersAPI.follow(userId)
            .then(response => {
                if (response.resultCode === 0)
                    dispatch(followSuccess(userId));
                dispatch(toggleFollowingProgress(false, userId));//разрешаю повторное нажатие кнопки
            });
    }
}
export const unfollow = (userId) => {//thunk
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));//запрещаю повторное нажатие кнопки
        UsersAPI.unfollow(userId)
            .then(response => {
                if (response.resultCode === 0)
                    dispatch(unfollowSuccess(userId));
                dispatch(toggleFollowingProgress(false, userId));//разрешаю повторное нажатие кнопки
            });
    }
}

export default usersReducer;