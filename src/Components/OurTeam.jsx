import React from 'react';
import laptop from '../../src/assets/laptop.jpg';
import icp5 from '../../src/assets/icp5.png';
import './OurTeam.css';

const OurTeam = () => {
    return (
        <div className="relative flex px-[12%] py-[10%] bg-blue-900 h-full w-full">
            {/* Transparent box */}


            {/* Background image */}
            <div
                className="w-full h-[370px] bg-cover bg-center rounded-xl flex justify-center"
                style={{ backgroundImage: `url(${laptop})` }}
            >
                <div className="absolute  justify-center md:justify-start  md:left-5 md:p-8 flex flex-col  md:ml-[250px] mt-8 md:h-[300px]  h-[250px] w-[300px] md:w-[400px] bg-white bg-opacity-10 backdrop-filter backdrop-blur-md  border border-opacity-20 border-gray-200 rounded-lg shadow-lg">
                    {/* Heading */}
                    <h1 className="text-black text-4xl font-bold">Apply for Incubator </h1>
                    <h1 className="text-black text-4xl font-bold">Cohort</h1>
                    {/* Paragraph */}
                    <p className="text-black text-lg mt-4">Join our incubator program and take your startup to thr next level</p>
                    {/* Buttons */}
                    <div className="flex justify-start space-x-4 mt-8 mb-4  ">
                        <button className="bg-white text-black py-2 px-6 rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-700 hover:text-white hover:font-bold">Apply Now</button>
                        <button className="bg-white text-black py-2 px-10 border border-white rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-700 hover:text-white hover:font-bold">Learn more</button>
                    </div>
                </div>

            </div>

            {/* icp5 image */}
            <img src={icp5} alt="icp5"
                className="absolute z-10 w-30 h-[700px] mt-10 right-[-81px] top-[-5rem] md:mt-0 hidden-sm "
            />
          <div>

          </div>
        </div>
        
    );
};

export default OurTeam;
