import React from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { useEffect } from 'react';
import { initializeLocalStorage } from './utils/localStorage';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import TestAuth from './components/TestAuth';

const App = () => {
  useEffect(() => {
    initializeLocalStorage();
  }, []);

  return (
    <>
      <BrowserRouter>
        {/* <TestAuth /> */}
        <AppRoutes />
      </BrowserRouter>

      {/* {!user ? <Login /> : ''} */}

      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  );
};

export default App;
