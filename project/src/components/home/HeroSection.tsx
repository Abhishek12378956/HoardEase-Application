import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="pt-10 sm:pt-16 lg:pt-8 xl:pt-16">
            <div className="sm:text-center lg:text-left px-4 sm:px-8 xl:pl-0">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Simplify your</span>
                <span className="block text-blue-600">Hoarding Services</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
                HoardEase connects you with professional designers and installers for seamless hoarding services. From design to installation, we handle everything so you can focus on your business.
              </p>
              
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link to="/register">
                    <Button size="lg" className="w-full">
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link to="/services">
                    <Button variant="outline" size="lg" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="mt-6 sm:mt-8">
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-500">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Professional designers at your service</span>
                  </li>
                  <li className="flex items-center text-gray-500">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Hassle-free printing and installation</span>
                  </li>
                  <li className="flex items-center text-gray-500">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Real-time order tracking</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.pexels.com/photos/7709020/pexels-photo-7709020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Billboard installation"
        />
      </div>
    </div>
  );
};

export default HeroSection;