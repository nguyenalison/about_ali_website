import React from 'react';
import './Work.css';
import NavBar from '../components/NavBar/NavBar';
import NameLogo from '../components/assets/Name-Logo.png';

function Work() {
    return (
      <div className="body">
        <div className='Header'>
          <img className='Name-Logo' src={NameLogo} alt='Ali Name Logo'></img>
          <NavBar> </NavBar>
        </div>    
        <div className='work'> 
          <article className='amazon'>
            <h2><span className='experienceType'>Software Engineer Intern - Amazon </span><span className='dates'>June 2022 - September 2022</span></h2><br></br>
            <p>During this project, I developed an end-to-end web service to streamline the onboarding process and enhance communication for internal customers. The initial milestone focused on building a customer-facing self-service portal for new registrations. The front-end incorporated a user-friendly table view of current customers and their locations, enabling easy registration. Additionally, the portal allowed users to register new routes with the Alexa Routes Team. On the backend, I implemented automated input parsing and sanitation to manage new routing information, which was stored in a routing file. This file automatically triggered a code review process for the Team's approval.</p>
          </article>
        </div>
      </div>
      
    );
  }

  export default Work