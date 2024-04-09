import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { HiOutlineFolderOpen } from "react-icons/hi";
import { SlOptionsVertical } from "react-icons/sl";
import { ProjectCardProps } from './ProjectCard';
import NewProject from './NewProject';
import AddProjectSquare from './AddProjectSquare';
import img from '../../assets/1.jpg'
type ListProjectsProps = {
  projects: ProjectCardProps[]; // Array of projects
};

const ListProjects: React.FC<ListProjectsProps> = ({ projects }) => {
  // State to manage projects
  const [allProjects, setAllProjects] = useState<ProjectCardProps[]>(projects);
  // State to manage NewProject visibility
  const [showNewProject, setShowNewProject] = useState(false);
  const [noStryBoards,setStoryBrds] = useState<number>(0);

  // Function to add a new project
  const addProject = (newProject: ProjectCardProps) => {
    setAllProjects([...allProjects, newProject]);
    setStoryBrds((prevNoStryBoards) => prevNoStryBoards + 1);
    setShowNewProject(false); // Close the NewProject popup after adding the project
  };

  // Function to handle click on AddProjectSquare
  const handleAddProjectClick = () => {
    setShowNewProject(true);
  };
  // Function to close the NewProject component
  const handleCloseNewProject = () => {
    setShowNewProject(false);
  };

  return (
    <div className='mr-10 ml-10 bg-white mt-10'>
      {/* <h2 className="text-2xl font-bold mb-4">List of Projects</h2> */}
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row m-4 '>
        <p className='text-4xl m-2'><HiOutlineFolderOpen /></p>
        <div className=''>
          <h1 className='font-semibold text-xl ml-2 mt-2'>Default Project</h1>
          <p className='font-base text-md ml-2 mb-1 mt-0 text-gray-600'>{noStryBoards} storyboard</p>
        </div>

          


        </div>

        <div className='flex flex-row m-4 '>
          <p className='m-2'><SlOptionsVertical /></p>

          <div className='m-2'>
          <select className='w-5' >
          <option value=""></option>
          {allProjects.map((project, index) => (
    <option key={index} value={project.name}>{project.name}</option>
  ))}
          </select>


          </div>
          
        </div>

      </div>
      <div className="grid m-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 ">
        {allProjects.map((project, index) => (
          <div key={index} className="border border-gray-300 rounded-md p-4 mb-4 mr-4" style={{ flexBasis: 'calc(25% - 16px)' }}>
            
            <img src={img} alt="" className='w-full' />
            <h5 className="text-lg font-semibold mt-2 mb-1">{project.name}</h5>
            <p className='text-xs'>Updated {project.modified}</p>
            {/* Add more project details here if needed */}
          </div>
        ))}
        <AddProjectSquare onClick={handleAddProjectClick} />
      </div>
      {/* Render NewProject component as a modal if showNewProject is true */}
      {showNewProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <NewProject addProject={addProject} onClose={handleCloseNewProject} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ListProjects;
