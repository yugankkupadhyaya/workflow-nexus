import employeesData from '../data/employees';
import adminData from '../data/admin';

// -----------------------------------
// INITIALIZE LOCAL STORAGE
// -----------------------------------
export const initializeLocalStorage = () => {
  if (!localStorage.getItem('employees')) {
    localStorage.setItem('employees', JSON.stringify(employeesData));
  }

  if (!localStorage.getItem('admin')) {
    localStorage.setItem('admin', JSON.stringify(adminData));
  }
};

// -----------------------------------
// GETTER METHODS
// -----------------------------------

// Get all employees
export const getAllEmployees = () => {
  return JSON.parse(localStorage.getItem('employees')).employees;
};

// Get employee by ID
export const getEmployeeById = (id) => {
  const data = JSON.parse(localStorage.getItem('employees')).employees;
  return data.find((e) => e.id === id);
};

// Get admin
export const getAdmin = () => {
  return JSON.parse(localStorage.getItem('admin')).admin;
};

// -----------------------------------
// SETTER METHODS
// -----------------------------------

// Add employee
export const addEmployee = (newEmployee) => {
  const data = JSON.parse(localStorage.getItem('employees'));

  data.employees.push(newEmployee);

  localStorage.setItem('employees', JSON.stringify(data));
  return newEmployee;
};

// Update employee
export const updateEmployee = (id, updatedFields) => {
  const data = JSON.parse(localStorage.getItem('employees'));

  const index = data.employees.findIndex((emp) => emp.id === id);
  if (index === -1) return null;

  data.employees[index] = {
    ...data.employees[index],
    ...updatedFields,
  };

  localStorage.setItem('employees', JSON.stringify(data));
  return data.employees[index];
};

// Delete employee
export const deleteEmployee = (id) => {
  const data = JSON.parse(localStorage.getItem('employees'));

  data.employees = data.employees.filter((emp) => emp.id !== id);

  localStorage.setItem('employees', JSON.stringify(data));
  return true;
};

//--------------------------------------
//UPDATE ADMIN 
//------------------------------
export const updateAdmin = (updatedFields) => {
  const data = JSON.parse(localStorage.getItem('admin'));

  data.admin = {
    ...data.admin,
    ...updatedFields,
  };

  localStorage.setItem('admin', JSON.stringify(data));
  return data.admin;
};
