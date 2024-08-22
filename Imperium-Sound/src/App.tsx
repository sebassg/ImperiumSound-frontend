import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';  // Asegúrate de que la ruta es correcta
import LoginForm from './components/LoginForm';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = React.useContext(AuthProvider);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const Dashboard = () => <h1>Dashboard - Protected Route</h1>;

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
