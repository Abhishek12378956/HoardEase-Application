export interface User {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  role: 'customer' | 'designer' | 'vendor' | 'admin';
  createdAt: string;
  company?: string;
  address?: string;
  city?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export type OrderStatus = 
  | 'order_confirmed' 
  | 'designer_assigned' 
  | 'awaiting_approval' 
  | 'design_approved' 
  | 'printing_in_progress'
  | 'printing_completed'
  | 'installation_scheduled'
  | 'installation_completed';

export interface Order {
  _id: string;
  customerId: string;
  customerName: string;
  designerId?: string;
  designerName?: string;
  vendorId?: string;
  vendorName?: string;
  title: string;
  description: string;
  designRequired: boolean;
  designFile?: string;
  designRevisions?: number;
  status: OrderStatus;
  timeline: {
    orderConfirmed: string;
    designerAssigned?: string;
    designSubmitted?: string;
    designApproved?: string;
    printingStarted?: string;
    printingCompleted?: string;
    installationScheduled?: string;
    installationCompleted?: string;
  };
  location: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
  };
  dimensions: {
    width: number;
    height: number;
    unit: 'ft' | 'm';
  };
  payment: {
    amount: number;
    status: 'pending' | 'partial' | 'completed';
    transactionId?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Notification {
  _id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  createdAt: string;
}

export interface DesignRevision {
  _id: string;
  orderId: string;
  designerId: string;
  fileUrl: string;
  comments: string;
  status: 'submitted' | 'approved' | 'rejected';
  createdAt: string;
}