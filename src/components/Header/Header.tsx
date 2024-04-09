
import Searchbar from '../Searchbar/Searchbar';



import { BsLightningChargeFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className='flex justify-between items-center h-24 bg-white'>
      <div className='flex items-center'>
        <div className="bg-black flex items-center justify-center rounded-full w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-3 sm:mb-0 md:mb-0 lg:mb-0 mt-6 ml-6">
          <div className='text-white font-bold text-sm sm:text-xl md:text-2xl'>B</div>
        </div>
        <div className="mt-6 p-2 mb-3 ml-3 items-center">
          <p className='text-2xl sm:text-2xl md:text-3xl font-custom'>Project Dashboard </p>
        </div>
      </div>

      {/* Hide search bar and quick start button on mobile screens */}
      <div className="hidden md:flex items-center">
        <div><Searchbar /></div>
        <div className='ml-3'>
          <button className='bg-[#e8f4fa] hover:scale-105 duration-200 font-bold border-2 rounded-md border-blue-200 mt-3 mb-3 p-2'>Quick Start</button>
        </div>
        <div className="bg-[#f6c482] flex items-center hover:scale-105 duration-200 justify-center rounded-full h-10 w-10 border-2 border-black ml-3">
          <div className='text-black font-bold m-2 text-2xl'>A</div>
        </div>
        <div className="bg-black flex items-center hover:scale-105 duration-200 justify-center rounded-full h-10 w-10 border-2 border-black mr-2 ml-3">
          <BsLightningChargeFill className='text-xl text-white' />
        </div>
      </div>
    </div>
  );
};

export default Header;