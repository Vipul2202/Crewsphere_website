import React from 'react';
import Group from '../../src/assets/Group.png';

const Gallery = () => {
  return (
    <div className='bg-blue-900 h-full '>
      <div className="text-center">
        <h3 className='text-white text-md font-bold mt-8 md:pl-2 lg:pl-10'>Highlights</h3>
        <h1 className="text-white text-4xl font-bold mt-2">Our gallery & <span className='text-black'>sessions</span></h1>
        <div className='flex justify-center py-10'>
          <img src={Group} alt="Logo" className="w-full md:w-[80%] lg:w-[70%] xl:w-[60%] p-6 rounded-lg" />
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <div className="text-center">
          <p className="text-gray-300 text-lg">TESTIMONIALS</p>
          <h2 className="text-white text-3xl font-bold py-4">Voices Of Satisfaction</h2>
          <p className='text-white text-md mb-4'>Unveiling the Power of Positive Experiences</p>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
