import NycPic from '../components/assets/Nyc-Image.png'
import LinkedIn from '../components/assets/Linkedin-logo.png'
import Email from '../components/assets/Email-Image.png'
import Resume from '../components/assets/Resume-logo.png'
import GradPic from '../components/assets/Grad-Image.png'
import './Home.css'

function Home() {
    return (
        <div className='Intro'>
        <div className='Home-column1'>
          <img className='Grad-image' src={GradPic} alt='grad' ></img>
          <p className='Home-text'>The purpose of this personal portfolio is to showcase myself in a way that a single one page resume cannot shine light too.  The process of creating this page has been a lot of fun and has given me the chance the slow down and reflect on experiences that have built me thus far. </p>
          <br></br>
          <div>
          <p className='Contact-me'>CONTACT ME</p>
          <div className='contactMethods'>
            <a href='https://www.linkedin.com/in/alisonqnguyen/'><img className='LinkedIn-image' src={LinkedIn} alt='LinkedIn Logo'></img></a>  
            <p>nguyenqalison</p>
          </div>
          <div className='contactMethods'>
            <a href='https://www.linkedin.com/in/alisonqnguyen/'><img className='Email-image' src={Email} alt='Email Logo'></img></a>
            <p>  nguyenqalison@gmail.com</p>
          </div>
          <div className='contactMethods'>
            <a href='https://drive.google.com/file/d/15qbem8V_-zLArT36Vuaw0YNIgO4zS44K/view'><img className='Resume-Image' src={Resume} alt='Resume Logo'></img></a>
            <p>Resume</p>
          </div>
          </div>

        </div>
        
        <div className='Home-column2'>
          <p>Welcome to my personal portfolio! I recently graduated from Seattle University with a Bachelor's in Science with a degree in Computer Science. </p>
          <br></br>
          <p>The last 4th years have been the most transformative years of my life. I entered college and ... I learned how to show up and take space in a new place. I learned how to navigate the world under a pandemic. I learned how to be in community with people under such circumstances. I learned how to code. I learned how ambitious I could be. I learned how much I love working and collaborating with others. I learned that change excites me. I’ve learned to be intentional about the spaces I spend my time in. </p>
          <img className='Nyc-image' src={NycPic} alt='nyx' ></img>
        </div>
        <div>
        </div>
      </div>)
}

export default Home