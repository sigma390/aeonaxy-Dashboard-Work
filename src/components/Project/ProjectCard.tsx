import React, { ReactNode } from 'react'

export type ProjectCardProps = {
    image:string,
    name:string,
    id:number,
    modified: string ,
}









const ProjectCard = ({image,name, modified}:ProjectCardProps) => {
  return (
    <div className='h-40 w-40 p-5'>
        <img src={image} alt="" />
        <h1>{name}</h1>
        <p>{modified}</p>
      
    </div>
  )
}

export default ProjectCard
