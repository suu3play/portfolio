import React from 'react';
import { services } from '../data/portfolio';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="section-title">担当範囲</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="text-center mb-6">
                <i className={`${service.icon} text-5xl text-primary mb-4`}></i>
                <h3 className="text-xl font-semibold text-secondary">
                  {service.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {service.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-600 border-b border-gray-100 pb-2 last:border-b-0"
                  >
                    <span className="text-primary font-bold mt-1 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;