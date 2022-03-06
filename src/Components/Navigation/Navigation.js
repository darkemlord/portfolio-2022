import "./Navigation.scss"
import emanuel from "../../assets/media/emanuels.png"


const Navigation = () => {
  return (
    <div className="nav-container">
      <div className="profile-container">
        <div className="name-container">
          <h1>Emanuel Caro</h1>
          <div className="dev-cont">
            <h3>Software</h3>
            <h3>Developer</h3>
          </div>
        </div>
        <div className="avatar">
          <img src={emanuel} alt="" />
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
          <button className="nav-button"><span>About Me</span></button>
          <button className="nav-button"><span>Skills</span></button>
          <button className="nav-button"><span>My projects</span></button>
          <button className="nav-button"><span>Contact Me</span></button>
        </div>
      </div>
    </div>
  )
}

export default Navigation
