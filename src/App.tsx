import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CityListingsPage from './pages/CityListingsPage';
import PgDetailsPage from './pages/PgDetailsPage';
import OwnerDashboard from './pages/OwnerDashboard';
import UserDashboard from './pages/UserDashboard';
import AboutPage from './pages/AboutPage';
import AddPgPage from './pages/AddPgPage';
import RoommateMatchPage from './pages/RoommateMatchPage';
import { AuthProvider, useAuth } from './contexts/AuthContext';

// Protected Route wrapper
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, user } = useAuth();
  return <>{children}</>; // Always allow access for development
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/city/:cityName" element={<CityListingsPage />} />
              <Route path="/pg/:pgId" element={<PgDetailsPage />} />
              <Route path="/add-pg" element={<ProtectedRoute><AddPgPage /></ProtectedRoute>} />
              <Route path="/roommate-match" element={<ProtectedRoute><RoommateMatchPage /></ProtectedRoute>} />
              <Route path="/owner/dashboard" element={<ProtectedRoute><OwnerDashboard /></ProtectedRoute>} />
              <Route path="/user/dashboard" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;