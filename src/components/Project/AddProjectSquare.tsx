import React from 'react';
import { FaPlus } from 'react-icons/fa';

type AddProjectSquareProps = {
  onClick: () => void;
};

const AddProjectSquare: React.FC<AddProjectSquareProps> = ({ onClick }) => {
  return (
    <div className="border border-gray-300 rounded-md p-4 mb-4 mr-4" style={{ flexBasis: 'calc(25% - 16px)' }} onClick={onClick}>
      <div className="flex items-center justify-center w-full h-full cursor-pointer">
        <FaPlus />
      </div>
    </div>
  );
};

export default AddProjectSquare;
