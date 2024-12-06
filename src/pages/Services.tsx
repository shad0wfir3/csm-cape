import React from 'react';
import { Building2, PenTool, Home, Factory, Warehouse } from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';

export function Services() {
  const services = [
    {
      title: 'Plot and Plans',
      description: 'Professional architectural design and planning services for your dream property.',
      icon: <PenTool className="h-8 w-8" />,
      price: '15,000'
    },
    {
      title: 'Residential Development',
      description: 'Custom home construction and residential property development.',
      icon: <Home className="h-8 w-8" />,
      price: '1,500,000'
    },
    {
      title: 'Commercial Construction',
      description: 'Full-service commercial building construction and renovation.',
      icon: <Building2 className="h-8 w-8" />,
      price: '3,000,000'
    },
    {
      title: 'Industrial Development',
      description: 'Specialized industrial facility construction and infrastructure development.',
      icon: <Factory className="h-8 w-8" />,
      price: '5,000,000'
    },
    {
      title: 'Property Renovation',
      description: 'Complete property renovation and modernization services.',
      icon: <Warehouse className="h-8 w-8" />,
      price: '500,000'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Comprehensive construction and development solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                price={service.price}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Initial meeting to discuss your project requirements'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Detailed project planning and design development'
              },
              {
                step: '03',
                title: 'Construction',
                description: 'Expert execution of your construction project'
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Final inspection and project handover'
              }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}