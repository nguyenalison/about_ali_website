import React from 'react';
import './Work.css';

function Work() {
    return (
      <div className="body">  
        <div className='work'> 
          <article className='amazon'>
            <h2><span className='experienceType'>Software Engineer Intern - Amazon </span><span className='dates'>June 2022 - September 2022</span></h2><br></br>
            <p>During this project, I developed an end-to-end web service to streamline the onboarding process and enhance communication for internal customers. The initial milestone focused on building a customer-facing self-service portal for new registrations. The front-end incorporated a user-friendly table view of current customers and their locations, enabling easy registration. Additionally, the portal allowed users to register new routes with the Alexa Routes Team. On the backend, I implemented automated input parsing and sanitation to manage new routing information, which was stored in a routing file. This file automatically triggered a code review process for the Team's approval.</p>
            <h3>Technologies:</h3>
            <p className='technologies'>AWS Lambda, Node.js, React.js, Java, REST API, CI/CD pipelines, Amazon Internal Services, Jira, API Gateway</p>
          </article>
          <article className='convege'>
            <h2><span className='experienceType'>Software Engineer Intern - Converge Media LLC </span><span className='dates'>September 2022 - June 2023</span></h2><br></br>
            <p>During my tenure, I took charge of developing an over-the-top application on Roku devices, facilitating the migration of Converge Media from 3rd party apps. My responsibilities involved designing the project scope and plan in alignment with customer requirements while ensuring optimized streaming performance through comprehensive database service exploration. To create a seamless user experience, I successfully implemented a clean and user-friendly frontend that enhanced navigation and usability. Throughout the project, I collaborated closely with a team, utilizing Agile methodology to improve project management efficiency and deliver high-quality software within the specified timeline. The technologies employed included  allowing for a comprehensive and impactful development process.</p>
            <h3>Technologies:</h3>
            <p className='technologies'>Azure Blog Storage, MongoDB, BrightScript, XML, SceneGraph, Github, Figma</p>
            <button>Click for final presentation</button>
          </article>
          <article className='coder-school'>
            <h2><span className='experienceType'>Programming Instructor - The Coder School Bellevue </span><span className='dates'>April 2020 - June 2022</span></h2><br></br>
            <p>During my time as a Code Coach at The Coder School Bellevue, I conducted 2:1 lessons, classes, and camps in various programming languages, implementing a comprehensive curriculum that covered data structures and object-oriented concepts. With a strong focus on personalized learning, I tailored each experience to enable students to advance according to their individual skill levels. Additionally, I diligently generated weekly progress notes, detailing learning objectives and tracking student advancements to ensure their continuous growth. My commitment to fostering a positive and engaging learning environment has been instrumental in encouraging curiosity and ensuring the enjoyment of learning for all students under my guidance.</p>
            <h3>Technologies:</h3>
            <p className='technologies'>Python, HTML, CSS, Scratch</p>
            <button>Click for final presentation</button>
          </article>
        </div>
      </div>
      
    );
  }

  export default Work