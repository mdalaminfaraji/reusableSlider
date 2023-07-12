import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide === 0 ? slides.length - 1 : prevSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="relative">
      {/* Display the current slide */}
      <div className='w-96 mx-auto'>
      <img src={slides[currentSlide]} alt="Slide" className="w-full" />
      </div>

      {/* Add navigation buttons */}
      <button
        onClick={handlePrevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-emerald-600 p-2 rounded-full"
      >
      <FaArrowLeft></FaArrowLeft>
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2  p-2 rounded-full bg-emerald-600"
      >
       <FaArrowRight></FaArrowRight>
      </button>
    </div>
  );
};

export default Slider;
