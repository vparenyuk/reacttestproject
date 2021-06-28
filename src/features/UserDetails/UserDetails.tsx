import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getUser } from '../common/api/api';
import { UserDetailsPage } from '../../page/UserDetailsPage/UserDetailsPage';

export const UserDetails:React.FC = () => {
  const { id }:any = useParams();

  const { data, isLoading } = useQuery<any>(['singleUser'], () => getUser(id));

  if (isLoading) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div>
      <UserDetailsPage data={data?.data} />
    </div>
  );
};
