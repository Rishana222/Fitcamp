import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "./axios";

export const createSubscription = (data)=>{
    return axiosInstance.post('/api/subscription/createsubscription',data)
}

export const getAllSubscription =()=>{
  return axiosInstance.get('/api/subscription/get')
}

export const getsubscriptionById =(id)=>{
    return axiosInstance.get(`/api/subscription/getsubscription/${id}`)
}

export const updateSubscription = (id,data)=>{
    return axiosInstance.put(`/api/subscription/updatesubscription/${id}`,data)
}

export const deleteSubscription = (id)=>{
    return axiosInstance.delete(`/api/subscription/deletesubscription/${id}`)
}

export const usecreateSubscription =()=>{
     return useMutation(
        {
            mutationKey:"createsubscription",
            mutationFn:createSubscription
        }
     )
}

export const useDeleteSubscription =()=>{
    return useMutation(
        {
            mutationKey:"deletesub",
            mutationFn:deleteSubscription
        }
    )
}