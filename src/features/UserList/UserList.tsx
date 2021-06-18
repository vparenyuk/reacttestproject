import React from 'react';
import { useQuery } from 'react-query';
import { makeStyles } from '@material-ui/styles';
import { Pagination } from '@material-ui/lab';
import {
  Card, FormControl, InputLabel, MenuItem, Select,
} from '@material-ui/core';
import getAllUsers from '../common/api/api';
import { calculateCount } from './utils';

type UserListProps = {
  title: string
};
const useStyles = makeStyles(() => ({
  root: {
    margin: 20,
  },
  title: {
    fontWeight: 700,
    fontSize: 24,
    paddingLeft: 10,
  },
  userList: {
    display: 'flex',
    flexDirection: 'row',
  },
  selectButton: {
    marginLeft: 30,
    width: 100,
  },
  cards: {

  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'space-between',
    justifyContent: 'space-between',
    listStyleType: 'none',
    paddingTop: 10,
    padding: 20,
    margin: 20,
    width: 250,

  },
  cardImg: {
    marginLeft: 20,
  },
  pagination: {
    paddingTop: 20,

  },
}
));
const UserList: React.FC<UserListProps> = ({ title }) => {
  const classes = useStyles();

  const [page, setPage] = React.useState<number>(1);
  const [view, setView] = React.useState<string>('');
  const [changeView, setChangeView] = React.useState<boolean>(true);

  const handleChangeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setView(event.target.value as string);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    event.target.value === 'List' ? setChangeView(true) : setChangeView(false);
  };

  const {
    isLoading,
    data,
  } = useQuery<CamelCaseResponseDataType>(['userList', page], () => getAllUsers(page), { keepPreviousData: true });

  const handleChange = (event: unknown, value: number) => {
    setPage(value);
  };

  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  }

  const userList = data?.data?.map(({
    firstName, lastName, id, avatar,
  }: CamelCaseResponseUserType) => (
    <div key={id} className={classes.cards}>
      <Card className={classes.card}>
        {`${firstName} ${lastName}`}
        <img className={classes.cardImg} src={avatar} alt="#" width={40} height={40} />
      </Card>
    </div>
  ));

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        {title}
        <FormControl variant="outlined" className={classes.selectButton}>
          <InputLabel id="select-outlined-label">View</InputLabel>
          <Select
            labelId="select-outlined-label"
            id="select-outlined"
            value={view}
            onChange={handleChangeSelect}
            label="View"
          >
            <MenuItem value="List">List</MenuItem>
            <MenuItem value="Tile">Tile</MenuItem>

          </Select>
        </FormControl>
      </div>
      <div className={!changeView ? classes.userList : ''}>
        {userList}
      </div>
      <Pagination
        className={classes.pagination}
        count={calculateCount(data?.total, data?.perPage)}
        color="primary"
        page={page}
        onChange={handleChange}
      />
    </div>
  );
};
export default UserList;
