import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import projectList from '../../assets/projects.json';
import Project from '../Project';

import '../Projects.css';

function Projects() {
  const [projects] = useState(projectList);

  return (
    <>
     <Container>
       <div className='content'>
       <h1>projects</h1>
       <p>Check out some of my work! I have experience with ES6 syntax and the MERN stack. Currently working on mastering CSS, client-side JavaScript, and front end tools.</p>
       </div>
       
       <div>
        {/* for each project, return a project component with the appropriate information */}
        {projects.map((project) => {
          return (
            <Project 
            key={project.id}
            title={project.title}
            desc={project.description}
            livelink={project.livelink}
            codelink={project.codelink}
            technologies={project.technologies}
            img={project.img}
             />
          );
        })}
     </div>

     </Container>
     
           
    </>
  );
}

export default Projects;
