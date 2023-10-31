import './Projects.css'
import React from 'react';

function Projects() {
    return (
      <div className="body">  
        <div className='work'> 
          <article className='plantmama'>
            <h2><span className='experienceType'>PlantMama Mobile UX Design </span></h2><br></br>
            <p>This mobile application user interface design PlantMama is a plant identifying, water tracking and community engagement application. It was design to help novice plant enthusiasts get more comfortable and experienced with plants. As college students, we discovered that growing plants in an apartment is much different than growing plants outside in a garden.
            <br></br>
            This project is an extension of the Plant Mama UX design application. The Plant Mama Mobile application will give users a platform to track and capture progress photos of their current house and outdoor plants. An API layer is added for searching and providing plant information. 
            </p>
            <img className='plantmamaPic'src='https://i.imgur.com/yAdc6lU.png'></img>
            <br></br>
            <button>Figma Protype</button>
          </article>
          <article className='converge'>
            <h2><span className='experienceType'>Software Engineer Intern - Converge Media LLC </span></h2><br></br>
            <p>During my tenure, I took charge of developing an over-the-top application on Roku devices, facilitating the migration of Converge Media from 3rd party apps. My responsibilities involved designing the project scope and plan in alignment with customer requirements while ensuring optimized streaming performance through comprehensive database service exploration. To create a seamless user experience, I successfully implemented a clean and user-friendly frontend that enhanced navigation and usability. Throughout the project, I collaborated closely with a team, utilizing Agile methodology to improve project management efficiency and deliver high-quality software within the specified timeline. The technologies employed included  allowing for a comprehensive and impactful development process.</p>
            <h3>Technologies:</h3>
            <p className='technologies'>Azure Blog Storage, MongoDB, BrightScript, XML, SceneGraph, Github, Figma</p>
            <img className='convergePic'src='https://i.imgur.com/drVC1Vb.png'></img>
            <br></br>
            <button>Github</button>
          </article>
          <article className='thriftFits'>
            <h2><span className='experienceType'>ThriftFits </span><span className='dates'>April 2020 - June 2022</span></h2><br></br>
            <p>Our mission is to create a thrifting marketplace platform that enables an individual user to market their pre-loved clothing. Our application will allow buyers and sellers to form a community based on their shared interest for thrifting, fashion and sustainability.</p>
            <img className='thriftFitsPic'src='https://i.imgur.com/n90EcES.png'></img>
            <br></br>
            <button>Github</button>
          </article>
        </div>
      </div>
      
    );
  }

  export default Projects