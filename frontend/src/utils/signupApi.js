import { axiosInstance } from "./axios";
export const CreateSignup = (data)=>{
    return axiosInstance.post('/api/signup/createsignup',data)
}
