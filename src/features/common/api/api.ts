import axios from 'axios';
import {ResponseDataType} from "../types/types";

const instance = axios.create({
    baseURL: 'https://reqres.in/api'
})

export const reactTestProjectAPI = {
    getAllUsers: async () => {
        const response = await instance.get<ResponseDataType>('/users?page=1');
        return await response.data
    },
}