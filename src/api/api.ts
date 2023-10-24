import axios from "axios";
import {
    CaptchaUrlResponseType,
    LoginResponseType,
    LogoutResponseType,
    MeResponseType,
    ProfileType, UpdateAvatarResponseType, UpdateProfileResponseType
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
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    unfollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    },
    follow(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    },
}

export const ProfileAPI = {
    getProfile(id: number) {
        return instance.get(`profile/${id}`)
            .then(response => {
                return response.data;
            })
    },

    getStatus(id: number) {
        return instance.get(`profile/status/` + id);
    },

    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status});
    },

    updateAvatar(avatarFile: any) {
        const formData = new FormData();
        formData.append('image', avatarFile);
        return instance.put<UpdateAvatarResponseType>(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(res => res.data);
    },

    updateProfile(profile: ProfileType) {
        return instance.put<UpdateProfileResponseType>(`profile/`, profile)
            .then(res => res.data);
    }
}

export const AuthAPI = {
    me() {
        return instance.get<MeResponseType>(`auth/me`)
                .then(res => res.data);
    },

    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha})
                .then(res => res.data);
    },

    logout() {
        return instance.delete<LogoutResponseType>(`auth/login`)
            .then(res => res.data);
    },
}

export const SecurityAPI = {
    getCaptchaUrl() {
        return instance.get<CaptchaUrlResponseType>(`security/get-captcha-url`);
    }
}
