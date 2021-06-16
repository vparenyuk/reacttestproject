import axios from 'axios';
import camelcaseKeys from "camelcase-keys";

const instance = axios.create({
    baseURL: 'https://reqres.in/api'
})

//In this function we add "as unknown" after camelcaseKeys function for its typing.
// In another case we can declare the types for the input and output data using separate camelcaseKeys function.
export const getAllUsers = async () => {
    const response = await instance.get<UserResponseDataType>('/users');
    return camelcaseKeys({...response.data}, { deep: true }) as unknown as UserDataType;
}

