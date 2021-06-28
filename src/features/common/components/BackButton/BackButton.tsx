import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export const BackButton:React.FC = () => {
  const history = useHistory();

  return (
    <>
      <Button type="button" variant="contained" color="secondary" onClick={() => history.goBack()}>Back</Button>
    </>
  );
};
