import React, { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { LayoutDashboard, BarChart2, Users, FileText, Settings, Bell, Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';

interface DashboardLayoutProps {
  userRole: 'customer' | 'designer' | 'vendor' | 'admin';
  userName: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ userRole, userName }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const getNavLinks = () => {
    switch (userRole) {
      case 'customer':
        return [
          { href: '/customer/dashboard', label: 'Dashboard', icon: <LayoutDashboard className="h-5 w-5" /> },
          { href: '/customer/orders', label: 'My Orders', icon: <FileText className="h-5 w-5" /> },
          { href: '/customer/new-order', label: 'New Order', icon: <FileText className="h-5 w-5" /> },
          { href: '/customer/profile', label: 'Profile', icon: <Users className="h-5 w-5" /> },
        ];
      case 'designer':
        return [
          { href: '/designer/dashboard', label: 'Dashboard', icon: <LayoutDashboard className="h-5 w-5" /> },
          { href: '/designer/orders', label: 'Assigned Orders', icon: <FileText className="h-5 w-5" /> },
          { href: '/designer/portfolio', label: 'My Portfolio', icon: <FileText className="h-5 w-5" /> },
          { href: '/designer/profile', label: 'Profile', icon: <Users className="h-5 w-5" /> },
        ];
      case 'vendor':
        return [
          { href: '/vendor/dashboard', label: 'Dashboard', icon: <LayoutDashboard className="h-5 w-5" /> },
          { href: '/vendor/orders', label: 'Production Orders', icon: <FileText className="h-5 w-5" /> },
          { href: '/vendor/installations', label: 'Installations', icon: <FileText className="h-5 w-5" /> },
          { href: '/vendor/profile', label: 'Profile', icon: <Users className="h-5 w-5" /> },
        ];
      case 'admin':
        return [
          { href: '/admin/dashboard', label: 'Dashboard', icon: <LayoutDashboard className="h-5 w-5" /> },
          { href: '/admin/orders', label: 'All Orders', icon: <FileText className="h-5 w-5" /> },
          { href: '/admin/users', label: 'Users', icon: <Users className="h-5 w-5" /> },
          { href: '/admin/analytics', label: 'Analytics', icon: <BarChart2 className="h-5 w-5" /> },
          { href: '/admin/settings', label: 'Settings', icon: <Settings className="h-5 w-5" /> },
        ];
      default:
        return [];
    }
  };

  const navLinks = getNavLinks();

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 flex md:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
        </div>
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 flex flex-col z-50 w-64 bg-white shadow-lg transform transition-transform md:translate-x-0 md:static md:h-screen",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center justify-between px-4 py-5 border-b border-gray-200">
          <div className="flex items-center">
            <span className="text-blue-600 text-xl font-bold">HoardEase</span>
          </div>
          <button 
            className="md:hidden"
            onClick={toggleSidebar}
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        
        {/* User info */}
        <div className="border-b border-gray-200 py-4 px-4">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
              {userName?.charAt(0).toUpperCase() || 'U'}
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{userName || 'User'}</p>
              <p className="text-xs text-gray-500 capitalize">{userRole}</p>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center px-4 py-2 text-sm font-medium rounded-md group",
                    location.pathname === item.href
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                  )}
                >
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top header */}
        <header className="bg-white shadow-sm">
          <div className="px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
            <button
              className="md:hidden text-gray-500"
              onClick={toggleSidebar}
            >
              <Menu className="h-6 w-6" />
            </button>
            
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-600">
                <Bell className="h-5 w-5" />
              </button>
              <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white md:hidden">
                {userName?.charAt(0).toUpperCase() || 'U'}
              </div>
            </div>
          </div>
        </header>
        
        {/* Main content area */}
        <main className="flex-1 overflow-auto bg-gray-100">
          <div className="py-6 px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;