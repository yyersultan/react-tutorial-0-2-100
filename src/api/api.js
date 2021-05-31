import * as axios from 'axios';

const instance = axios.create({
    withCredentials:true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY":"2d18e6a1-07c6-4a63-bb8c-cb657f12d04b"
    }
})

export const usersAPI = {
    getUsers (id) {
        return  instance.get(`users?page=${id}&count=10`,);
    },
    
    followApi(id) {
        return instance.post(`follow/${id}`);
    },
    
    unFollowApi (id){
        return instance.delete(`follow/${id}`);
    }
}

export const profileAPI = {
    getUserProfile(id) {
        return instance.get(`profile/${id}`);
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`);
    },
    updateStatus(status) {
        instance.put(`profile/status`,{status:status});
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`);
    },
    login(email,password,rememberMe = false) {
        return instance.post(`/auth/login`,{email,password,rememberMe});
    },
    logout() {
        return instance.delete(`/auth/login`);
    }
}


