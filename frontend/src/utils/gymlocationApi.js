import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "./axios";
import { use } from "react";

export const createGymlocation = (data)=>{
    return axiosInstance.post('/api/gymLocation/creategymLocation',data,{
        headers:{
            "Content-Type": "multipart/form-data"
        }
    })
}

export const getGymlocation = ()=>{
    return axiosInstance.get('/api/gymLocation/getgymLocation')
}

export const updateGymlocation = (id,data)=>{
    return axiosInstance.put(`/api/gymLocation/updategymLocation/${id}`,data)
}

export const deleteGymlocation = (id)=>{
    return axiosInstance.delete(`/api/gymLocation/deletegymLocation/${id}`)
}



export const useCreateGymLocation=()=>{
    return useMutation(
        {
            mutationKey:"createLocation",
            mutationFn:createGymlocation
        }
    )
}

export const useDeleteGymLocation=()=>{
    return useMutation(
        {
            mutationKey:"deletegym",
            mutationFn:deleteGymlocation
        }
    )
}

export const useUpdateGymLocation = ()=>{
    return useMutation(
        {
            mutationKey:"updateGym",
            mutationFn:updateGymlocation
        }
    )
}