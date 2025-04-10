import React from 'react';
import reviews from './data';
import Testimonial from './components/Testimonial';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex flex-col items-center justify-center px-4 py-8 ">
      
      {/* Section Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 tracking-tight drop-shadow-md mb-1">
        Our Testimonial
      </h1>

      {/* Review Card */}
      <Testimonial reviews={reviews} />
    </div>
  );
};

export default App;
