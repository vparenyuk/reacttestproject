import React, {useEffect} from 'react';
import {useQuery} from "react-query";
import {getAllUsers } from '../common/api/api';
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
        },
        item: {
            listStyleType: "none",
            paddingTop: 10,
        }
    }
));

export const UserList: React.FC<UserListProps> = ({title}) => {

    const classes = useStyles();

    const [page, setPage] = React.useState(1);

    //working variant
    // const {isLoading, data} = useQuery<CamelCaseResponseDataType>("userList", getAllUsers);

    //try this for pagination
    const { isLoading, data } = useQuery(['userList', page], getAllUsers(page), {keepPreviousData: true })



    const handleChange = (event: unknown, value: number) => {
         // console.log(event, value)
        setPage(value);
        // getUsersByPage(value);
        // useQuery(["paginatedUsers", page], getUsersByPage(value))
        getAllUsers(value)
    };


    const perPage = data?.perPage;
    const total = data?.total;
    const count = Math.ceil(total / perPage);

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
            <Pagination count={count} color="primary" page={page} onChange={handleChange} />
        </div>
    );
};

