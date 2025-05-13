import React from 'react';
import { CheckCircle, CreditCard, Printer, Building2 } from 'lucide-react';
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
    vendorId: 'vendor789',
    vendorName: 'City Printers',
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
    customerId: 'cust456',
    customerName: 'Jane Smith',
    vendorId: 'vendor789',
    vendorName: 'City Printers',
    title: 'Store Opening Announcement',
    description: 'Hoarding for new store opening in downtown',
    designRequired: false,
    designFile: 'https://example.com/designs/store-opening.pdf',
    status: 'printing_in_progress',
    timeline: {
      orderConfirmed: '2023-04-20T15:45:00Z',
      printingStarted: '2023-04-21T09:30:00Z',
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
    updatedAt: '2023-04-21T09:30:00Z',
  },
  {
    _id: '3',
    customerId: 'cust789',
    customerName: 'Robert Johnson',
    designerId: 'design456',
    designerName: 'Bob Creative',
    vendorId: 'vendor789',
    vendorName: 'City Printers',
    title: 'Tech Conference Promotion',
    description: 'Hoarding for annual tech conference',
    designRequired: true,
    status: 'printing_completed',
    timeline: {
      orderConfirmed: '2023-04-10T09:00:00Z',
      designerAssigned: '2023-04-10T10:30:00Z',
      designSubmitted: '2023-04-11T14:45:00Z',
      designApproved: '2023-04-12T11:20:00Z',
      printingStarted: '2023-04-12T13:00:00Z',
      printingCompleted: '2023-04-14T15:30:00Z',
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
    updatedAt: '2023-04-14T15:30:00Z',
  },
];

const stats = [
  {
    title: 'Pending Prints',
    value: '3',
    icon: <Printer className="h-8 w-8 text-blue-600" />,
  },
  {
    title: 'Pending Installations',
    value: '2',
    icon: <Building2 className="h-8 w-8 text-teal-600" />,
  },
  {
    title: 'Completed Jobs',
    value: '21',
    icon: <CheckCircle className="h-8 w-8 text-green-600" />,
  },
  {
    title: 'Total Revenue',
    value: '$27,500',
    icon: <CreditCard className="h-8 w-8 text-purple-600" />,
  },
];

const VendorDashboard: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Vendor Dashboard</h1>
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
      
      {/* New print request alert */}
      <Card className="mb-8 border-l-4 border-blue-500">
        <CardContent className="p-6">
          <div className="flex items-start">
            <div className="p-3 rounded-full bg-blue-100 mr-4">
              <Printer className="h-6 w-6 text-blue-500" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">New Print Request</h3>
                <span className="text-sm text-blue-500 font-medium">20 min left to respond</span>
              </div>
              <p className="text-gray-600 mb-4">
                You have a new print request for "Summer Collection Billboard" that requires your attention. You must accept or reject this order within the next 20 minutes.
              </p>
              <div className="flex space-x-3">
                <Button size="sm">Accept Request</Button>
                <Button variant="outline" size="sm">Reject</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Production schedule */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Production Schedule</h3>
            <Button variant="outline" size="sm">View Calendar</Button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Project
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Deadline
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">Summer Collection Billboard</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      Pending
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    April 20, 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <Button size="sm">Start Printing</Button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">Store Opening Announcement</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      In Progress
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    April 22, 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <Button size="sm" variant="outline">View Details</Button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">Tech Conference Promotion</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Ready for Installation
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    April 25, 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <Button size="sm">Schedule Installation</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      
      {/* Recent orders */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
          <a href="/vendor/orders" className="text-sm font-medium text-blue-600 hover:text-blue-700">
            View All
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockOrders.map((order) => (
            <OrderCard key={order._id} order={order} userRole="vendor" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;