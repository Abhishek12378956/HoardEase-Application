import React from 'react';
import { BarChart3, CreditCard, FileText, CheckCircle, TrendingUp, Clock } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/Card';
import OrderCard from '../../components/order/OrderCard';
import { Order } from '../../types';

const mockOrders: Order[] = [
  {
    _id: '1',
    customerId: 'cust123',
    customerName: 'John Doe',
    designerId: 'design123',
    designerName: 'Alice Designer',
    title: 'Summer Collection Billboard',
    description: 'Billboard design for our summer collection launch',
    designRequired: true,
    status: 'design_approved',
    timeline: {
      orderConfirmed: '2023-04-15T10:30:00Z',
      designerAssigned: '2023-04-15T11:45:00Z',
      designSubmitted: '2023-04-16T09:15:00Z',
      designApproved: '2023-04-17T14:20:00Z',
    },
    location: {
      address: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
    },
    dimensions: {
      width: 20,
      height: 10,
      unit: 'ft',
    },
    payment: {
      amount: 2500,
      status: 'completed',
      transactionId: 'tx123456',
    },
    createdAt: '2023-04-15T10:30:00Z',
    updatedAt: '2023-04-17T14:20:00Z',
  },
  {
    _id: '2',
    customerId: 'cust123',
    customerName: 'John Doe',
    title: 'Store Opening Announcement',
    description: 'Hoarding for new store opening in downtown',
    designRequired: true,
    status: 'designer_assigned',
    timeline: {
      orderConfirmed: '2023-04-20T15:45:00Z',
      designerAssigned: '2023-04-20T16:30:00Z',
    },
    location: {
      address: '456 Broadway',
      city: 'New York',
      state: 'NY',
      zipCode: '10002',
    },
    dimensions: {
      width: 15,
      height: 8,
      unit: 'ft',
    },
    payment: {
      amount: 1800,
      status: 'completed',
      transactionId: 'tx789012',
    },
    createdAt: '2023-04-20T15:45:00Z',
    updatedAt: '2023-04-20T16:30:00Z',
  },
  {
    _id: '3',
    customerId: 'cust123',
    customerName: 'John Doe',
    vendorId: 'vendor456',
    vendorName: 'Quick Prints',
    title: 'Holiday Sale Promotion',
    description: 'Holiday themed hoarding for year-end sale',
    designRequired: false,
    designFile: 'https://example.com/designs/holiday-sale.pdf',
    status: 'printing_in_progress',
    timeline: {
      orderConfirmed: '2023-04-10T09:00:00Z',
      printingStarted: '2023-04-10T11:30:00Z',
    },
    location: {
      address: '789 Fifth Avenue',
      city: 'New York',
      state: 'NY',
      zipCode: '10003',
    },
    dimensions: {
      width: 25,
      height: 12,
      unit: 'ft',
    },
    payment: {
      amount: 3200,
      status: 'completed',
      transactionId: 'tx345678',
    },
    createdAt: '2023-04-10T09:00:00Z',
    updatedAt: '2023-04-10T11:30:00Z',
  },
];

const stats = [
  {
    title: 'Total Orders',
    value: '7',
    icon: <FileText className="h-8 w-8 text-blue-600" />,
  },
  {
    title: 'Active Orders',
    value: '3',
    icon: <Clock className="h-8 w-8 text-orange-500" />,
  },
  {
    title: 'Completed Orders',
    value: '4',
    icon: <CheckCircle className="h-8 w-8 text-green-600" />,
  },
  {
    title: 'Total Spent',
    value: '$7,500',
    icon: <CreditCard className="h-8 w-8 text-purple-600" />,
  },
];

const CustomerDashboard: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Customer Dashboard</h1>
        <div>
          <span className="text-sm font-medium text-gray-500">Today's Date:</span>
          <span className="ml-2 text-sm font-semibold">{new Date().toLocaleDateString()}</span>
        </div>
      </div>
      
      {/* Stats section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-white">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-gray-100 mr-4">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Recent activity chart */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
            <div className="flex items-center">
              <TrendingUp className="h-5 w-5 text-green-500 mr-1" />
              <span className="text-sm font-medium text-green-500">12% Increase</span>
            </div>
          </div>
          
          <div className="h-64 w-full bg-gray-50 rounded-md flex items-center justify-center">
            <BarChart3 className="h-24 w-24 text-gray-300" />
            <p className="text-gray-500 ml-4">Activity chart placeholder</p>
          </div>
        </CardContent>
      </Card>
      
      {/* Recent orders */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
          <a href="/customer/orders" className="text-sm font-medium text-blue-600 hover:text-blue-700">
            View All
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockOrders.map((order) => (
            <OrderCard key={order._id} order={order} userRole="customer" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;