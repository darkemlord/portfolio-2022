import "./MyProjects.scss";
import Experience from "./Experience";
import { useState } from "react";

const MyProjects = () => {
  const experience = {
    id: "study",
    title: "Study Valley",
    year: "2022 - present",
    description:
      "Since joining Study Valley in 2022 as a Frontend Developer, I've specialized in React and TypeScript, focusing on creating scalable web applications. My work emphasizes code quality and maintainability, with extensive use of Redux for state management and Konva for interactive UI components. My proficiency with key React libraries enables me to meet diverse project requirements effectively. This role has enhanced my technical skills and understanding of frontend development, allowing me to contribute significantly to our projects in a collaborative environment.",
  };

  const projects = {
    id: "self-projects",
    title: "Projects",
    year: "2020 - present",
    description:
      "In the Projects section, you'll find a showcase of my personal endeavors, highlighting my proficiency in Ruby on Rails, React, and FastAPI with Python. Each project represents my dedication to developing scalable, efficient, and innovative web solutions. For a closer look at the code and to explore more of my work, I invite you to visit my GitHub page. There, you can delve into the details of how I apply these technologies to create dynamic and robust applications.",
  };
  const [currentInfo, setCurrentInfo] = useState([experience]);

  const handleClickChange = (info) => {
    setCurrentInfo(info);
  };

  return (
    <div className="projects-container">
      <div className="project-links">
        <button
          className="button-project"
          onClick={() => handleClickChange([experience])}
        >
          <h2>Experience</h2>
        </button>
        <button
          className="button-project"
          onClick={() => handleClickChange([projects])}
        >
          <h2>Projects</h2>
        </button>
      </div>
      <Experience currentInfo={currentInfo} />
    </div>
  );
};

export default MyProjects;
