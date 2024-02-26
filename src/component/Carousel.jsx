// Carousel.js

import React, { useState } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://i.pinimg.com/564x/22/67/69/2267698a25d0a97b1c59b67629e84781.jpg",
    "https://i.pinimg.com/564x/6f/0f/f1/6f0ff1b8cce396552ca06c108ed3f83b.jpg",
    "https://i.pinimg.com/564x/eb/ed/ac/ebedac189a141e86a36280c83f975cb5.jpg"
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="relative w-full p-5">
      <div className="relative h-64 md:h-96 overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full ${
              index === currentSlide ? '' : 'hidden'
            } transition-opacity duration-500 ease-in-out`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 flex items-center justify-center space-x-40 px-4 md:px-6 text-white w-full ">
        <button
          className="bg-black bg-opacity-50 rounded-full p-4 focus:outline-none"
          onClick={prevSlide}
        >
          &lt;
        </button>
        <button
          className="bg-black bg-opacity-50 rounded-full p-4 focus:outline-none"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
