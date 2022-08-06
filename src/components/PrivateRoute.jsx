import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/authContext';

export default function PrivateROute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
}
