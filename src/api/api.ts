import axios from "axios";
import {
    CaptchaUrlResponseType,
    FollowUnfollowUpdateStatusType,
    GetUsersResponseType,
    LoginResponseType,
    LogoutResponseType,
    MeResponseType,
    ProfileType,
    UpdateAvatarResponseType,
    UpdateProfileResponseType
} from "../types/types";

// facade pattern
const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "9255c4a4-776e-460a-8548-63eec6171ae7"
    }
})

export const UsersAPI = {
    async getUsers(currentPage: number, pageSize: number) {
        const response = await instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`);
        return response.data;
    },
    async unfollow(id: number) {
        const response = await instance.delete<FollowUnfollowUpdateStatusType>(`follow/${id}`);
        return response.data;
    },
    async follow(id: number) {
        const response = await instance.post<FollowUnfollowUpdateStatusType>(`follow/${id}`);
        return response.data;
    },
}

export const ProfileAPI = {
    async getProfile(id: number) {
        const response = await instance.get<ProfileType>(`profile/${id}`);
        return response.data;
    },

    async getStatus(id: number) {
        const response = await instance.get<string>(`profile/status/` + id);
        return response.data;
    },

    updateStatus(status: string) {
        return instance.put<FollowUnfollowUpdateStatusType>(`profile/status/`, {status: status});
    },

    async updateAvatar(avatarFile: any) {
        const formData = new FormData();
        formData.append('image', avatarFile);
        const response = await instance.put<UpdateAvatarResponseType>(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data;
    },

    async updateProfile(profile: ProfileType) {
        const response = await instance.put<UpdateProfileResponseType>(`profile/`, profile);
        return response.data;
    },
}

export const AuthAPI = {
    async me() {
        const response = await instance.get<MeResponseType>(`auth/me`);
        return response.data;
    },
    async login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        const response = await instance.post<LoginResponseType>(`auth/login`, { email, password, rememberMe, captcha });
        return response.data;
    },
    async logout() {
        const response = await instance.delete<LogoutResponseType>(`auth/login`);
        return response.data;
    },
}

export const SecurityAPI = {
    getCaptchaUrl() {
        return instance.get<CaptchaUrlResponseType>(`security/get-captcha-url`);
    }
}
