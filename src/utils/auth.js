import { getAllEmployees, getAdmin } from './localStorage';

// ----------------------------------------------------
// 🔐 HANDLE USER LOGIN (Admin + Employee)
// ----------------------------------------------------
export const handleUserLogin = (email, password) => {
  // 1️⃣ SAFE ADMIN LOGIN CHECK
  const admin = getAdmin();

  if (admin && admin.email === email && admin.password === password) {
    return {
      status: 'success',
      role: 'admin',
      user: admin, // return full admin object
    };
  }

  // 2️⃣ EMPLOYEE LOGIN CHECK
  const employees = getAllEmployees();

  const employee = employees.find((emp) => emp.email === email && emp.password === password);

  if (employee) {
    return {
      status: 'success',
      role: 'employee',
      user: employee, // ⭐ return full employee object WITH TASKS
    };
  }

  // 3️⃣ INVALID LOGIN
  return {
    status: 'error',
    message: 'Invalid email or password',
  };
};
