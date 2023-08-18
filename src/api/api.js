import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {"API-KEY": "9255c4a4-776e-460a-8548-63eec6171ae7"}
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
    getProfile(id) {
        console.warn('Obsolete method. Please use ProfileAPI object.')//added notification
        return ProfileAPI.getProfile(id);//added new object, but kept compatibility
    }
}

export const ProfileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => {return response.data;})
    },
    getStatus(id) {
        return instance.get(`profile/status/` + id);
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status : status});
    }
}

export const AuthAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            })
    },
}
