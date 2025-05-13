import React from 'react';
import { Card, CardContent } from '../../components/ui/Card';

const CookiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Cookie Policy
        </h1>

        <Card>
          <CardContent className="prose prose-blue max-w-none p-8">
            <h2>1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by:
            </p>
            <ul>
              <li>Remembering your preferences</li>
              <li>Understanding how you use our platform</li>
              <li>Keeping you signed in</li>
              <li>Protecting your security</li>
            </ul>

            <h2>2. Types of Cookies We Use</h2>
            <h3>Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly:
            </p>
            <ul>
              <li>Authentication cookies</li>
              <li>Security cookies</li>
              <li>Session management cookies</li>
            </ul>

            <h3>Preference Cookies</h3>
            <p>
              These cookies remember your choices:
            </p>
            <ul>
              <li>Language preferences</li>
              <li>Region settings</li>
              <li>Customization options</li>
            </ul>

            <h3>Analytics Cookies</h3>
            <p>
              These cookies help us understand how visitors interact with our website:
            </p>
            <ul>
              <li>Pages visited</li>
              <li>Time spent on site</li>
              <li>Navigation patterns</li>
              <li>Error encounters</li>
            </ul>

            <h2>3. Third-Party Cookies</h2>
            <p>
              We use services from these third parties that may place cookies:
            </p>
            <ul>
              <li>Google Analytics (analytics)</li>
              <li>Stripe (payments)</li>
              <li>Intercom (customer support)</li>
            </ul>

            <h2>4. Cookie Management</h2>
            <p>
              You can manage cookies through your browser settings:
            </p>
            <ul>
              <li>Chrome: Settings → Privacy and Security → Cookies</li>
              <li>Firefox: Options → Privacy & Security → Cookies</li>
              <li>Safari: Preferences → Privacy → Cookies</li>
              <li>Edge: Settings → Privacy & Security → Cookies</li>
            </ul>

            <h2>5. Cookie Consent</h2>
            <p>
              When you first visit our site, we'll ask for your consent to use non-essential cookies. You can change your preferences at any time.
            </p>

            <h2>6. Updates to Cookie Policy</h2>
            <p>
              We may update this policy as our services evolve. Check back periodically for updates.
            </p>

            <h2>7. Contact Information</h2>
            <p>
              For questions about our cookie policy, contact:
            </p>
            <ul>
              <li>Email: privacy@hoardease.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Business Street, Suite 100, New York, NY 10001</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CookiesPage;