import { axiosInstance } from "./axios";

export const createPayment = (data)=>{
    return axiosInstance.post('/api/payment/createpayment',data)
}

export const getPayment = ()=>{
    return axiosInstance.get('/api/payment/getpayment')
}