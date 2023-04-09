import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/users/usersSlice';

const FetchedUsers = () => {
  const users = useSelector((state) => state.users);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers);
  }, [dispatch]);

  if (error) return <p>Cannot fetch users</p>;

  if (isLoading) return <p>Loading ...</p>;

  return (
    <div>
      {users.map((user, index) => (
        <li key={index}>
          {user.name.first} {user.name.last}
        </li>
      ))}
    </div>
  );
};

export default FetchedUsers;
