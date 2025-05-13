import React from 'react';
import { Link } from 'react-router-dom';
import { PaintBucket, Printer, Building2, Users } from 'lucide-react';
import Button from '../ui/Button';

const services = [
  {
    id: 1,
    title: 'Hoarding Design',
    description: 'Our team of expert designers creates eye-catching and effective hoarding designs that convey your message clearly.',
    icon: <PaintBucket className="h-10 w-10 text-blue-600" />,
    link: '/services/design',
  },
  {
    id: 2,
    title: 'Printing Services',
    description: 'High-quality printing ensures your design looks brilliant in real life. We use premium materials for durability.',
    icon: <Printer className="h-10 w-10 text-blue-600" />,
    link: '/services/printing',
  },
  {
    id: 3,
    title: 'Professional Installation',
    description: 'Our skilled installation team ensures your hoarding is properly set up at the right location.',
    icon: <Building2 className="h-10 w-10 text-blue-600" />,
    link: '/services/installation',
  },
  {
    id: 4,
    title: 'End-to-End Solutions',
    description: 'From design to installation, we handle everything so you can focus on your business.',
    icon: <Users className="h-10 w-10 text-blue-600" />,
    link: '/services/complete',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Everything you need for professional hoarding services in one place
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.id} className="group relative bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  {service.description}
                </p>
                <div className="flex justify-center">
                  <Link to={service.link}>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/services">
            <Button size="lg">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;