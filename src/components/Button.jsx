import React from 'react';
import './Button.css';
import { HiArrowNarrowRight } from 'react-icons/hi';

const MyButton = () => {
  return (
    <button className='glowing-btn text-white uppercase font-bold border-green-400 group border-2 px-6 py-3 my-2 flex items-center hover:bg-green-200 hover:border-green-400 hover:text-black relative overflow-hidden'>
      View Work
      <span className='group-hover:rotate-90 duration-300'>
        <HiArrowNarrowRight className='ml-3' />
      </span>
    </button>
  );
};

export default MyButton;