import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import Loading from '../../Pages/Shared/Loading';

const AdminRoute = ({ children }) => {

  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isLoadingAdmin] = useAdmin(user?.email)
  const location = useLocation();
  if (loading || isLoadingAdmin) {
    return <Loading></Loading>

  }
  if (user && isAdmin) {
    return children;

  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;