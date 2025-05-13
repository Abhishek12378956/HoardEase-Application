import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const CTASection: React.FC = () => {
  return (
    <section className="bg-blue-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-blue-200">Create your first hoarding order today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-100">
            Join hundreds of businesses that trust HoardEase for their hoarding needs.
            Sign up now and experience seamless service from design to installation.
          </p>
        </div>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 space-x-4">
          <Link to="/register">
            <Button
              className="py-3 px-6 bg-white text-blue-600 hover:bg-blue-50 border-none"
            >
              Get Started
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              variant="outline"
              className="py-3 px-6 border-white text-white hover:bg-blue-700"
            >
              Contact Sales
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;