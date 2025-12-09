import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "./axios";
import { updateGymlocation } from "./gymlocationApi";

export const createGym = (data) => {
    return axiosInstance.post('/api/gym/creategym', data,{
        headers:{
            "Content-Type":"multipart/form-data"
        }
    });
};

export const getGym = () => {
    return axiosInstance.get('/api/gym/getgym');
};

export const getGymById = (id) => {
    return axiosInstance.get(`/api/gym/getgym/${id}`);
};

export const getGymsByLocation = (locationId) => {
    return axiosInstance.get(`/api/gymLocations/${locationId}/gyms`);
};

export const updateGym = (id, data) => {
    return axiosInstance.put(`/api/gym/updategym/${id}`, data, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
};

export const deleteGym = (id) => {
    return axiosInstance.delete(`/api/gym/deletegym/${id}`);
};

export const useCreateGym =()=>{
    return useMutation(
        {
            mutationKey:"creategym",
            mutationFn:createGym
        }
    )
}


export const useDeleteGym = ()=>{
    return useMutation(
        {
            mutationKey:"deleteGym",
            mutationFn:deleteGym
        }
    )
}

export const useUpdateGym = ()=>{
    return useMutation(
        {
            mutationKey:"updategyms",
            mutationFn:({id,data})=>updateGym(id,data)
        }
    )
}
