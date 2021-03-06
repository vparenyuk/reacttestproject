import React from 'react';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  cards: {
    textDecoration: 'none',
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
    width: 150,
    '&:hover': {
      color: '#0000FF',
    },
  },
}
));

export const List = ({
  firstName, lastName, id,
}: UserListProps) => {
  const classes = useStyles();

  return (
    <Link key={id} className={classes.cards} to={`/user/${id}`}>
      <Card className={classes.card}>
        {`${firstName} ${lastName}`}
      </Card>
    </Link>
  );
};
