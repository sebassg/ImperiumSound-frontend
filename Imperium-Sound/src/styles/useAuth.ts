import { useContext } from 'react';
import { AuthContext } from '../';
import axios from 'axios';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  const { login, logout, isAuthenticated } = context;

  const loginWithBackend = async (username: string, password: string) => {
    try {
      const response = await axios.post('/api/login', { username, password });
      if (response.data.token) {
        login(response.data.token);
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login.');
    }
  };

  return { login: loginWithBackend, logout, isAuthenticated };
};
