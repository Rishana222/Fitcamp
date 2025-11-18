import { axiosInstance } from "./axios";

export const createMembership = (data)=>{
    return axiosInstance.post('/api/membership/createmembership',data)
}

export const getMembership = ()=>{
    return axiosInstance.get('/api/membership/get')
}

export const getMembershipById = (id)=>{
    return axiosInstance.get(`/api/membership/getmembership/${id}`)
}

export const updateMembership = (id,data)=>{
    return axiosInstance.put(`/api/membership/updatemembership/${id}`,data)
}

export const deleteMembership = (id)=>{
    return axiosInstance.delete(`/api/membership/deletemembership/${id}`)
}