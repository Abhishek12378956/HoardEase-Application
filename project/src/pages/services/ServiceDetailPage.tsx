import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const services = {
  design: {
    title: 'Hoarding Design Services',
    description: 'Professional design services tailored to your brand identity and marketing goals.',
    image: 'https://images.pexels.com/photos/7709020/pexels-photo-7709020.jpeg',
    features: [
      'Custom design creation by professional designers',
      'Multiple revision options to ensure satisfaction',
      'Brand consistency across all materials',
      'High-resolution files for quality printing',
      'Quick turnaround time (2-3 business days)',
      'Consultation with expert designers',
    ],
    process: [
      'Initial consultation to understand requirements',
      'Design brief creation and approval',
      'First design concept presentation',
      'Revisions based on feedback',
      'Final design approval',
      'File preparation for printing',
    ],
    pricing: [
      {
        name: 'Basic Design',
        price: '$299',
        features: [
          '1 design concept',
          '2 revisions',
          'Standard turnaround',
          'Basic file formats',
        ],
      },
      {
        name: 'Premium Design',
        price: '$499',
        features: [
          '3 design concepts',
          'Unlimited revisions',
          'Priority turnaround',
          'All file formats',
          'Social media assets',
        ],
      },
    ],
  },
  printing: {
    title: 'Printing Services',
    description: 'High-quality printing services using premium materials and latest technology.',
    image: 'https://images.pexels.com/photos/5442443/pexels-photo-5442443.jpeg',
    features: [
      'Premium quality materials',
      'Weather-resistant prints',
      'Color accuracy guarantee',
      'Various size options available',
      'Quick turnaround time',
      'Nationwide delivery',
    ],
    process: [
      'Material selection consultation',
      'Color proofing',
      'Production setup',
      'Quality control checks',
      'Packaging and protection',
      'Delivery coordination',
    ],
    pricing: [
      {
        name: 'Standard Print',
        price: '$15/sq ft',
        features: [
          'Standard materials',
          'Basic finishing',
          'Standard delivery',
          'Basic warranty',
        ],
      },
      {
        name: 'Premium Print',
        price: '$25/sq ft',
        features: [
          'Premium materials',
          'Advanced finishing',
          'Express delivery',
          'Extended warranty',
          'Installation included',
        ],
      },
    ],
  },
  installation: {
    title: 'Professional Installation',
    description: 'Expert installation services by certified professionals.',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg',
    features: [
      'Professional installation team',
      'Safety compliance guaranteed',
      'Site preparation included',
      'Post-installation inspection',
      'Cleanup services',
      'Installation warranty',
    ],
    process: [
      'Site survey and assessment',
      'Installation planning',
      'Safety checks and preparations',
      'Professional installation',
      'Quality inspection',
      'Client approval and handover',
    ],
    pricing: [
      {
        name: 'Basic Installation',
        price: '$399',
        features: [
          'Standard installation',
          'Basic site prep',
          'Standard tools',
          'Basic cleanup',
        ],
      },
      {
        name: 'Premium Installation',
        price: '$699',
        features: [
          'Priority installation',
          'Complete site prep',
          'Advanced equipment',
          'Thorough cleanup',
          '1-year warranty',
        ],
      },
    ],
  },
};

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: keyof typeof services }>();
  const service = services[serviceId as keyof typeof services];

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Service not found</h1>
          <Link to="/services" className="mt-4 inline-flex items-center text-blue-600">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative py-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-4 text-xl text-gray-100">
              {service.description}
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">{feature}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="relative">
                <div className="border-2 border-blue-600 rounded-lg p-6">
                  <div className="absolute -top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <p className="mt-4 text-gray-700">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {service.pricing.map((plan, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {plan.name}
                  </h3>
                  <p className="text-4xl font-bold text-blue-600 mb-6">
                    {plan.price}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button fullWidth>
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free consultation
          </p>
          <Link to="/contact">
            <Button className="bg-white text-blue-600 hover:bg-blue-50">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;