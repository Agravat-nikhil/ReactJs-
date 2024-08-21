// App.js
import React, { useState } from 'react';

import '../src/App.css';

function App() {
  const [imageUrls, setImageUrls] = useState([
     ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Beauty Trend</h1>
      <p className="text-lg mb-6">Here to bring your life style to the next level.</p>
     
      <div className="flex justify-center mt-6">
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}

export default App;