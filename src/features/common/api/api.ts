import axios from 'axios';
import camelcaseKeys from "camelcase-keys";


const instance = axios.create({
    baseURL: 'https://reqres.in/api'
})


//I will refactor(improve) link in this function, when add the pagination logic to project!
export const getAllUsers = async () => {
    const response = await instance.get<ResponseDataType>('/users');
    return camelcaseKeys({...response.data}, { deep: true })
}

