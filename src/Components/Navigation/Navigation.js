import "./Navigation.scss"
import emanuel from "../../assets/media/emanuels.png"

const Navigation = (props) => {
  const { titlechange } = props

  const handleAboutClick = () => {
    titlechange('About Me');
  }

  const handleSkillClick = () => {
    titlechange('Skills');
  }

  const handleProjectsClick = () => {
    titlechange('My Projects');
  }

  const handleContactMe = () => {
    titlechange('Contact Me');
  }
  return (
    <div className="nav-container">
      <div className="profile-container">
        <div className="name-container">
          <div className="dev-cont">
            <h1>Emanuel Caro</h1>
            <h3>Software Developer</h3>
          </div>
          <div className="avatar">
            <img src={emanuel} alt="" />
          </div>
        </div>

      </div>
      <div className="links">
        <div className="social">
          <a href="https://www.facebook.com/emanuel.caro.129"><i className="fa-brands fa-facebook icon"></i></a>
          <a href="https://github.com/darkemlord"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.instagram.com/emanuelcaro1/"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/emanuelcaro/"><i className="fa-brands fa-linkedin"></i></a>
        </div>

        <div className="link-navegator">
          <button onClick={handleAboutClick} className="nav-button"><span>About Me</span></button>
          <button onClick={handleSkillClick} className="nav-button"><span>Skills</span></button>
          <button onClick={handleProjectsClick} className="nav-button"><span>My projects</span></button>
          <button onClick={handleContactMe} className="nav-button"><span>Contact Me</span></button>
        </div>
      </div>
    </div>
  )
}

export default Navigation
