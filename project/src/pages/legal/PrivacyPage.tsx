import React from 'react';
import { Card, CardContent } from '../../components/ui/Card';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Privacy Policy
        </h1>

        <Card>
          <CardContent className="prose prose-blue max-w-none p-8">
            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including:
            </p>
            <ul>
              <li>Name and contact information</li>
              <li>Company details</li>
              <li>Payment information</li>
              <li>Project requirements and specifications</li>
              <li>Communication preferences</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the collected information for:
            </p>
            <ul>
              <li>Providing and improving our services</li>
              <li>Processing payments</li>
              <li>Communicating about your orders</li>
              <li>Sending service updates and marketing communications</li>
              <li>Analyzing and improving our platform</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>
              We share your information with:
            </p>
            <ul>
              <li>Service providers (designers, printers, installers)</li>
              <li>Payment processors</li>
              <li>Analytics providers</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your information:
            </p>
            <ul>
              <li>Encryption of sensitive data</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication</li>
              <li>Secure data storage and transmission</li>
            </ul>

            <h2>5. Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Export your data</li>
            </ul>

            <h2>6. Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies to:
            </p>
            <ul>
              <li>Remember your preferences</li>
              <li>Analyze platform usage</li>
              <li>Personalize your experience</li>
              <li>Improve our services</li>
            </ul>

            <h2>7. Children's Privacy</h2>
            <p>
              Our services are not intended for children under 13. We do not knowingly collect information from children under 13.
            </p>

            <h2>8. Changes to Privacy Policy</h2>
            <p>
              We may update this policy periodically. We will notify you of any material changes via email or platform notification.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              For privacy-related inquiries, please contact:
            </p>
            <ul>
              <li>Privacy Officer: privacy@hoardease.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Business Street, Suite 100, New York, NY 10001</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPage;