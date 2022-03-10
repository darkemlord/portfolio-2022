import './AboutMe.scss'
import cv from '../../assets/files/EmanuelCaroMarch.pdf'

const AboutMe = () => {
  return (
    <div className='about-container'>
      <div className="text-container">
        <p>
          I am a passionate and driven software developer. I am constantly involved in new projects with the aim to develop quality products.<br /> In order to fuel my creativity and grow my skills I draw inspiration from numerous websites, such as GitHub, and developers around the world. <br/>The world of web development is continuously evolving and I spend my time progressing with it.
        </p>
      </div>
      <div className="button-container">
        <a className='download-container'href={cv} download >
          <button className='button-download'>Download CV</button>
        </a>
      </div>
    </div>
  )
}

export default AboutMe
