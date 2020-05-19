import React from 'react';
import { Container, ButtonGroup, Button, Image } from 'react-bootstrap';

import resumePdf from '../../assets/Resume.pdf';
import mePic from '../../assets/0.jpg';

function About() {
  return (
    <>
      <Container className='content'>
        <h1>about me</h1>
        <div class='introduction'>
          <div class='proPic'>
              {/* insert css avatar here */}
              <Image rounded alt='Lee in business casual' src={mePic} />
          </div>
          <p>I'm passionate about interaction design, front end development, and improving user experiences!</p>
          <p> My current tech stack of choice is MERN, so I'm not only proficient with HTML, CSS and ES6 JavaScript, but also with Mongo, Express, React, and Node.js. I also have experience with jQuery, C#, Java, JSON, JWT, Mongoose, Sequelize, MySQL, Handlebars, AJAX, creating APIs, Git, Github, the command line, Jest, Bootstrap, and Chakra UI.  </p>
          <p>During university, I got a taste for game design and web development and fell in love with user testing and iterative design processes. In my past roles, I was known for going beyond the job description by improving ease of experience for both customers and team members. Currently, I'm enrolled in a Full Stack coding bootcamp where I've gained experience in quickly adapting new tools to build web applications individually and collaboratively using the MERN stack.</p>
          <p>I've been working on building my design skills in my free time: as of late, that's been CSS mini-projects. (I'm creating a personal avatar in CSS to feature here!) To unwind, I play all sorts of games, ice skate, and indulge in fantasy stories.</p>
        </div>
        <div className='resume'>
          <h5>Check out my resume!</h5>
          <ButtonGroup>
            <Button href={resumePdf} target='_blank' rel="noopener noreferrer" className='cusBtn'> 
                resume.pdf
            </Button>
            <Button href='https://docs.google.com/document/d/1a919ip_Vwpq7OwS8rfuUGUdDGF91YuXAspCHcHSWe-0/edit?usp=sharing' target='_blank' rel="noopener noreferrer" className='cusBtn'>
              resume.gdoc
            </Button>
          </ButtonGroup>
        </div>
      </Container>
    </>
  );
}

export default About;
