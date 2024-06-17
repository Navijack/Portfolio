import React from 'react';
import { HiArrowNarrowDown, HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>


      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-green-400'>Hi, my name is...</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] text-green-400'>JOHNNY COSTA
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Frontend
          <ReactTyped className="sm:text-7xl text-4xl font-bold text-[#8892b0]"
            strings={['.Developer', '.Designer', '.Enthusiast']} typeSpeed={150} backSpeed={140} loop />
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a frontend developer specializing in building (and occasionally designing)
          exceptional digital experiences. Currently, I’m focused on creating responsive and
          interactive web interfaces
        </p>
        <div>
          <button className='text-green-400 uppercase font-bold animate-pulse
           border-green-400 group border-2 px-6 py-3 my-2 flex items-center hover:bg-green-200 hover:border-green-400
            hover:text-black'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;