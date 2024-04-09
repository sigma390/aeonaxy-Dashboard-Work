
import { IoSearchSharp } from 'react-icons/io5';

const Searchbar = () => {
  return (
    <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
      <IoSearchSharp className="text-gray-500 mr-2" />
      <input
        type="text"
        placeholder="Search my Storyboards"
        className="flex-grow outline-none" // Use flex-grow to make input element take remaining space
      />
    </div>
  );
};

export default Searchbar;
