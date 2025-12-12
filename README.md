🚀 Workflow Nexus – Task Management System

A modern role-based task management application built with React, Context API, and Tailwind CSS.

🌟 Overview

Workflow Nexus is an intelligent task management system designed for workplace environments. The platform supports two user roles — Admin and Employee — enabling structured task creation, assignment, and tracking.

Built with a strong architectural approach using React Context + Reducers, the system enables real-time task syncing, persistent storage, and a clean, modern UI powered by TailwindCSS.

🔐 Role-Based Functionality
👑 Admin

Admins have full control over the task workflow:

Create tasks for any employee

Use an intuitive popup user selector for assigning tasks

View all tasks across all employees

Update task statuses

Delete tasks when needed

View real-time analytics (New, Pending, Completed counts)

👤 Employee

Employees see only what belongs to them:

Create tasks for themselves only (auto-assigned)

Update their task statuses (New → Pending → Completed/Failed)

View all tasks assigned to them

Dashboard shows New, Pending, Completed task statistics

🧩 Key Features
🌐 1. Authentication System

Custom login system using handleUserLogin

Role-based redirect using React Router

Persistent authentication using LocalStorage

Protected routes for admin and employee dashboards

📊 2. Global Task Management with Context + Reducer

All tasks are handled globally through a reducer with actions:

ADD_TASK

DELETE_TASK

UPDATE_TASK_STATUS

This allows:

Instant UI updates

Centralized workflow control

LocalStorage persistence

📝 3. Smart Task Creation (Role-Aware Form)
Admin:

Opens employee selection modal

Picks any employee from the popup list

Assigns tasks flexibly

Employee:

Cannot assign to others

AssignedTo field auto-fills with their own username

🗂 4. Category-Based Task Views

Tasks are displayed under:

New Tasks

Pending Tasks

Completed Tasks

Failed Tasks

Each category shows:

Title

Description

Due date

Priority color

Status badge

🎨 5. Modern UI with TailwindCSS

Smooth shadows & transitions

Responsive layout

Clean dashboards

Minimalistic, professional design

Modal with blur background effect

🏗 Project Structure
src/
  components/
    Auth/
      Login.jsx
    Dashboard/
      AdminDashboard.jsx
      EmployeeDashboard.jsx
    TaskList/
      TaskList.jsx
      NewTask.jsx
      AcceptTask.jsx
      CompletedTask.jsx
      FailedTask.jsx
    others/
      Header.jsx
      CreateTask.jsx
  context/
    AuthContext.js
    TaskContext.js
  routes/
    AppRoutes.jsx
    ProtectedRoute.jsx
  utils/
    auth.js
    employees.js

⚙️ Tech Stack
Technology	Purpose
React	UI development
React Router DOM	Routing + Protected routes
Context API + useReducer	State management
TailwindCSS	Styling
LocalStorage	Persistence
JavaScript ES6	Logic
🚀 How It Works
1️⃣ User logs in

Role (admin/employee) is saved in AuthContext + localStorage.

2️⃣ ProtectedRoute ensures correct access

Admin → /admin

Employee → /employee

3️⃣ TaskContext maintains global task state

Reducer updates both UI + localStorage.

4️⃣ Admin creates tasks using popup employee selector

Clean, intuitive task assignment.

5️⃣ Employee sees and updates ONLY their tasks

Complete data isolation between roles.

🛠 Installation & Setup
Clone repository
git clone https://github.com/your-username/workflow-nexus.git
cd workflow-nexus

Install dependencies
npm install

Start development server
npm run dev

🧪 Login Credentials (Sample)
Admin:
email: admin@example.com
password: 123

Employee:
email: employee1@example.com
password: 123

🧱 Upcoming Enhancements

🔔 Notification system

📅 Calendar integration

📣 Real-time updates using WebSockets

📊 Charts & analytics (task trends)

👤 Employee profiles

🌙 Dark mode support

🏁 Conclusion

Workflow Nexus is a production-ready, scalable, and professional task management platform demonstrating:

Clean architecture

Advanced React patterns

Real-world task workflow

Polished UI/UX

Role-based logic

Centralized state handling
