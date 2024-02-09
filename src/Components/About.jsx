import React from 'react';
import D from '../../src/assets/D.jpg';
import B from '../../src/assets/B.jpg';

const About = () => {
  
  return (
    <div className="bg-gradient-to-b from-purple-900 to-purple-600 p-8 h-full">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap -mx-4 justify-center md:justify-start">
          
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 p-4">
            <img
              className="w-[250px] pl-6"
              src={B}
              alt="Bandhu Bansal"
            />
            <div className="p-6">
              <h2 className="font-bold  text-white text-xl mb-2">Bandhu Bansal, Co-Founder</h2>
              <p className="text-white max-w-[600px]">
              Bandhul is an Entrepreneur turned investor. He co-founded Finstreet, which is a crypto-based ed-marketing platform. Through Finstreet, he has strived to make comprehensive education about the crypto sector accessible in India. He is also an advisor to Mining Devs, a blockchain-based edtech platoform. Bandhul is also the Advisor for Cryptic Entertainments which is an Edutainment company which aims to raise awareness about crypto. Band- hul's elite expertise in the field of finance has also branded him a regular speaker at leadng institutes such as IITs and IIMs.
              </p>
            </div>
          </div>
       
          <div className="hidden lg:block lg:w-4/12"></div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 p-4">
            <img
              className="w-[250px] pl-6"
              src={D}
              alt="Deepak Goyal"
            />
          <div className="p-6">
  <h2 className="font-bold text-white text-xl mb-2">Deepak Goyal, Co-Founder</h2>
  <p className="text-white max-w-[800px]"> {/* Increased maximum width */}
    An IIT Delhi CS passout, Deepak has been deep into Education for 12+ years. He has mentored many of his students in shaping their career paths and in starting their startup journeys. Being part of many startups himself, he understands the ethos of the startup world and has off-late ventured into Web3.
  </p>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
