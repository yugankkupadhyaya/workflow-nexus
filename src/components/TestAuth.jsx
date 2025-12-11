import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const TestAuth = () => {
  const { user, isLoggedIn, login, logout } = useContext(AuthContext);

  return (
    <div style={{ padding: '10px', background: '#eee', margin: '15px' }}>
      <h2>AUTH TEST UI</h2>
      <p>isLoggedIn: {isLoggedIn ? 'YES' : 'NO'}</p>
      <p>User: {user ? JSON.stringify(user) : 'null'}</p>

      <button onClick={() => login({ name: 'TestUser', email: 'test@mail.com' })}>
        Test Login
      </button>

      <button onClick={logout} style={{ marginLeft: '10px' }}>
        Test Logout
      </button>
    </div>
  );
};

export default TestAuth;
