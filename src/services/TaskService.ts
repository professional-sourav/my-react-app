"use server";

import { axiosInstance } from '../../config'

export const fetchTasks = async () => {
    try {
        const response = await axiosInstance.get('/')
        console.log("Fetched")
        return response.data.todos
    } catch (error) {
        console.error('Error fetching tasks:', error)
        return null
    }
}
