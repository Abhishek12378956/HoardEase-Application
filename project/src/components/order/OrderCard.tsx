import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, FileText } from 'lucide-react';
import { Card, CardContent, CardFooter } from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { formatDate, getOrderStatusColor } from '../../lib/utils';
import { Order } from '../../types';

interface OrderCardProps {
  order: Order;
  userRole: 'customer' | 'designer' | 'vendor' | 'admin';
}

const OrderCard: React.FC<OrderCardProps> = ({ order, userRole }) => {
  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'order_confirmed': return 'primary';
      case 'designer_assigned': return 'primary';
      case 'awaiting_approval': return 'warning';
      case 'design_approved': return 'success';
      case 'printing_in_progress': return 'secondary';
      case 'printing_completed': return 'secondary';
      case 'installation_scheduled': return 'warning';
      case 'installation_completed': return 'success';
      default: return 'default';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'order_confirmed': return 'Order Confirmed';
      case 'designer_assigned': return 'Designer Assigned';
      case 'awaiting_approval': return 'Awaiting Approval';
      case 'design_approved': return 'Design Approved';
      case 'printing_in_progress': return 'Printing In Progress';
      case 'printing_completed': return 'Ready for Installation';
      case 'installation_scheduled': return 'Installation Scheduled';
      case 'installation_completed': return 'Installation Completed';
      default: return 'Unknown Status';
    }
  };

  const getOrderDetailPath = () => {
    switch (userRole) {
      case 'customer': return `/customer/orders/${order._id}`;
      case 'designer': return `/designer/orders/${order._id}`;
      case 'vendor': return `/vendor/orders/${order._id}`;
      case 'admin': return `/admin/orders/${order._id}`;
      default: return '/';
    }
  };
  
  const renderActionButton = () => {
    switch (userRole) {
      case 'customer':
        if (order.status === 'awaiting_approval') {
          return <Button size="sm">Review Design</Button>;
        }
        return <Button variant="outline" size="sm">View Details</Button>;
        
      case 'designer':
        if (order.status === 'designer_assigned') {
          return <Button size="sm">Submit Design</Button>;
        }
        return <Button variant="outline" size="sm">View Details</Button>;
        
      case 'vendor':
        if (order.status === 'design_approved') {
          return <Button size="sm">Start Printing</Button>;
        } else if (order.status === 'printing_completed') {
          return <Button size="sm">Schedule Installation</Button>;
        }
        return <Button variant="outline" size="sm">View Details</Button>;
        
      default:
        return <Button variant="outline" size="sm">View Details</Button>;
    }
  };

  return (
    <Card className="h-full transition-shadow hover:shadow-lg">
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-gray-900 truncate">{order.title}</h3>
          <Badge variant={getStatusBadgeVariant(order.status)}>
            {getStatusLabel(order.status)}
          </Badge>
        </div>
        
        <div className="space-y-3 mb-4">
          <div className="flex items-start">
            <Clock className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-gray-500">Order Date</p>
              <p className="text-sm font-medium">{formatDate(order.createdAt)}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-gray-500">Location</p>
              <p className="text-sm font-medium">{order.location.city}, {order.location.state}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <FileText className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-gray-500">Dimensions</p>
              <p className="text-sm font-medium">{order.dimensions.width} × {order.dimensions.height} {order.dimensions.unit}</p>
            </div>
          </div>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
          <div
            className={`h-2 rounded-full ${getOrderStatusColor(order.status)}`}
            style={{ width: '60%' }}
          ></div>
        </div>
      </CardContent>
      
      <CardFooter className="border-t pt-4 flex justify-between items-center">
        <p className="text-sm font-semibold text-gray-900">
          ${order.payment.amount.toFixed(2)}
        </p>
        <Link to={getOrderDetailPath()}>
          {renderActionButton()}
        </Link>
      </CardFooter>
    </Card>
  );
};

export default OrderCard;