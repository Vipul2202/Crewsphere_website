import React from 'react';
import a from '../../src/assets/a.png';
import exl from '../../src/assets/exl.png';
import './OurTeam.css';

const OurTeam = () => {
    return (
        <div className="relative flex px-[12%] py-[10%] h-full w-full" style={{ backgroundColor: '#100025' }}>
            {/* Transparent box */}
            {/* Background image */}
            <div
                className="w-full h-[370px]  bg-cover bg-center rounded-xl flex justify-center overflow-hidden"
                style={{ backgroundImage: `url(${a})` }}
            >
                <div className="absolute justify-center md:justify-start md:left-5 md:p-8 flex flex-col md:ml-[250px] mt-8 md:h-[300px] h-[250px] w-[300px] md:w-[400px] md:border border-opacity-2 rounded-lg shadow-lg p-8 ">
                    {/* Heading */}
                    <h1 className="text-white text-4xl font-bold sm:mt-2 mt-10">Apply for Incubator </h1>
                    <h1 className="text-white text-4xl font-bold py-2">Cohort</h1>
                    {/* Paragraph */}
                    <p className="text-white text-lg mt-4">Join our incubator program and take your startup to the next level</p>
                    {/* Buttons */}
                    <div className="flex justify-start space-x-4 mt-8 mb-4">
                        <button className="bg-white text-black sm:py-2 sm:px-2 py-0 px-2 whitespace-nowrap rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-700 hover:text-white hover:font-bold">Apply Now</button>
                        <button className="bg-white text-black py-2 px-6 border border-white whitespace-nowrap rounded-full transition duration-300 hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-700 hover:text-white hover:font-bold">Learn more</button>
                    </div>
                </div>
            </div>

            {/* icp5 image */}
            <img src={exl} alt="icp5"
                className="absolute z-10 w-30 h-[700px] mt-10 right-[0px] top-[-5rem] md:mt-0 hidden-sm overflow-hidden"
            />
        </div>
    );
};

export default OurTeam;
