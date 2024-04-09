import React from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";

type AddProjectSquareProps = {
  onClick: () => void;
};

const AddProjectSquare: React.FC<AddProjectSquareProps> = ({ onClick }) => {
  return (
    <div className=" bg-[#f4f5f0]  rounded-md p-4 mb-4 mr-4" style={{ flexBasis: 'calc(25% - 16px)' }} onClick={onClick}>
      <div className="flex opacity-25 items-center justify-center w-full h-full text-6xl  cursor-pointer">
      <IoIosAddCircleOutline />
      </div>
    </div>
  );
};

export default AddProjectSquare;
