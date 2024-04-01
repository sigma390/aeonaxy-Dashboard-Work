import React from 'react';
import { FaClock } from 'react-icons/fa';
import Timer from '../Timer/Timer';

const Navbar = () => {
  return (
    <div className='flex flex-row bg-[#fadfb4] '>
      <div className="flex mt-3 mb-3 ml-5 items-center bg-[#f5c67a] rounded-full">
        <FaClock className="ml-3 opacity-65 " />
        <p className='p-2 font-bold text-[#594433] mr-2'>One-time Offer</p>
      </div>
      <div className="mt-3 p-2 mb-3 ml-3 items-center">
      <p className='text-xl font-bold' >Your Ai storyboarding expires in </p>
      
      </div>
      <div className="mt-3 p-2 mb-3  items-center"><Timer/></div>

      
      <button className=' hover:scale-105 duration-150 bg-[#e89ba4] font-bold rounded-xl mt-3 mb-3 p-3'>Claim Discount</button>
    
     
      
      
    </div>
  );
};

export default Navbar;
