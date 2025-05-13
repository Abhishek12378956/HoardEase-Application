import React from 'react';
import { Clock, CheckCircle, FileText, CreditCard, TrendingUp, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
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
    status: 'designer_assigned',
    timeline: {
      orderConfirmed: '2023-04-15T10:30:00Z',
      designerAssigned: '2023-04-15T11:45:00Z',
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
    updatedAt: '2023-04-15T11:45:00Z',
  },
  {
    _id: '2',
    customerId: 'cust456',
    customerName: 'Jane Smith',
    designerId: 'design123',
    designerName: 'Alice Designer',
    title: 'Store Opening Announcement',
    description: 'Hoarding for new store opening in downtown',
    designRequired: true,
    status: 'awaiting_approval',
    timeline: {
      orderConfirmed: '2023-04-20T15:45:00Z',
      designerAssigned: '2023-04-20T16:30:00Z',
      designSubmitted: '2023-04-21T09:15:00Z',
    },
    location: {
      address: '456 Broadway',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90001',
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
    updatedAt: '2023-04-21T09:15:00Z',
  },
  {
    _id: '3',
    customerId: 'cust789',
    customerName: 'Robert Johnson',
    designerId: 'design123',
    designerName: 'Alice Designer',
    title: 'Tech Conference Promotion',
    description: 'Hoarding for annual tech conference',
    designRequired: true,
    status: 'design_approved',
    timeline: {
      orderConfirmed: '2023-04-10T09:00:00Z',
      designerAssigned: '2023-04-10T10:30:00Z',
      designSubmitted: '2023-04-11T14:45:00Z',
      designApproved: '2023-04-12T11:20:00Z',
    },
    location: {
      address: '789 Tech Ave',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94105',
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
    updatedAt: '2023-04-12T11:20:00Z',
  },
];

const stats = [
  {
    title: 'Pending Designs',
    value: '2',
    icon: <Clock className="h-8 w-8 text-orange-500" />,
  },
  {
    title: 'Completed Designs',
    value: '12',
    icon: <CheckCircle className="h-8 w-8 text-green-600" />,
  },
  {
    title: 'Total Orders',
    value: '14',
    icon: <FileText className="h-8 w-8 text-blue-600" />,
  },
  {
    title: 'Earnings',
    value: '$1,250',
    icon: <CreditCard className="h-8 w-8 text-purple-600" />,
  },
];

const DesignerDashboard: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Designer Dashboard</h1>
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
      
      {/* Urgent assignments */}
      <Card className="mb-8 border-l-4 border-orange-500">
        <CardContent className="p-6">
          <div className="flex items-start">
            <div className="p-3 rounded-full bg-orange-100 mr-4">
              <AlertCircle className="h-6 w-6 text-orange-500" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">Urgent: New Design Assignment</h3>
                <span className="text-sm text-orange-500 font-medium">15 min left to respond</span>
              </div>
              <p className="text-gray-600 mb-4">
                You have a new design assignment for "Tech Conference Promotion" that requires your attention. You must accept or reject this order within the next 15 minutes.
              </p>
              <div className="flex space-x-3">
                <Button size="sm">Accept Assignment</Button>
                <Button variant="outline" size="sm">Reject</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Performance chart */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Your Performance</h3>
            <div className="flex items-center">
              <TrendingUp className="h-5 w-5 text-green-500 mr-1" />
              <span className="text-sm font-medium text-green-500">15% Increase</span>
            </div>
          </div>
          
          <div className="h-64 w-full bg-gray-50 rounded-md flex items-center justify-center">
            <p className="text-gray-500">Performance chart placeholder</p>
          </div>
        </CardContent>
      </Card>
      
      {/* Current assignments */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Current Assignments</h3>
          <a href="/designer/orders" className="text-sm font-medium text-blue-600 hover:text-blue-700">
            View All
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockOrders.map((order) => (
            <OrderCard key={order._id} order={order} userRole="designer" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignerDashboard;