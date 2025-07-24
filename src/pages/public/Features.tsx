import React from 'react';

const Features: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Feature 1</h3>
          <p className="text-gray-600">Description of your first feature.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Feature 2</h3>
          <p className="text-gray-600">Description of your second feature.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Feature 3</h3>
          <p className="text-gray-600">Description of your third feature.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;