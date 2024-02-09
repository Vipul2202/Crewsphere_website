import React from 'react';
import SamarthJain from '../../src/assets/Samarth Jain.png';
import SiviaGoyal from '../../src/assets/Sivia Goyal.png';
import UjjwalSinghla from '../../src/assets/Ujjwal Singhla.png';

const Cards = () => {
  const cards = [
    {
      description: "I am thrilled to share my enthusiasm for Crewsphere: ICP Indian Hub’s exceptional efforts in taking this initiative at building a one of its kind community in India from beginners to experts in blockchain space by forging associations. As a metaverse company founder, I can attest to the importance of collaboration and the value of nurturing talent myself.",
      name: "Ujjwal Singhla",
      image: UjjwalSinghla,
      paragraph: "CEO, Volaverse, Web3 Education Metaverse",
    },
    {
      description: "ICP Hub India is a great initiative which should help web3 startups like ours in a great way. We have always found it difficult to get the best talent in India as awareness about web3 development is very low but with such great initiative coming up, soon India will be a force to reckon with.",
      name: "Sivia Goyal",
      image: SamarthJain,
      paragraph: "CEO, Yschool Learning app",
    },
    { 
      description: "Initiative like Crewsphere: ICP Hub India is a blessing for students like me. I have been active in the field of blockchain for the last one year but I have found it difficult to connect with like-minded people. But now things should change with Crewsphere ICP Hub India. Looking forward to this in future.",
      name: "Samarth Jain",
      image: SiviaGoyal,
      paragraph: "Student, Thapar University, India",
    }
  ];

  return (
    <div className= "bg-blue-900 md:h-screen h-full flex flex-col justify-center items-center md:mt-0 mt-8 flex-wrap">
      <div className="flex flex-wrap justify-center w-full md:gap-32">
        {cards.map((card, index) => (
          <div className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 transition duration-300 relative ${index === 1 ? 'mb-10' : 'mt-7'}`} key={index}>
            <div className="border border-white rounded-lg overflow-hidden w-full h-full relative">
              <div className="relative bg-gradient-to-b from-purple-600 to-indigo-600 text-white p-8 h-full  gap-">
                <p className="text-sm mb-4">{card.description}</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full overflow-hidden flex justify-center rounded-xl mt-9 mb-[-3rem] ">
              <img
                src={card.image}
                alt="Card"
                className="w-28 h-32"
                style={{ marginTop: '-10px', marginBottom: '-10px' }} 
              />
            </div>
            <div> </div>
            <div className='mt-16'>
              <p className="text-white text-center">{card.name}</p>
              <p className="text-xs text-white text-center">{card.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;