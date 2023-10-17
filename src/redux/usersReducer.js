"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unfollow = exports.follow = exports.requestUsers = exports.toggleFollowingProgress = exports.toggleIsFetching = exports.setUsersTotalCount = exports.setPageSize = exports.setCurrentPage = exports.setUsers = exports.unfollowSuccess = exports.followSuccess = void 0;
var api_1 = require("../api/api");
var FOLLOW = 'users/FOLLOW';
var UNFOLLOW = 'users/UNFOLLOW';
var SET_USERS = 'users/SET-USERS';
var SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE';
var SET_PAGE_SIZE = 'users/SET-PAGE-SIZE';
var SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT';
var TOGGLE_IS_FETCHING = 'users/TOGGLE-IS-FETCHING';
var TOGGLE_IS_FOLLOWING = 'users/TOGGLE-IS-FOLLOWING';
var initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [], // array of users id
};
var usersReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case FOLLOW:
            return __assign(__assign({}, state), { users: state.users.map(function (u) {
                    if (u.id === action.userId) {
                        return __assign(__assign({}, u), { followed: true });
                    }
                    return u;
                }) });
        case UNFOLLOW:
            return __assign(__assign({}, state), { users: state.users.map(function (u) {
                    if (u.id === action.userId) {
                        return __assign(__assign({}, u), { followed: false });
                    }
                    return u;
                }) });
        case SET_USERS:
            return __assign(__assign({}, state), { users: __spreadArray([], action.users, true) });
        case SET_CURRENT_PAGE:
            return __assign(__assign({}, state), { currentPage: action.currentPage });
        case SET_PAGE_SIZE:
            return __assign(__assign({}, state), { pageSize: action.pageSize });
        case SET_TOTAL_USERS_COUNT:
            return __assign(__assign({}, state), { totalUsersCount: action.totalUsersCount });
        case TOGGLE_IS_FETCHING:
            return __assign(__assign({}, state), { isFetching: action.isFetching });
        case TOGGLE_IS_FOLLOWING:
            return __assign(__assign({}, state), { followingInProgress: action.isFetching
                    ? __spreadArray(__spreadArray([], state.followingInProgress, true), [action.userId], false) : state.followingInProgress.filter(function (id) { return id !== action.userId; }) //фильтрация вернёт новый объект массива
             });
        default:
            return state;
    }
};
var followSuccess = function (id) { return ({ type: FOLLOW, userId: id }); };
exports.followSuccess = followSuccess;
var unfollowSuccess = function (id) { return ({ type: UNFOLLOW, userId: id }); };
exports.unfollowSuccess = unfollowSuccess;
var setUsers = function (users) { return ({ type: SET_USERS, users: users }); };
exports.setUsers = setUsers;
var setCurrentPage = function (currentPage) { return ({ type: SET_CURRENT_PAGE, currentPage: currentPage }); };
exports.setCurrentPage = setCurrentPage;
var setPageSize = function (pageSize) { return ({ type: SET_PAGE_SIZE, pageSize: pageSize }); };
exports.setPageSize = setPageSize;
var setUsersTotalCount = function (totalUsersCount) { return ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount }); };
exports.setUsersTotalCount = setUsersTotalCount;
var toggleIsFetching = function (isFetching) { return ({ type: TOGGLE_IS_FETCHING, isFetching: isFetching }); };
exports.toggleIsFetching = toggleIsFetching;
var toggleFollowingProgress = function (isFetching, userId) { return ({ type: TOGGLE_IS_FOLLOWING, isFetching: isFetching, userId: userId }); };
exports.toggleFollowingProgress = toggleFollowingProgress;
//thunks
var requestUsers = function (pageNumber, pageSize) {
    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dispatch((0, exports.toggleIsFetching)(true));
                    return [4 /*yield*/, api_1.UsersAPI.getUsers(pageNumber, pageSize)];
                case 1:
                    data = _a.sent();
                    dispatch((0, exports.setCurrentPage)(pageNumber));
                    dispatch((0, exports.toggleIsFetching)(false));
                    dispatch((0, exports.setUsers)(data.items));
                    if (data.totalCount === undefined)
                        data.totalCount = 1;
                    dispatch((0, exports.setUsersTotalCount)(data.totalCount));
                    return [2 /*return*/];
            }
        });
    }); };
};
exports.requestUsers = requestUsers;
var followUnfollowFlow = function (dispatch, userId, apiMethod, actionCreator) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dispatch((0, exports.toggleFollowingProgress)(true, userId)); //prohibit pressing the button again
                return [4 /*yield*/, apiMethod(userId)];
            case 1:
                response = _a.sent();
                if (response.resultCode === 0)
                    dispatch(actionCreator(userId));
                dispatch((0, exports.toggleFollowingProgress)(false, userId)); //allow the button to be pressed again
                return [2 /*return*/];
        }
    });
}); };
var follow = function (userId) {
    return function (dispatch) {
        followUnfollowFlow(dispatch, userId, api_1.UsersAPI.follow.bind(api_1.UsersAPI), exports.followSuccess);
    };
};
exports.follow = follow;
var unfollow = function (userId) {
    return function (dispatch) {
        followUnfollowFlow(dispatch, userId, api_1.UsersAPI.unfollow.bind(api_1.UsersAPI), exports.unfollowSuccess);
    };
};
exports.unfollow = unfollow;
exports.default = usersReducer;
