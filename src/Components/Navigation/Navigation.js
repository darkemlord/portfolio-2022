import "./Navigation.scss"
import emanuel from "../../assets/media/emanuels.png"


const Navigation = () => {
  return (
    <div className="nav-container">
      <div className="profile-container">
        <h1>Emanuel Caro</h1>
        <h3>Software <br /> Developer</h3>
        <div className="avatar">
          <img src={emanuel} alt="" />
        </div>
      </div>
      <div className="links">
        <div className="social">
          <i className="fa-brands fa-facebook icon"></i>
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-linkedin"></i>
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
