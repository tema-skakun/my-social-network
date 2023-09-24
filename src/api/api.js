import axios from "axios";

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
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    },
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    },
}

export const ProfileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => {
                return response.data;
            })
    },
    getStatus(id) {
        return instance.get(`profile/status/` + id);
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status});
    },
    updateAvatar(avatarFile) {
        const formData = new FormData();
        formData.append('image', avatarFile);
        return instance.put(`profile/photo`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
    }
}

export const AuthAPI = {
    me() {
        return (
            instance.get(`auth/me`)
                .then(response => response.data)
        )
    },
    login(email, password, rememberMe = false) {
        return (
            instance.post(`auth/login`, {email, password, rememberMe})
            // .then(response => response.data)
        )
    },
    logout() {
        return (
            instance.delete(`auth/login`)
            // .then(response => response.data)
        )
    },
}
