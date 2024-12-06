import React from 'react';
import { ArrowRight, Building2, Ruler, Users } from 'lucide-react';
import { TestimonialCard } from '../components/TestimonialCard';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 flex items-center min-h-screen">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-6">
              Building Dreams,<br />Crafting Excellence
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              South Africa's premier construction and development company specializing
              in plot and plans, bringing your vision to life with precision and expertise.
            </p>
            <div className="flex space-x-4">
              <a
                href="/contact"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Get Started
              </a>
              <a
                href="/services"
                className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-colors"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose CSM Cape?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With years of experience in construction and development, we deliver
              excellence in every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Building2 className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Development</h3>
              <p className="text-gray-600">
                Specialized in residential and commercial development projects
              </p>
            </div>
            <div className="text-center">
              <Ruler className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Plot and Plans</h3>
              <p className="text-gray-600">
                Professional architectural services and planning solutions
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Client-Focused</h3>
              <p className="text-gray-600">
                Dedicated to exceeding client expectations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="John van der Merwe"
              role="Property Developer"
              content="CSM Cape transformed our vision into reality. Their attention to detail and professional approach made the entire process smooth and enjoyable."
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
            />
            <TestimonialCard
              name="Sarah Naidoo"
              role="Homeowner"
              content="The team's expertise in plot and plans was invaluable. They guided us through every step and delivered beyond our expectations."
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
            />
            <TestimonialCard
              name="David Botha"
              role="Business Owner"
              content="Outstanding service and communication throughout our commercial project. CSM Cape is definitely our go-to construction partner."
              image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let's bring your
            construction dreams to life.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-orange-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Contact Us <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
}