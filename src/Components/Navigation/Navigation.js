import "./Navigation.scss";
import emanuel from "../../assets/media/emanuel-avatar.png";

export const NAVIGATION_SECTIONS = {
  aboutMe: "About Me",
  skills: "Skills",
  myExperience: "My Experience",
  contactMe: "Contact me",
};

const Navigation = (props) => {
  const { titleChange } = props;

  const handleTitleChange = (urlParam) => {
    titleChange(urlParam);
  };

  const navigationSections = [
    {
      title: NAVIGATION_SECTIONS.aboutMe,
      handleClick: () => handleTitleChange(NAVIGATION_SECTIONS.aboutMe),
    },
    {
      title: NAVIGATION_SECTIONS.skills,
      handleClick: () => handleTitleChange(NAVIGATION_SECTIONS.skills),
    },
    {
      title: NAVIGATION_SECTIONS.myExperience,
      handleClick: () => handleTitleChange(NAVIGATION_SECTIONS.myExperience),
    },
    {
      title: NAVIGATION_SECTIONS.contactMe,
      handleClick: () => handleTitleChange(NAVIGATION_SECTIONS.contactMe),
    },
  ];

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
          <a
            href="https://www.facebook.com/emanuel.caro.129"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-facebook icon"></i>
          </a>
          <a
            href="https://github.com/darkemlord"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/emanuelcaro1/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/emanuelcaro/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>

        <div className="link-navigator">
          {navigationSections.map((section) => (
            <button
              key={section.title}
              className="nav-button"
              onClick={section.handleClick}
            >
              <span>{section.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
