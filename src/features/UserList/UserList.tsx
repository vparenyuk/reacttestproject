import React from 'react';
import {useQuery} from "react-query";
import {getAllUsers} from '../common/api/api';
import {makeStyles} from '@material-ui/styles';
import {Pagination} from "@material-ui/lab";

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
            paddingLeft: 10,
        },
        item: {
            listStyleType: "none",
            paddingTop: 10,
            paddingLeft: 25,
        },
        pagination: {
            paddingTop: 20,

        }
    }
));

export const UserList: React.FC<UserListProps> = ({title}) => {

    const classes = useStyles();

    const [page, setPage] = React.useState<number>(1);

    const {
        isLoading,
        data
    } = useQuery<CamelCaseResponseDataType>(['userList', page], () => getAllUsers(page), {keepPreviousData: true})

    const handleChange = (event: unknown, value: number) => {
        setPage(value);
    };

    const count = Math.ceil(data?.total / data?.perPage)

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
            <Pagination className={classes.pagination} count={count} color="primary" page={page}
                        onChange={handleChange}/>
        </div>
    );
};

