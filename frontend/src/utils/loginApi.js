import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "./axios";

export const Createlogin = (data)=>{
    return axiosInstance.post('/api/login/createlogin',data)
}

export const useCreatelogin =()=>{
    return useMutation({
        mutationKey:'login',
        mutationFn:Createlogin
    })
}