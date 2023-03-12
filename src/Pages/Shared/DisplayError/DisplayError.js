import React, { useContext } from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const DisplayError = () => {
  const { logOut } = useContext(AuthContext);

  const error = useRouteError();
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(err => console.log(err))
  }
  return (
    <div>
      <p className='text-red-500'>Something went wrong</p>
      <p className='text-red-500'>{error.statusText || error.message}</p>
      <h2 className="text-3xl">Please <Link to='/signup'><button className='btn btn-outline' onClick={handleLogOut}> SignUp</button></Link> or back in log in </h2>
    </div>
  );
};

export default DisplayError;