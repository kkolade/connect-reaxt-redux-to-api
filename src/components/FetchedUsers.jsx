import React from 'react';
import { useSelector } from 'react-redux';

const FetchedUsers = () => {
  const { users, isLoading, error } = useSelector((store) => store.users.users);
  console.log(users);
  if (error) return <p>Cannot fetch users</p>;

  if (isLoading) return <p>Loading ...</p>;

  return (
    <div>
      {users.results.map((user, index) => (
        <li key={index}>
          {user.name.first} {user.name.last}
        </li>
      ))}
    </div>
  );
};

export default FetchedUsers;
