import React from "react";
import { experienceContainer, infoContainer, title } from "./experienceStyles";

const experienceSections = [
  {
    id: "study",
    title: "Study Valley",
    description: "great experience",
  },
];

const Experience = () => {
  return (
    <div style={experienceContainer}>
      {experienceSections.map((experience) => (
        <div style={infoContainer} key={experience.id}>
          <h2 style={title}>{experience.title}</h2>
          <p>{experience.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
