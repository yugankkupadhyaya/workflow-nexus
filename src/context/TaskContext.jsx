import { createContext, useReducer } from 'react';

export const TaskContext = createContext();

// Initial Global State
const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

// Reducer - Handles ALL Task Operations
const taskReducer = (state, action) => {
  switch (action.type) {
    // 1️⃣ Add Task
    case 'ADD_TASK':
      const newTasks = [...state.tasks, action.payload];
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      return { ...state, tasks: newTasks };

    // 2️⃣ Edit Task
    case 'EDIT_TASK':
      const edited = state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
      localStorage.setItem('tasks', JSON.stringify(edited));
      return { ...state, tasks: edited };

    // 3️⃣ Delete Task
    case 'DELETE_TASK':
      const filtered = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(filtered));
      return { ...state, tasks: filtered };

    // 4️⃣ Update Task Status
    case 'UPDATE_STATUS':
      const statusUpdated = state.tasks.map((task) =>
        task.id === action.payload.id ? { ...task, status: action.payload.status } : task
      );
      localStorage.setItem('tasks', JSON.stringify(statusUpdated));
      return { ...state, tasks: statusUpdated };

    // 5️⃣ Assign / Reassign Task
    case 'ASSIGN_TASK':
      const reassigned = state.tasks.map((task) =>
        task.id === action.payload.id ? { ...task, assignedTo: action.payload.assignedTo } : task
      );
      localStorage.setItem('tasks', JSON.stringify(reassigned));
      return { ...state, tasks: reassigned };

    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  // Exposed Functions (Components will use these)

  const addTask = (task) => dispatch({ type: 'ADD_TASK', payload: task });

  const editTask = (updatedTask) => dispatch({ type: 'EDIT_TASK', payload: updatedTask });

  const deleteTask = (id) => dispatch({ type: 'DELETE_TASK', payload: id });

  const updateStatus = (id, status) => dispatch({ type: 'UPDATE_STATUS', payload: { id, status } });

  const assignTask = (id, assignedTo) =>
    dispatch({ type: 'ASSIGN_TASK', payload: { id, assignedTo } });

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        addTask,
        editTask,
        deleteTask,
        updateStatus,
        assignTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
