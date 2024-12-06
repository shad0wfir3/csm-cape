import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  price?: string;
}

export function ServiceCard({ title, description, icon, price }: ServiceProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
      <div className="text-orange-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {price && (
        <p className="text-lg font-semibold text-orange-600 mb-4">
          Starting from R{price}
        </p>
      )}
      <button className="flex items-center text-orange-600 hover:text-orange-700">
        Learn More <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </div>
  );
}