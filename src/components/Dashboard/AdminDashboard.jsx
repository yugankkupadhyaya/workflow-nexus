import React from 'react';
import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import { AllTask } from '../others/AllTask';

const AdminDashboard = () => {
  return (
    <>
      <Header />

      <div className="p-4 sm:p-6 md:p-10 max-w-5xl mx-auto space-y-10">
        {/* Create Task Section */}
        <CreateTask />

        {/* All Tasks Section */}
        <AllTask />
      </div>
    </>
  );
};

export default AdminDashboard;
