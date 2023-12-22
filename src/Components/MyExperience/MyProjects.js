import "./MyProjects.scss";
import Experience from "./Experience";

const MyProjects = () => {
  return (
    <div className="projects-container">
      <div className="project-links">
        <button className="button-project">
          <h2>Experience</h2>
        </button>
      </div>
      <Experience />
    </div>
  );
};

export default MyProjects;
