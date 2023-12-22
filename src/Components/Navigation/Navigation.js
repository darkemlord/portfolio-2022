import "./Navigation.scss";
import emanuel from "../../assets/media/emanuel-avatar.png";
import { useNavigate, createSearchParams } from "react-router-dom";

export const NAVIGATION_SECTIONS = {
  aboutMe: "About Me",
  skills: "Skills",
  myExperience: "My Experience",
  contactMe: "Contact me",
};

export const NAVIGATION_PARAMS = {
  aboutMe: "about",
  skills: "skills",
  myExperience: "experience",
  contactMe: "contact",
};

const Navigation = () => {
  const navigate = useNavigate();

  const handleTitleChange = (urlParam) => {
    navigate({
      pathname: "/",
      search: createSearchParams({
        view: urlParam,
      }).toString(),
    });
  };

  const navigationSections = [
    {
      title: NAVIGATION_SECTIONS.aboutMe,
      handleClick: () => handleTitleChange(NAVIGATION_PARAMS.aboutMe),
    },
    {
      title: NAVIGATION_SECTIONS.skills,
      handleClick: () => handleTitleChange(NAVIGATION_PARAMS.skills),
    },
    {
      title: NAVIGATION_SECTIONS.myExperience,
      handleClick: () => handleTitleChange(NAVIGATION_PARAMS.myExperience),
    },
    {
      title: NAVIGATION_SECTIONS.contactMe,
      handleClick: () => handleTitleChange(NAVIGATION_PARAMS.contactMe),
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
