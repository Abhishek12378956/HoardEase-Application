import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export function getOrderStatusColor(status: string): string {
  const statusColors: Record<string, string> = {
    'order_confirmed': 'bg-blue-500',
    'designer_assigned': 'bg-blue-600',
    'awaiting_approval': 'bg-yellow-500',
    'design_approved': 'bg-green-500',
    'printing_in_progress': 'bg-purple-500',
    'printing_completed': 'bg-purple-700',
    'installation_scheduled': 'bg-orange-500',
    'installation_completed': 'bg-green-700',
  };
  
  return statusColors[status] || 'bg-gray-500';
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}