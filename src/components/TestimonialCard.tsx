import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  image: string;
}

export function TestimonialCard({ name, role, content, image }: TestimonialProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 relative">
      <Quote className="absolute top-4 right-4 h-8 w-8 text-orange-200" />
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-lg">{name}</h4>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}