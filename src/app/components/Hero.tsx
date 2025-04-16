import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10" /> {/* Stronger gradient overlay */}
        <div className="relative w-full h-full">
          <Image
            src="/images/background.jpg"
            alt="Eco-friendly background"
            fill
            className="object-cover object-right"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-white w-full px-4 md:px-8 lg:px-12">
        <div className="max-w-xl pl-4 md:pl-12 lg:pl-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Turning Waste Into Wonderful
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Join us in transforming discarded materials into beautiful, sustainable products
            that make a difference.
          </p>
          <a 
            href="#products" 
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full 
              transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Explore Our Products
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero; 