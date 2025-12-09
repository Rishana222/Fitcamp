import axios from 'axios'


const baseURL = "http://localhost:5000"
export const imageUrl = "http://localhost:5000/uploads/"

export const axiosInstance =  axios.create({
    baseURL,
    headers:{
        "Content-Type":"application/json"
    }
})