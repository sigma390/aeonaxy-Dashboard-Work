import React, { useState } from 'react';
import ListProjects from '../Project/ListProjects';

// Define the type for the project
export type Project = {
  image: string;
  name: string;
  id: number;
  modified: string;
};

const Home: React.FC = () => {
  // State to manage projects
  const [projects, setProjects] = useState<Project[]>([]);

  // State to indicate if we are adding a new project
  const [addingProject, setAddingProject] = useState<boolean>(false);

  // Function to add a new project

  // Function to handle click on square to add a project
  const handleClick = () => {
    setAddingProject(true); // Set flag to indicate that we're adding a new project
  };

  return (
    <div>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex items-center'>
          <div className="bg-[#f6c482] flex ml-10 mt-10 items-center hover:scale-105 duration-200 justify-center rounded-full h-8 w-8 border-2 border-black">
            <div className='text-black font-bold m-2 text-xl'>A</div>
          </div>
          <h1 className='mr-2 mt-10 ml-2 text-lg sm:text-2xl md:text-2xl lg:text-2xl font-bold'>Adam Cooper Team</h1>
        </div>
        <button className='mr-10 mt-10 bg-black px-4 py-2 font-semibold text-white rounded-lg' onClick={handleClick}>New project</button>
      </div>
      {/* Render list of projects */}
      <ListProjects projects={projects} />
    </div>
  );
};

export default Home;
