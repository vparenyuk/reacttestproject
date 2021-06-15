import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reqres.in/api'
})

export const getAllUsers = async () => {
    const response = await  fetch('https://reqres.in/api/users');

    return response.json()
};
// export const getAllUsers = async () => {
//     const response = await instance.get<any>('/users');
//
//     return await response.data.json()
// };

