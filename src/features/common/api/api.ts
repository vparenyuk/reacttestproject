import axios from 'axios';
import camelcaseKeys from "camelcase-keys";

const instance = axios.create({
    baseURL: 'https://reqres.in/api'
})

// In this function we add "as unknown" after camelcaseKeys function for its typing.
// In another case we can declare the types for the input and output data using separate camelcaseKeys function.
// export const getAllUsers = async ():CamelCaseResponseDataType => {
//     const response = await instance.get<UserResponseDataType>('/users?per_page=4&page=3');
//     return camelcaseKeys({...response.data}, { deep: true }) as unknown as CamelCaseResponseDataType;
// }
export const getAllUsers = async (page: number | any = 1):CamelCaseResponseDataType => {
    // console.log(page)
    const response = await instance.get<UserResponseDataType>(`/users?per_page=4&page=${page}`);
    return camelcaseKeys({...response.data}, { deep: true }) as unknown as CamelCaseResponseDataType;
}


