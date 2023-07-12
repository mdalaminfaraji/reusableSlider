import React from 'react';
import Slider from './Slider';
import banner1 from './assets/banner1.png'
import banner2 from './assets/banner2.png'
import banner3 from './assets/banner3.png'
import banner4 from './assets/banner4.png'
const App = () => {
  const slides = [
    banner1,
    banner2,
    banner3,
    banner4
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 mx-auto w-48">My Slider</h1>
      <Slider slides={slides} />
    </div>
  );
};

export default App;
