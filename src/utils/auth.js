import { getAllEmployees, getAdmin } from './localStorage';

import EmployeeDashboard from './../components/Dashboard/EmployeeDashboard';

export const handleUserLogin = (email, password) => {
  //checking admin
  const admin = getAdmin();
  if (admin.email === email && admin.password === password) {
    return {
      status: 'success',
      role: 'admin',
      user: admin,
    };
  }
  //check for Employee
  const employees = getAllEmployees();
  const employee = employees.find((emp) => emp.email === email && emp.passs === password);
  if (employee) {
    return {
      status: 'success',
      role: 'employee ',
      user: 'employee',
    };
  }
  return {
    status: 'error',
    message: 'Invalid email or password',
  };
};
