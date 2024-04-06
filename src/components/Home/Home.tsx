import React, { useState } from 'react';
import ListProjects from '../Project/ListProjects';
import NewProject from '../Project/NewProject';

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
  const addProject = (newProject: Project) => {
    setProjects([...projects, newProject]);
    setAddingProject(false); // Set addingProject flag to false after adding the project
  };

  // Function to handle click on square to add a project
  const handleClick = () => {
    setAddingProject(true); // Set flag to indicate that we're adding a new project
  };

  return (
    <div className=''>
      <div className='flex flex-row justify-between'>
        <h1>Adam cooper team</h1>
        <button onClick={handleClick}>New project</button>
        
        </div>
      {/* Render list of projects */}
      <ListProjects projects={projects} />
      
      {/* Render square to add a new project */}
      

  
    
    </div>
  );
};

export default Home;
