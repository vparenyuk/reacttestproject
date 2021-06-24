import React from 'react';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
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
}
));

export const Tile = ({
  firstName, lastName, id, avatar,
}: UserListProps) => {
  const classes = useStyles();

  return (
    <div key={id} className={classes.cards}>
      <Card className={classes.card}>
        {`${firstName} ${lastName}`}
        <img className={classes.cardImg} src={avatar} alt="#" width={40} height={40} />
      </Card>
    </div>
  );
};
