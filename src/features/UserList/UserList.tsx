import React from 'react';
import {useQuery} from "react-query";
import {getAllUsers} from '../common/api/api';
import {makeStyles} from '@material-ui/styles';

type UserListProps = {
    title: string
}
const useStyles = makeStyles(() => ({
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

    const {isLoading, data} = useQuery<CamelCaseResponseDataType>("userList", getAllUsers);

    if (isLoading) {
        return (
            <div>Loading...</div>
        );
    }

    const userList = data?.data?.map(({firstName, lastName, id}: CamelCaseResponseUserType) => {
        return (
            <div key={id}>
                <li className={classes.item}>{firstName} {lastName}</li>
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

