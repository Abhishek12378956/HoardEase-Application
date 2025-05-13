import React from 'react';
import { Users, Award, Target, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';

const stats = [
  {
    title: 'Years of Experience',
    value: '10+',
    icon: <Award className="h-8 w-8 text-blue-600" />,
    description: 'Serving businesses since 2014',
  },
  {
    title: 'Happy Clients',
    value: '500+',
    icon: <Users className="h-8 w-8 text-green-600" />,
    description: 'Trusted by leading brands',
  },
  {
    title: 'Projects Completed',
    value: '2000+',
    icon: <Target className="h-8 w-8 text-purple-600" />,
    description: 'Across multiple industries',
  },
  {
    title: 'Growth Rate',
    value: '40%',
    icon: <TrendingUp className="h-8 w-8 text-orange-600" />,
    description: 'Year over year expansion',
  },
];

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              About HoardEase
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl">
              We're revolutionizing the hoarding industry by connecting businesses with top designers and vendors through our innovative platform.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 rounded-full bg-gray-100">
                      {stat.icon}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 text-center">
                    {stat.value}
                  </h3>
                  <p className="text-lg font-medium text-gray-600 text-center">
                    {stat.title}
                  </p>
                  <p className="mt-2 text-sm text-gray-500 text-center">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              To streamline the hoarding industry by providing a seamless platform that connects businesses with skilled designers and reliable vendors, ensuring quality and efficiency at every step.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    For Businesses
                  </h3>
                  <p className="text-gray-600">
                    We understand the challenges businesses face when managing hoarding projects. Our platform simplifies the entire process, from design to installation, saving you time and resources while ensuring top-quality results.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    For Professionals
                  </h3>
                  <p className="text-gray-600">
                    We provide designers and vendors with a steady stream of projects, automated workflows, and tools to showcase their expertise. Join our network to grow your business and focus on what you do best.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Leadership Team
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Meet the experts behind HoardEase
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO & Founder',
                image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
                bio: '15+ years of experience in digital transformation and business strategy.',
              },
              {
                name: 'Michael Chen',
                role: 'CTO',
                image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
                bio: 'Tech veteran with expertise in building scalable platforms.',
              },
              {
                name: 'Elena Rodriguez',
                role: 'Head of Operations',
                image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
                bio: 'Operations expert specializing in process optimization.',
              },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="space-y-4">
                  <img
                    className="mx-auto h-40 w-40 rounded-full object-cover"
                    src={member.image}
                    alt={member.name}
                  />
                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3 className="text-gray-900">{member.name}</h3>
                      <p className="text-blue-600">{member.role}</p>
                    </div>
                    <p className="text-gray-500">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;