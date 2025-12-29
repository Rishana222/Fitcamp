import { axiosInstance } from "./axios";

export const Createlogin = (data)=>{
    return axiosInstance.post('/api/login/createlogin',data)
}