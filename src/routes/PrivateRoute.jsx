import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

function PrivateRoute() {
  const { pathname } = useLocation();
  const accessToken = localStorage.getItem('accessToken');

  if (pathname === '/todo') {
    return accessToken ? <Outlet /> : <Navigate to="/signin" replace />;
  } else {
    return accessToken ? <Navigate to="/todo" replace /> : <Outlet />;
  }
}

export default PrivateRoute;
