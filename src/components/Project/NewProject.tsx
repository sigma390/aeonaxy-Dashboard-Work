import React, { useState } from 'react';
import { ProjectCardProps } from './ProjectCard';
import { Project } from '../Home/Home';
import { IoIosCloseCircleOutline } from "react-icons/io";
import DarkModeToggle from '../UI/Toggle';
type NewProjectProps = {
  addProject: (project: ProjectCardProps) => void; // Function to add new project
  onClose: () => void;
};

const NewProject: React.FC<NewProjectProps> = ({ addProject, onClose }) => {
  // State to manage form inputs
  const [name, setName] = useState('');
  const [frameSize, setFrameSize] = useState('small'); // Default frame size


    //date thing
    const currentDate = new Date();

// Get day, month, and year
const day = currentDate.getDate();
const monthIndex = currentDate.getMonth();
const year = currentDate.getFullYear();

// Array of month names
const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

// Get the month name from the array using the month index
const month = monthNames[monthIndex];

// Format the date string
const formattedDate = `${day} ${month} ${year}`;

console.log(formattedDate);



  //function to close 
  function closeIt(){
    onClose();

  }

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Create a new project object
    const newProject: Project = {
      image: '../../assets/1.jpg', // Add image path if required
      name,
      id: Date.now(), // Generate unique ID for the project
      modified: formattedDate, // Store current date as modified date
    };

    // Call addProject function from props to add the new project
    addProject(newProject);

    // Reset form inputs
    setName('');
    setFrameSize('small'); // Reset frame size to default
  };

  return (
    <div className="p-4 w-96">
      <div className='flex flex-row justify-between'>
        <h1 className="text-2xl mb-4 font-custom">New StoryBoard</h1>
        <button  className="text-2xl mb-3" onClick={closeIt}><IoIosCloseCircleOutline /></button>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-semibold">Storyboard Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder='e.g.Default Project Storyboard'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
            required // Make the name field required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="frameSize" className="block mb-2 font-semibold">Frame Size</label>
          <select
            id="frameSize"
            name="frameSize"
            value={frameSize}
            onChange={(e) => setFrameSize(e.target.value)}
            className="w-full font-semibold border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
          >
            <option value="small">Landscape (16:9)</option>
            <option value="medium">Portrait(9:16)</option>
            <option value="large">Landscape (4:3)</option>
            <option value="large">Portrait (3:4)</option>
          </select>
        </div>
        <hr />
        <div className='flex flex-row justify-between'>
          <DarkModeToggle/>
        <button type="submit" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700 hover:text-white h-10 mt-6">Create Storyboard</button>


        </div>


        
      </form>
    </div>
  );
};

export default NewProject;
