import { Routes, Route } from 'react-router-dom';

/* Auth */
import Login from '../components/Auth/Login';

/* Dashboards */
import AdminDashboard from '../components/Dashboard/AdminDashboard';
import EmployeeDashboard from '../components/Dashboard/EmployeeDashboard';

/* Protected Route */
import ProtectedRoute from './ProtectedRoute';

/* Task Components */
import CreateTask from '../components/others/CreateTask';
import NewTask from '../components/TaskList/NewTask';
import AcceptTask from '../components/TaskList/AcceptTask';
import CompletedTask from '../components/TaskList/CompletedTask';
import FailedTask from '../components/TaskList/FailedTask';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Login Route */}
      <Route path="/" element={<Login />} />

      {/* ADMIN ROUTES */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRole="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* Create Task */}
      <Route
        path="/admin/tasks/create"
        element={
          <ProtectedRoute allowedRole="admin">
            <CreateTask />
          </ProtectedRoute>
        }
      />

      {/* New Tasks */}
      <Route
        path="/admin/tasks/new"
        element={
          <ProtectedRoute allowedRole="admin">
            <NewTask />
          </ProtectedRoute>
        }
      />

      {/* Pending Tasks */}
      <Route
        path="/admin/tasks/pending"
        element={
          <ProtectedRoute allowedRole="admin">
            <AcceptTask />
          </ProtectedRoute>
        }
      />

      {/* Completed Tasks */}
      <Route
        path="/admin/tasks/completed"
        element={
          <ProtectedRoute allowedRole="admin">
            <CompletedTask />
          </ProtectedRoute>
        }
      />

      {/* Failed Tasks */}
      <Route
        path="/admin/tasks/failed"
        element={
          <ProtectedRoute allowedRole="admin">
            <FailedTask />
          </ProtectedRoute>
        }
      />

      {/* EMPLOYEE ROUTES */}
      <Route
        path="/employee"
        element={
          <ProtectedRoute allowedRole="employee">
            <EmployeeDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
