import { axiosInstance } from "./axios";

export const createTransaction = (data)=>{
    return axiosInstance.post('/api/transaction/createtransaction',data)
}   

export const getAllTransaction =(userId)=>{
    return axiosInstance.get(`/api/transaction/transaction/user/${userId}`)
}

