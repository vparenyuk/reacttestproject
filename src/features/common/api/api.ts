import axios from 'axios';
import camelcaseKeys from "camelcase-keys";


const instance = axios.create({
    baseURL: 'https://reqres.in/api'
})

export const getAllUsers = async () => {
    const response = await instance.get<UserResponseDataType>('/users');
    return camelcaseKeys({...response.data}, { deep: true }) as UserResponseType;
}

