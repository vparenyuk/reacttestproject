import React from 'react';

type UserDetailsProps = {
  data: CamelCaseResponseUserType
};

export const UserDetailsPage:React.FC<UserDetailsProps> = ({ data }: UserDetailsProps) => {
  const { firstName, lastName, avatar } = data;

  return (
    <div>
      {`${firstName} 
            ${lastName} `}
      <div>
        <img alt="#" src={avatar} height={200} width={200} />
      </div>
    </div>
  );
};
