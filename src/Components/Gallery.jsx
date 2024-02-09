import React from 'react';
import Group from '../../src/assets/Group.png';

const Gallery = () => {
  return (
    <div className='bg-blue-500 h-full '>
      <div className="text-center">
        <h3 className='text-white text-md font-bold mt-8 md:pl-2 lg:pl-10'>Highlights</h3>
        <h1 className="text-white text-4xl font-bold mt-2">Our gallery & <span className='text-black'>sessions</span></h1>
        <div className='flex justify-center py-10'>
          <img src={Group} alt="Logo" className="w-full md:w-[80%] lg:w-[70%] xl:w-[60%] p-6 rounded-lg" />
        </div>
      </div>
     
    </div>
  );
}

export default Gallery;
