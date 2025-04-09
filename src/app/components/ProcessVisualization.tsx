import React from 'react';

const steps = [
  {
    id: 1,
    title: 'Collection',
    description: 'We gather waste materials from various sources, ensuring proper segregation.',
    icon: '🔄',
    stat: '1000+ kg collected monthly'
  },
  {
    id: 2,
    title: 'Sorting & Cleaning',
    description: 'Materials are carefully sorted and cleaned for processing.',
    icon: '🧹',
    stat: '95% materials recovered'
  },
  {
    id: 3,
    title: 'Design',
    description: 'Our designers create innovative ways to transform waste into products.',
    icon: '✏️',
    stat: '50+ unique designs'
  },
  {
    id: 4,
    title: 'Transformation',
    description: 'Waste materials are skillfully crafted into beautiful products.',
    icon: '⚒️',
    stat: '100% handcrafted'
  }
];

const ProcessVisualization = () => {
  return (
    <section id="process" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Our Process</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          From waste collection to final product, we ensure every step contributes to a sustainable future.
        </p>
        
        <div className="relative">
          {/* Progress Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-200 to-green-400" />
          
          {/* Steps */}
          <div className="space-y-24 relative">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Icon */}
                <div className="flex-1 flex justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-100 to-green-200 
                    flex items-center justify-center text-5xl shadow-lg transform transition-all duration-300 
                    hover:scale-110 hover:shadow-xl hover:from-green-200 hover:to-green-300">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-block bg-green-50 px-4 py-1 rounded-full mb-4">
                    <span className="text-green-600 font-semibold text-sm">Step {step.id}</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-800">{step.title}</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                  <div className="inline-block bg-green-50 px-6 py-3 rounded-full">
                    <span className="text-green-600 font-semibold">{step.stat}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessVisualization; 