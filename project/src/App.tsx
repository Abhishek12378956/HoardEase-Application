import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layout components
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import DashboardLayout from './components/layout/DashboardLayout';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import CustomerDashboard from './pages/customer/CustomerDashboard';
import DesignerDashboard from './pages/designer/DesignerDashboard';
import VendorDashboard from './pages/vendor/VendorDashboard';

function App() {
  // Mock auth state - in a real app, this would be managed by a context/auth provider
  const [user, setUser] = useState<{ name: string; role: string } | null>(null);

  const handleLogout = () => {
    setUser(null);
  };

  // Simulated login for demo purposes
  const simulateLogin = (role: string) => {
    const users = {
      customer: { name: 'John Doe', role: 'customer' },
      designer: { name: 'Alice Designer', role: 'designer' },
      vendor: { name: 'City Printers', role: 'vendor' },
    };
    setUser(users[role as keyof typeof users] || null);
  };

  const renderWithLayout = (element: React.ReactNode) => (
    <>
      <NavBar user={user} onLogout={handleLogout} />
      {element}
      <Footer />
    </>
  );

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={renderWithLayout(<HomePage />)} />
        <Route path="/about" element={renderWithLayout(<AboutPage />)} />
        <Route path="/services" element={renderWithLayout(<ServicesPage />)} />
        <Route path="/contact" element={renderWithLayout(<ContactPage />)} />
        
        <Route 
          path="/login" 
          element={
            user ? <Navigate to={`/${user.role}/dashboard`} /> : <LoginPage />
          } 
        />
        <Route 
          path="/register" 
          element={
            user ? <Navigate to={`/${user.role}/dashboard`} /> : <RegisterPage />
          } 
        />

        {/* Mock route for demo login */}
        <Route 
          path="/demo-login/:role" 
          element={
            <div className="p-8">
              <h1>Simulating login...</h1>
              {(() => {
                const role = window.location.pathname.split('/').pop();
                if (role) {
                  simulateLogin(role);
                  return <Navigate to={`/${role}/dashboard`} />;
                }
                return null;
              })()}
            </div>
          } 
        />

        {/* Customer routes */}
        <Route 
          path="/customer" 
          element={
            user && user.role === 'customer' ? 
              <DashboardLayout userRole="customer" userName={user.name} /> : 
              <Navigate to="/login" />
          }
        >
          <Route path="dashboard" element={<CustomerDashboard />} />
          <Route path="orders" element={<div>My Orders</div>} />
          <Route path="new-order" element={<div>New Order Form</div>} />
          <Route path="profile" element={<div>Customer Profile</div>} />
        </Route>

        {/* Designer routes */}
        <Route 
          path="/designer" 
          element={
            user && user.role === 'designer' ? 
              <DashboardLayout userRole="designer" userName={user.name} /> : 
              <Navigate to="/login" />
          }
        >
          <Route path="dashboard" element={<DesignerDashboard />} />
          <Route path="orders" element={<div>Assigned Orders</div>} />
          <Route path="portfolio" element={<div>My Portfolio</div>} />
          <Route path="profile" element={<div>Designer Profile</div>} />
        </Route>

        {/* Vendor routes */}
        <Route 
          path="/vendor" 
          element={
            user && user.role === 'vendor' ? 
              <DashboardLayout userRole="vendor" userName={user.name} /> : 
              <Navigate to="/login" />
          }
        >
          <Route path="dashboard" element={<VendorDashboard />} />
          <Route path="orders" element={<div>Production Orders</div>} />
          <Route path="installations" element={<div>Installations</div>} />
          <Route path="profile" element={<div>Vendor Profile</div>} />
        </Route>

        {/* Admin routes (simplified) */}
        <Route 
          path="/admin"
          element={
            user && user.role === 'admin' ? 
              <DashboardLayout userRole="admin" userName={user.name} /> : 
              <Navigate to="/login" />
          }
        >
          <Route path="dashboard" element={<div>Admin Dashboard</div>} />
        </Route>

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;