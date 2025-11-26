import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "./axios";

export const createFacility = (data)=>{
    return axiosInstance.post('/api/facility/createfacility',data,{
        headers:{
            "Content-Type":"multipart/form-data"
        }
    })
}

export const getFacility =()=>{
    return axiosInstance.get('/api/facility/getfacility')
}
export const updateFacility = (id,data)=>{
    return axiosInstance.put(`/api/facility/updatesfacility/${id}`,data)
}

export const deleteFacility = (id)=>{
    return axiosInstance.delete(`/api/facility/deletefacility/${id}`)
}

export const usecreateFacility = ()=>{
    return useMutation(
        {
            mutationKey:["createfacilities"],
            mutationFn:createFacility
        }
    )
}