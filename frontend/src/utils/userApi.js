import { axiosInstance } from "./axios"



export const getUsers =() =>{
    return axiosInstance.get('/api/user/get')
}

export const createUser= (data)=>{
    return axiosInstance.post('/api/user/create',data)
}

export const getUserById = (id)=>{
    return axiosInstance.get(`/api/user/getuser/${id}`)
}
export const deleteUser = (id)=>{
    return axiosInstance.delete(`/api/user/deleteuser/${id}`)
}