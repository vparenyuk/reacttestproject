import React from 'react';
import {useQuery} from "react-query";
import {reactTestProjectAPI} from "../common/api/api";
import {ResponseDataType, UserType} from "../common/types/types";
import {makeStyles} from '@material-ui/styles';

type UserListProps = {
    title: string
}
const useStyles = makeStyles((theme: unknown) => ({
        root: {
            margin: 20,
        },
        title: {
            fontWeight: 700,
            fontSize: 24,
        },
        item: {
            listStyleType: "none",
            paddingTop: 10,
        }
    }
));

export const UserList: React.FC<UserListProps> = ({title}) => {

    const classes = useStyles();

    const { isLoading, data} = useQuery<ResponseDataType>("userList", reactTestProjectAPI.getAllUsers);

    if (isLoading) {
        return (
            <div>Loading...</div>
        );
    }

    const userList = data?.data.map(({first_name, last_name, id}: UserType) => {

        return (
            <div key={id}>
                <li className={classes.item}>{first_name} {last_name}</li>
            </div>
        )
    })

    return (
        <div className={classes.root}>
            <div className={classes.title}>{title}</div>
            {userList}
        </div>
    );
};

