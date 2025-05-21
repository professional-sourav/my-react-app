import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/todos',
    headers: {
        'Content-Type': 'application/json',
    },
})