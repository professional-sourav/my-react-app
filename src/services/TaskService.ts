"use server";

import { axiosInstance } from '../../config'

export const fetchTasks = async (skip: number, limit?: number) => {
    try {
        const params = new URLSearchParams()
        params.append('skip', skip.toString())
        if (limit) {
            params.append('limit', limit.toString())
        }

        console.log("URl is " + `/?${params.toString()}`);
        

        const response = await axiosInstance.get(`/?${params.toString()}`)
        console.log("Fetched")
        return response.data.todos
    } catch (error) {
        console.error('Error fetching tasks:', error)
        return null
    }
}
