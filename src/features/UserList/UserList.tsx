import React from 'react';
import {useQuery} from "react-query";
import {getAllUsers} from "../common/api/api";

type UserListProps = {
    title: string
}

export const UserList: React.FC<UserListProps> = ({title}) => {

    const { isLoading, error, data, isFetching } = useQuery("userList", getAllUsers);

    console.log(data, isLoading)

    if (isLoading) {
        return (
            <div>Loading...</div>
        );
    }

    const userList = data?.data.map(({first_name, last_name, id}: any) => {
        return (
            <div key={id}>
                <li>{first_name} {last_name}</li>
            </div>
        )
    })

    return (
        <div>
            <div><b>{title}</b></div>
            {userList}
        </div>
    );
};

