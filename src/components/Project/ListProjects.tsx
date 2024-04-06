import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { ProjectCardProps } from './ProjectCard';
import NewProject from './NewProject';
import AddProjectSquare from './AddProjectSquare';

type ListProjectsProps = {
  projects: ProjectCardProps[]; // Array of projects
};

const ListProjects: React.FC<ListProjectsProps> = ({ projects }) => {
  // State to manage projects
  const [allProjects, setAllProjects] = useState<ProjectCardProps[]>(projects);
  // State to manage NewProject visibility
  const [showNewProject, setShowNewProject] = useState(false);

  // Function to add a new project
  const addProject = (newProject: ProjectCardProps) => {
    setAllProjects([...allProjects, newProject]);
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
      <h2 className="text-2xl font-bold mb-4">List of Projects</h2>
      <div className="flex flex-wrap">
        {allProjects.map((project, index) => (
          <div key={index} className="border border-gray-300 rounded-md p-4 mb-4 mr-4" style={{ flexBasis: 'calc(25% - 16px)' }}>
            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
            <p>ID: {project.id}</p>
            <p>Last Modified: {project.modified}</p>
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
