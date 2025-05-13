import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  service: z.enum(['design', 'printing', 'installation', 'complete']),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', data);
      reset();
      alert('Thank you for your message. We will get back to you soon!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl">
              Get in touch with our team for any questions about our services or to start your project.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Get in Touch
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">
                    Office Location
                  </h3>
                  <p className="mt-1 text-gray-500">
                    123 Business Street<br />
                    Suite 100<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">
                    Phone
                  </h3>
                  <p className="mt-1 text-gray-500">
                    +1 (123) 456-7890
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">
                    Email
                  </h3>
                  <p className="mt-1 text-gray-500">
                    info@hoardease.com
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-12">
              <h3 className="text-lg font-medium text-gray-900">
                Business Hours
              </h3>
              <dl className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <dt className="text-gray-500">Monday - Friday</dt>
                  <dd className="text-gray-900">9:00 AM - 6:00 PM</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Saturday</dt>
                  <dd className="text-gray-900">10:00 AM - 4:00 PM</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Sunday</dt>
                  <dd className="text-gray-900">Closed</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h3>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <Input
                    label="Full Name"
                    {...register('name')}
                    error={errors.name?.message}
                    fullWidth
                  />

                  <Input
                    label="Email Address"
                    type="email"
                    {...register('email')}
                    error={errors.email?.message}
                    fullWidth
                  />

                  <Input
                    label="Phone Number"
                    type="tel"
                    {...register('phone')}
                    error={errors.phone?.message}
                    fullWidth
                  />

                  <Input
                    label="Company (Optional)"
                    {...register('company')}
                    error={errors.company?.message}
                    fullWidth
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Service Interested In
                    </label>
                    <select
                      {...register('service')}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="design">Hoarding Design</option>
                      <option value="printing">Printing Services</option>
                      <option value="installation">Installation</option>
                      <option value="complete">Complete Package</option>
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    fullWidth
                    isLoading={isSubmitting}
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;