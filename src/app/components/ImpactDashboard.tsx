'use client'

import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

const impactMetrics = [
  {
    id: 1,
    title: 'Waste Recycled',
    value: 25000,
    unit: 'kg',
    icon: '♻️'
  },
  {
    id: 2,
    title: 'CO2 Emissions Saved',
    value: 15000,
    unit: 'kg',
    icon: '🌱'
  },
  {
    id: 3,
    title: 'Products Created',
    value: 1200,
    unit: 'items',
    icon: '🛠️'
  },
  {
    id: 4,
    title: 'Community Members',
    value: 500,
    unit: 'people',
    icon: '👥'
  }
];

const ImpactDashboard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} id="impact" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Our Impact</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Making a difference, one recycled item at a time. Our commitment to sustainability creates lasting positive change.
        </p>

        {/* Impact Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {impactMetrics.map((metric) => (
            <div
              key={metric.id}
              className="bg-white rounded-xl p-8 shadow-lg transform transition-all duration-300 
                hover:scale-105 hover:shadow-xl border border-green-100"
            >
              <div className="text-5xl mb-6">{metric.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{metric.title}</h3>
              <div className="text-4xl font-bold text-green-600 mb-2">
                {isVisible && (
                  <CountUp
                    end={metric.value}
                    duration={2.5}
                    separator=","
                    enableScrollSpy
                  />
                )}
              </div>
              <div className="text-gray-500 font-medium">{metric.unit}</div>
            </div>
          ))}
        </div>

        {/* Environmental Benefits */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-4 text-gray-800">Environmental Benefits</h3>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Our sustainable practices create multiple positive impacts for our planet and communities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100">
              <h4 className="text-xl font-bold mb-6 text-gray-800">Resource Conservation</h4>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">•</span>
                  <span className="text-lg">Reduced landfill waste</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">•</span>
                  <span className="text-lg">Saved raw materials</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">•</span>
                  <span className="text-lg">Minimized water usage</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100">
              <h4 className="text-xl font-bold mb-6 text-gray-800">Community Impact</h4>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">•</span>
                  <span className="text-lg">Created local jobs</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">•</span>
                  <span className="text-lg">Increased awareness</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">•</span>
                  <span className="text-lg">Supported education</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100">
              <h4 className="text-xl font-bold mb-6 text-gray-800">Future Goals</h4>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">•</span>
                  <span className="text-lg">Expand recycling capacity</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">•</span>
                  <span className="text-lg">Innovate new products</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">•</span>
                  <span className="text-lg">Grow community network</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactDashboard; 