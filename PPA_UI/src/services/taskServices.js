import axios from "axios"
import { createTask, deleteTask, getTasks, updateTask } from "../redux/actions"

const axiosInstance = axios.create({
    baseURL: "https://localhost:5001/api/tasks"
})

export const getTasksRequest = async (userId, dispatch) => {
    return await axiosInstance.get(`/${userId}`)
        .then((response) => dispatch(getTasks(response.data)))
        .catch(e => { throw e })
}

export const createTaskRequest = async (task, dispatch) => {
    return await axiosInstance.post("/create", task)
        .then(response => dispatch(createTask(response.data)))
        .catch(e => { throw e } );
}

export const updateTaskRequest = async (task, dispatch) => {
    return await axiosInstance.post("/update", task)
        .then(response => dispatch(updateTask(response.data)))
        .catch(e => { throw e } );
}

export const deleteTaskRequest = async (taskId, dispatch) => {
    return await axiosInstance.delete(`/${taskId}`)
        .then(response => dispatch(deleteTask(response.data)))
        .catch(e => { throw e } );
}