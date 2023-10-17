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
exports.updateProfile = exports.updateAvatar = exports.updateStatus = exports.getStatus = exports.getUserProfile = exports.deletePost = exports.setAvatarSuccess = exports.setStatus = exports.setUserProfile = exports.addPost = void 0;
var api_1 = require("../api/api");
var redux_form_1 = require("redux-form");
var ADD_POST = 'my-social-network/profile/ADD-POST';
var SET_USER_PROFILE = 'my-social-network/profile/SET-USER-PROFILE';
var SET_STATUS = 'my-social-network/profile/SET-STATUS';
var SET_AVATAR_SUCCESS = 'my-social-network/profile/SET-AVATAR-SUCCESS';
var DELETE_POST = 'my-social-network/profile/DELETE-POST';
var initialState = {
    posts: [
        { id: 1, message: "It's my first post", likesCount: 30 },
        { id: 2, message: 'Hello world!', likesCount: 10 },
    ],
    profile: null,
    status: '',
};
var profileReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ADD_POST:
            var newPost = {
                id: 3,
                message: action.newPostBody,
                likesCount: 100
            };
            return __assign(__assign({}, state), { posts: __spreadArray(__spreadArray([], state.posts, true), [newPost], false) });
        case SET_USER_PROFILE:
            return __assign(__assign({}, state), { profile: action.profile });
        case SET_STATUS:
            return __assign(__assign({}, state), { status: action.status });
        case SET_AVATAR_SUCCESS:
            return __assign(__assign({}, state), { profile: __assign(__assign({}, state.profile), { photos: action.photos }) });
        case DELETE_POST:
            return __assign(__assign({}, state), { posts: state.posts.filter(function (p) { return p.id !== action.id; }) });
        default:
            return state;
    }
};
var addPost = function (newPostBody) {
    return { type: ADD_POST, newPostBody: newPostBody };
};
exports.addPost = addPost;
var setUserProfile = function (profile) {
    return { type: SET_USER_PROFILE, profile: profile };
};
exports.setUserProfile = setUserProfile;
var setStatus = function (status) {
    return { type: SET_STATUS, status: status };
};
exports.setStatus = setStatus;
var setAvatarSuccess = function (photos) {
    return { type: SET_AVATAR_SUCCESS, photos: photos };
};
exports.setAvatarSuccess = setAvatarSuccess;
var deletePost = function (id) {
    return { type: DELETE_POST, id: id };
};
exports.deletePost = deletePost;
//thunks
var getUserProfile = function (userId) {
    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api_1.ProfileAPI.getProfile(userId)];
                case 1:
                    response = _a.sent();
                    dispatch((0, exports.setUserProfile)(response));
                    return [2 /*return*/];
            }
        });
    }); };
};
exports.getUserProfile = getUserProfile;
var getStatus = function (userId) {
    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api_1.ProfileAPI.getStatus(userId)];
                case 1:
                    response = _a.sent();
                    dispatch((0, exports.setStatus)(response.data));
                    return [2 /*return*/];
            }
        });
    }); };
};
exports.getStatus = getStatus;
var updateStatus = function (status) {
    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api_1.ProfileAPI.updateStatus(status)];
                case 1:
                    response = _a.sent();
                    if (response.data.resultCode === 0) {
                        dispatch((0, exports.setStatus)(status));
                    }
                    return [2 /*return*/];
            }
        });
    }); };
};
exports.updateStatus = updateStatus;
var updateAvatar = function (photos) {
    return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api_1.ProfileAPI.updateAvatar(photos)];
                case 1:
                    response = _a.sent();
                    if (response.data.resultCode === 0) {
                        dispatch((0, exports.setAvatarSuccess)(response.data.data.photos));
                    }
                    return [2 /*return*/];
            }
        });
    }); };
};
exports.updateAvatar = updateAvatar;
var updateProfile = function (profile) { return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, response, message;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = getState().auth.userId;
                return [4 /*yield*/, api_1.ProfileAPI.updateProfile(profile)];
            case 1:
                response = _a.sent();
                if (response.data.resultCode === 0) {
                    dispatch((0, exports.getUserProfile)(userId));
                }
                else {
                    message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                    dispatch((0, redux_form_1.stopSubmit)('edit-profile', { _error: message }));
                    return [2 /*return*/, Promise.reject(response.data.messages[0])];
                }
                return [2 /*return*/];
        }
    });
}); }; };
exports.updateProfile = updateProfile;
exports.default = profileReducer;
