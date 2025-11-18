import { axiosInstance } from "./axios";

export const createGymlocation = (data)=>{
    return axiosInstance.post('/api/gymLocation/creategymLocation',data)
}

export const getGymlocation = ()=>{
    return axiosInstance.get('/api/gymLocation/getgymLocation')
}

export const updateGymlocation = (id,date)=>{
    return axiosInstance.put(`/api/gymLocation/updategymLocation/${id}`,date)
}

export const deleteGymlocation = (id)=>{
    return axiosInstance.delete(`/api/gymLocation/deletegymLocation/${id}`)
}