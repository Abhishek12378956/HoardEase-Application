import React from 'react';
import { Card, CardContent } from '../../components/ui/Card';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Terms of Service
        </h1>

        <Card>
          <CardContent className="prose prose-blue max-w-none p-8">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using HoardEase's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2>2. Description of Services</h2>
            <p>
              HoardEase provides an online platform connecting businesses with hoarding design, printing, and installation services. Our services include but are not limited to:
            </p>
            <ul>
              <li>Custom hoarding design services</li>
              <li>Printing services</li>
              <li>Installation services</li>
              <li>Project management and coordination</li>
            </ul>

            <h2>3. User Accounts</h2>
            <p>
              To access certain features of our platform, you must register for an account. You agree to:
            </p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized use</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>

            <h2>4. Payment Terms</h2>
            <p>
              All payments must be made in advance unless otherwise specified. Our refund policy is as follows:
            </p>
            <ul>
              <li>100% refund if cancelled within 30 minutes of order placement</li>
              <li>50% refund if cancelled before design work begins</li>
              <li>No refund after design completion or start of printing</li>
            </ul>

            <h2>5. Intellectual Property</h2>
            <p>
              All designs created through our platform remain the property of the client after full payment. However, we retain the right to:
            </p>
            <ul>
              <li>Display completed works in our portfolio</li>
              <li>Use designs for marketing purposes</li>
              <li>Retain ownership of unused design concepts</li>
            </ul>

            <h2>6. Service Standards</h2>
            <p>
              We strive to maintain high service standards, including:
            </p>
            <ul>
              <li>Design turnaround within 2-3 business days</li>
              <li>Up to 3 design revisions per order</li>
              <li>Quality assurance at every stage</li>
              <li>Professional installation services</li>
            </ul>

            <h2>7. Limitation of Liability</h2>
            <p>
              HoardEase shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>

            <h2>8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of our services after such modifications constitutes acceptance of the new terms.
            </p>

            <h2>9. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at:
            </p>
            <ul>
              <li>Email: legal@hoardease.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Business Street, Suite 100, New York, NY 10001</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsPage;