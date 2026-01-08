import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "./axios";

export const createCheckout = (data) => {
    return axiosInstance.post('/api/checkout/createcheckout', data);
};
export const getCheckout = (id) => {
    return axiosInstance.get(`/api/checkout/getcheckout/${id}`);
}
export const getAllCheckout = () => {
    return axiosInstance.get('/api/checkout/getcheckout');
}
export const useCreateCheckout = () => {
    return useMutation({
        mutationKey: 'createCheckout',
        mutationFn: createCheckout
    });
}       

