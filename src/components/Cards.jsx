import React from 'react';
import { FaLaptop, FaLaptopCode, FaThumbsUp, FaCog, FaPen, FaVideo, FaChartBar, FaHome } from 'react-icons/fa';

const Cards = () => {
  // Array of service objects
  const services = [
    {
      icon: FaLaptop,
      title: 'Web Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore consequuntur itaque dolore est.'
    },
    {
      icon: FaLaptopCode,
      title: 'Web Development',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore consequuntur itaque dolore est.'
    },
    {
      icon: FaThumbsUp,
      title: 'Digital Marketing',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore consequuntur itaque dolore est.'
    },
    {
      icon: FaCog,
      title: 'SEO',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore consequuntur itaque dolore est.'
    },
    {
      icon: FaLaptop,
      title: 'Web Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore consequuntur itaque dolore est.'
    },
    {
      icon: FaLaptopCode,
      title: 'Web Development',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore consequuntur itaque dolore est.'
    },
    {
      icon: FaThumbsUp,
      title: 'Digital Marketing',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore consequuntur itaque dolore est.'
    },
    {
      icon: FaCog,
      title: 'SEO',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore consequuntur itaque dolore est.'
    },

  ];

  return (
    <div>
      <div className="max-w-[1320px] md:py-[80] mx-auto py-5">
        <h1 className="text-4xl font-bold text-center">Our Services</h1>
      </div>
      <div className="max-w-[1200px] mx-auto py-[30px] text-center grid lg:grid-cols-4 sm:grid-cols-2 gap-5 ">
        {/* Mapping over the services array to generate card components */}
        {services.map((service, index) => (
          <div key={index} className="group cursor-pointer flex justify-center items-center flex-col shadow-lg p-5 text-center hover:bg-blue-600 hover:text-white duration-1000">
            <service.icon className="animate-bounce text-blue-800 text-2xl group-hover:text-white duration-1000" />
            <h1 className="text-2xl py-2">{service.title}</h1>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
