import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ allowedRole, children }) => {
  const data = JSON.parse(localStorage.getItem('loggedInUser'));

  if (!data) return <Navigate to="/" />;
  if (data.role != allowedRole) return <Navigate to="/" />;

  return children;
};

export default ProtectedRoute;
