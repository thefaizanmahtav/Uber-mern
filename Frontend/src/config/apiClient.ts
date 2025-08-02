import axios, { AxiosError, type AxiosInstance } from "axios"

const options = {
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
}


const API: AxiosInstance = axios.create(options)

API.interceptors.response.use(
    (response) => response.data,

    (error: AxiosError) => {
        const status = error.response?.status;
        const data = error.response?.data

        return Promise.reject({
            status,
            ...(typeof data === "object" ? data : { message: data })
        })
    }
)

export default API