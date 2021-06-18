import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';

const instance = axios.create({
  baseURL: 'https://reqres.in/api',
});

// In this function we add "as unknown" after camelcaseKeys function for its typing.
// In another case we can declare the types for the input
// and output data using separate camelcaseKeys function.
const getAllUsers = async (page: number | unknown = 1): CamelCaseResponseDataType  => {
  const response = await instance.get<UserResponseDataType>(`/users?per_page=4&page=${page}`);
  return camelcaseKeys({ ...response.data },
    { deep: true }) as unknown as CamelCaseResponseDataType;
};
export default getAllUsers;
