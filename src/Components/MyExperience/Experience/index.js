import React from "react";
import {
  experienceContainer,
  infoContainer,
  title,
  titleSection,
} from "./experienceStyles";

const experienceSections = [
  {
    id: "study",
    title: "Study Valley",
    year: "2022 - present",
    description:
      "Since joining Study Valley in 2022, I have thrived as a Frontend Developer, primarily focusing on React and TypeScript. My role involves crafting scalable web applications, with a strong emphasis on code quality and maintainability. Key aspects of my work include expert use of Redux for state management, enhancing our applications' functionality and user experience. I have also worked extensively with Konva, which has been instrumental in building interactive UI components. My proficiency extends across various important React libraries, allowing me to adapt quickly to different project requirements. This experience has not only honed my technical skills but also deepened my understanding of the nuances of frontend development. In this collaborative and dynamic environment, I have grown both professionally and personally, contributing significantly to diverse and impactful projects.",
  },
];

const Experience = () => {
  return (
    <div style={experienceContainer}>
      {experienceSections.map((experience) => (
        <div style={infoContainer} key={experience.id}>
          <div style={titleSection}>
            <h2 style={title}>{experience.title}</h2>
            <span>{experience.year}</span>
          </div>
          <p>{experience.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
