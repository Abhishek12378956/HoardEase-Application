import React from 'react';
import { Link } from 'react-router-dom';
import { PaintBucket, Printer, Building2, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';

const services = [
  {
    id: 1,
    title: 'Hoarding Design',
    description: 'Professional design services tailored to your brand',
    icon: <PaintBucket className="h-12 w-12 text-blue-600" />,
    features: [
      'Custom design creation',
      'Brand consistency',
      'Multiple revision options',
      'High-resolution files',
    ],
    price: 'Starting from $299',
  },
  {
    id: 2,
    title: 'Printing Services',
    description: 'High-quality printing with durable materials',
    icon: <Printer className="h-12 w-12 text-blue-600" />,
    features: [
      'Premium materials',
      'Weather-resistant prints',
      'Color accuracy guarantee',
      'Quick turnaround time',
    ],
    price: 'Starting from $499',
  },
  {
    id: 3,
    title: 'Installation',
    description: 'Expert installation by certified professionals',
    icon: <Building2 className="h-12 w-12 text-blue-600" />,
    features: [
      'Professional installation team',
      'Safety compliance',
      'Site preparation',
      'Post-installation inspection',
    ],
    price: 'Starting from $399',
  },
  {
    id: 4,
    title: 'End-to-End Package',
    description: 'Complete solution from design to installation',
    icon: <Users className="h-12 w-12 text-blue-600" />,
    features: [
      'Design consultation',
      'Premium printing',
      'Professional installation',
      'Project management',
    ],
    price: 'Starting from $999',
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl">
              Comprehensive hoarding solutions tailored to your needs. From design to installation, we've got you covered.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {services.map((service) => (
              <Card key={service.id} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-full bg-blue-50">
                      {service.icon}
                    </div>
                    <p className="text-lg font-semibold text-blue-600">
                      {service.price}
                    </p>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-500">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link to="/contact">
                      <Button className="w-full">
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Our Process
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Simple, efficient, and transparent workflow
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {[
                {
                  step: '01',
                  title: 'Consultation',
                  description: 'We discuss your requirements and provide expert recommendations.',
                },
                {
                  step: '02',
                  title: 'Design',
                  description: 'Our designers create custom designs based on your brand guidelines.',
                },
                {
                  step: '03',
                  title: 'Production',
                  description: 'High-quality printing using premium materials and latest technology.',
                },
                {
                  step: '04',
                  title: 'Installation',
                  description: 'Professional installation by our certified team.',
                },
              ].map((phase) => (
                <div key={phase.step} className="relative">
                  <div className="border-2 border-blue-600 rounded-lg p-6">
                    <div className="absolute -top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {phase.step}
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-gray-900">
                      {phase.title}
                    </h3>
                    <p className="mt-2 text-gray-500">
                      {phase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">
              Ready to get started?
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              Contact us today for a free consultation
            </p>
            <div className="mt-8">
              <Link to="/contact">
                <Button className="bg-white text-blue-600 hover:bg-blue-50">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;