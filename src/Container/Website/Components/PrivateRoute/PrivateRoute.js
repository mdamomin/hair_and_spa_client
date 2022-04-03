import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../../../../App';

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(Authcontext);
  const location = useLocation();
  if (isLoading) {
    return (
      <div className='text-center'>
        <span
          className='spinner-border spinner-border-sm'
          role='status'
          aria-hidden='true'
        ></span>
        Loading...
      </div>
    );
  }
  return user?.email || user?.displayName ? (
    children
  ) : (
    <Navigate to='/login' state={{ from: location }} />
  );
};

export default PrivateRoute;
