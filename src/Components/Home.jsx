import React, { useState } from 'react';
import logo8 from '../../src/assets/logo8.png';
import icp1 from '../../src/assets/icp1.png';
import './Home.css'; 

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="navbar bg-custom-color  text-white p-4 flex justify-between items-center">
        <div className="mx-8">
          <img src={logo8} alt="Logo" className="h-12 md:h-16 lg:h-20" />
        </div>
        <div className="hidden lg:flex lg:space-x-4">
          <a href="#about" className="hover:text-gray-300">ABOUT</a>
          <a href="#team" className="hover:text-gray-300">OUR TEAM</a>
          <a href="#gallery" className="hover:text-gray-300">GALLERY</a>
          <a href="#testimonials" className="hover:text-gray-300">TESTIMONIALS</a>
          <a href="#faqs" className="hover:text-gray-300">FAQS</a>
        </div>
        <button className="lg:hidden px-4 py-2 bg-pink-500 hover:bg-pink-600 rounded-md" onClick={() => setIsOpen(!isOpen)}>Menu</button>
        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <a href="#about" className="block py-2 px-4 text-white hover:text-gray-300">ABOUT</a>
          <a href="#team" className="block py-2 px-4 text-white hover:text-gray-300">OUR TEAM</a>
          <a href="#gallery" className="block py-2 px-4 text-white hover:text-gray-300">GALLERY</a>
          <a href="#testimonials" className="block py-2 px-4 text-white hover:text-gray-300">TESTIMONIALS</a>
          <a href="#faqs" className="block py-2 px-4 text-white hover:text-gray-300">FAQS</a>
        </div>
        <div className='pr-8 lg:pr-36'> 
          <button className="hidden lg:block px-6 font-bold py-2 bg-gradient-to-r from-pink-600 to-purple-700 rounded-full">Apply Now</button>
        </div>
      </div>
      <div></div>

      <div className=" content  min-h-screen px-[10%] py-[4%] flex flex-col justify-between" style={{ backgroundColor: '#100025' }}>
        <div className="flex flex-col md:flex-row justify-center items-center py-4  md:py-4">
          <div className="w-full md:w-7/12 px-4">
            <h2 className="text-white font-bold">ABOUT US</h2>
            <header className="text-white text-3xl font-bold py-4">
              <h1>EMPOWERING STARTUPS </h1>
              <h1>TO ACHIEVE THEIR </h1>
              <h1 className='text-gradient-to-br from-purple-700 via-purple-600 to-indigo-700'>VISION</h1>
            </header>
            <section id="about" className="mb-8">
              <p className="text-md text-white">
                At our incubator, we are dedicated to supporting startups by 
                providing them with the resources, mentorship, and collaboration opportunities they need to succeed. We believe in fostering a vibrant entrepreneurial ecosystem and helping startups turn their ideas into reality.
              </p>
              <div className="flex justify-start space-x-4 mt-12 ">
                <button className="bg-white font-bold text-black md:py-2 py-0 md:px-6 px-3 rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-700 hover:text-white hover:font-bold">Learn more</button>
                <button className="bg-white font-bold text-black py-2 md:px-6 px-3 border border-white rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-700 hover:text-white hover:font-bold">Sign In</button>
              </div>
            </section>
          </div>
          <img src={icp1} alt="Description of the image" className="w-full md:w-5/12 mt-8 md:mt-0 hidden-sm" style={{maxWidth: "400px"}} />


        </div>

        <div className="flex justify-center items-center mt-6">
          <div >
            <p className="text-gray-300 text-lg">INNOVATE</p>
            <h2 className="text-white text-3xl font-bold  py-4 ">MEET OUR CO-FOUNDERS</h2>
            <p className='text-white text-md flex justify-center mb-4 '>Get to know the talented individuals behind our incubator</p>
            {/* Co-founders Content */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
