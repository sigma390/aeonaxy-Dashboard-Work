
import { FaClock } from 'react-icons/fa';
import Timer from '../Timer/Timer';

const Navbar = () => {
  const isSmallScreen = window.innerWidth <= 480 ; // Define a threshold for small screens
  const isSmallestScreen = window.innerWidth<=400;
  return (


    <>
    {
      isSmallScreen?(
        isSmallestScreen?(<div className='flex flex-row bg-[#fadfb4] '>
      
        <FaClock className="ml-3 mt-6  opacity-65 text-2xl " />
        
      
      <div className="mt-4 p-2 mb-1 ml-3 items-center">
      <p className='text-md font-bold' >Discount expires in </p>
      
      </div>
      <div className="mt-3 p-2 mb-3  items-center"><Timer/></div>
      

      
      <button className=' hover:scale-105 duration-150 bg-[#e89ba4] w-auto h-10 font-bold rounded-xl mt-3 mb-3 p-1'>Claim Discount</button>
    
     
      
      
    </div>

        ):
        <div className='flex flex-row bg-[#fadfb4] '>
      
        <FaClock className="ml-3 mt-6  opacity-65 text-2xl " />
        
      
      <div className="mt-3 p-2 mb-3 ml-3 items-center">
      <p className='text-lg font-bold' >Discount expires in </p>
      
      </div>
      <div className="mt-3 p-2 mb-3  items-center"><Timer/></div>
      

      
      <button className=' hover:scale-105 duration-150 bg-[#e89ba4] w-auto h-10 font-bold rounded-xl mt-3 mb-3 p-2'>Claim Discount</button>
    
     
      
      
    </div>

      )
      :
      <div className='flex flex-row bg-[#fadfb4] '>
      <div className="flex mt-3 mb-3 ml-5 items-center bg-[#f5c67a] rounded-full">
        <FaClock className="ml-3 opacity-65 " />
        <p className='p-2 font-bold text-[#594433] mr-2'>One-time Offer</p>
      </div>
      <div className="mt-3 p-2 mb-3 ml-3 items-center">
      <p className='text-xl font-bold' >Your Ai Storyboarding Bundle Discount expires in </p>
      
      </div>
      <div className="mt-3 p-2 mb-3  items-center"><Timer/></div>

      
      <button className=' hover:scale-105 duration-150 bg-[#e89ba4] font-bold rounded-xl mt-3 mb-3 p-3'>Claim Discount</button>
    
     
      
      
    </div>

    }
    
    
    </>
    
  );
};

export default Navbar;
